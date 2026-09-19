# -*- coding: utf-8 -*-
"""Generate the map paths for the site from real boundary data.

Sources (read only, not copied into the repo):
  * the 21 Terai districts used in the heat-stress research
  * Nepal's national outline (geoBoundaries ADM0)
  * the Ganges Plain polygon from Natural Earth 10m physical regions
  * Bihar (geoBoundaries IND ADM1) and Madhesh Province (geoBoundaries NPL ADM1)
    The last three live in ../portfolio-data/ with a README that names the downloads.

Writes:
  src/content/terai-paths.ts   path data and label positions for the inline SVG component
  public/favicon.svg           filled silhouette of Nepal, Terai band in the accent
  public/og.svg                1200 x 630 social image with name, title, map
  public/og.png                the same card as a PNG, for platforms that ignore SVG

Run from the repo root with:  PYTHONIOENCODING=utf-8 python scripts/make_terai_svg.py
Rerun only if the boundary files or the social-card text change.
"""
from math import cos, radians
from pathlib import Path

import geopandas as gpd
from shapely.geometry import MultiPolygon, Point, Polygon, box

TERAI = r"C:\Users\Santosh\desktop\Final Year Things\KSS\Project\terai-heat\data\boundaries\terai_21_pre2017.geojson"
NEPAL = r"C:\Users\Santosh\desktop\Final Year Things\Gap Year Ideas\Crop\data\boundaries\source\geoBoundaries-NPL-ADM0-9469f09.geojson"
DATA = Path(r"C:\Users\Santosh\desktop\Final Year Things\Summer Plans\portfolio-data")
PLAIN = DATA / "ganges_plain_ne10m.geojson"
BIHAR = DATA / "bihar_geoboundaries_adm1.geojson"
MADHESH = DATA / "madhesh_geoboundaries_adm1.geojson"

ROOT = Path(__file__).resolve().parents[1]
TOL = 0.03          # degrees, about 3.3 km
WIDTH = 1000        # viewBox width in user units
MIN_PART = 0.001    # drop slivers smaller than this (square degrees)

# Regional view for the site map: Nepal plus the plain to its south and east.
REGION = (79.4, 23.9, 89.4, 30.8)   # min lon, min lat, max lon, max lat

# Label geometry in viewBox units (font sizes live in the stylesheet).
LABEL_CAP = 30          # cap height of the 40-unit place labels
REGION_LABEL_W = 330    # width of "Indo-Gangetic Plain" at 34 units, italic
REGION_LABEL_H = 34

ACCENT = "#2F6B3A"
TERAI_FILL = "#B5C9A7"
OUTLINE = "#6B6B6B"
SILHOUETTE = "#D9D6CF"
TEXT = "#1B1B1B"
MUTED = "#5F5F5F"


def parts(geom):
    if isinstance(geom, Polygon):
        return [geom]
    if isinstance(geom, MultiPolygon):
        return list(geom.geoms)
    return [g for g in getattr(geom, "geoms", []) if isinstance(g, Polygon)]


class Frame:
    """Plate carree projection of a lon/lat box onto a WIDTH-wide viewBox."""

    def __init__(self, minx, miny, maxx, maxy):
        self.minx, self.miny, self.maxx, self.maxy = minx, miny, maxx, maxy
        self.k = cos(radians((miny + maxy) / 2))
        self.sx = WIDTH / (maxx - minx)
        self.height = round((maxy - miny) * self.sx * self.k)
        self.view = f"0 0 {WIDTH} {self.height}"

    def point(self, lon, lat):
        return (
            round((lon - self.minx) * self.sx),
            round(self.height - (lat - self.miny) * self.sx * self.k),
        )

    def lonlat(self, x, y):
        return (self.minx + x / self.sx, self.miny + (self.height - y) / (self.sx * self.k))

    def path(self, geom):
        d = []
        for poly in parts(geom):
            if poly.area < MIN_PART:
                continue
            pts, last = [], None
            for lon, lat in poly.exterior.coords:
                p = self.point(lon, lat)
                if p != last:
                    pts.append(p)
                    last = p
            if len(pts) > 1 and pts[0] == pts[-1]:
                pts.pop()
            if len(pts) < 3:
                continue
            d.append("M" + " L".join(f"{x} {y}" for x, y in pts) + "Z")
        return "".join(d)


def simplified(geom):
    return geom.simplify(TOL, preserve_topology=True)


def box_inside(frame, inside, outside, x0, y0, x1, y1):
    """True if the corners and centre of a viewBox rectangle fall in `inside` and out of `outside`."""
    pts = [(x0, y0), (x1, y0), (x0, y1), (x1, y1), ((x0 + x1) / 2, (y0 + y1) / 2)]
    for x, y in pts:
        p = Point(*frame.lonlat(x, y))
        if not inside.contains(p) or any(g.contains(p) for g in outside):
            return False
    return True


def main():
    terai = gpd.read_file(TERAI)
    nepal = gpd.read_file(NEPAL)
    assert str(terai.crs) == "EPSG:4326" and str(nepal.crs) == "EPSG:4326"

    outline = nepal.geometry.iloc[0]
    outline_s = simplified(outline)
    belt = simplified(terai.geometry.union_all()).intersection(outline_s)
    home = terai.loc[terai["NAME_3"] == "Kanchanpur"].geometry.iloc[0]
    home_s = simplified(home).intersection(outline_s)

    plain = simplified(gpd.read_file(PLAIN).geometry.iloc[0])
    bihar = simplified(gpd.read_file(BIHAR).geometry.iloc[0])
    madhesh = gpd.read_file(MADHESH).geometry.iloc[0]

    # Site map: regional frame, everything clipped to the frame.
    region = Frame(*REGION)
    clip = box(*REGION)
    plain_c = plain.intersection(clip).difference(outline_s)
    site = {
        "nepal": region.path(outline_s),
        "terai": region.path(belt),
        "kanchanpur": region.path(home_s),
        "plain": region.path(plain_c),
        "bihar": region.path(bihar.intersection(clip)),
    }

    # "Madhesh" sits just below the border, under the province, with a short leader up into it.
    m_lon = madhesh.representative_point().x
    m_x, m_south = region.point(m_lon, madhesh.bounds[1])
    madhesh_label = (m_x, m_south + 14 + LABEL_CAP)
    leader = ((m_x, m_south + 8), (m_x, m_south - 20))

    # "Bihar" goes in the state's south-east, clear of the Madhesh label.
    bihar_label = None
    for lon, lat in [(86.75, 25.1), (86.5, 25.0), (86.9, 25.3), (86.2, 24.9)]:
        if bihar.contains(Point(lon, lat)):
            bihar_label = region.point(lon, lat)
            break
    if bihar_label is None:
        bihar_label = region.point(*bihar.representative_point().coords[0])

    # "Indo-Gangetic Plain" in the lower left, wholly on the band and off Bihar and Nepal.
    region_label = None
    for x, y in [(52, 520), (52, 490), (52, 550), (80, 520), (52, 460), (110, 500)]:
        if box_inside(region, plain_c, [bihar, outline_s], x, y - REGION_LABEL_H, x + REGION_LABEL_W, y + 8):
            region_label = (x, y)
            break
    if region_label is None:
        region_label = (52, 520)
        print("warning: no clean spot found for the plain label; using the default")

    ts = (
        "// Generated by scripts/make_terai_svg.py from real boundary data: the 21-district Terai\n"
        "// file used in the heat-stress research, the geoBoundaries outlines of Nepal, Bihar and\n"
        "// Madhesh Province, and the Ganges Plain polygon from Natural Earth. Do not edit by hand.\n"
        "export const regionMap = {\n"
        f'  viewBox: "{region.view}",\n'
        f"  width: {WIDTH},\n"
        f"  height: {region.height},\n"
        f'  nepal: "{site["nepal"]}",\n'
        f'  terai: "{site["terai"]}",\n'
        f'  kanchanpur: "{site["kanchanpur"]}",\n'
        f'  plain: "{site["plain"]}",\n'
        f'  bihar: "{site["bihar"]}",\n'
        "  labels: [\n"
        f'    {{ text: "Bihar", x: {bihar_label[0]}, y: {bihar_label[1]} }},\n'
        f'    {{ text: "Madhesh", x: {madhesh_label[0]}, y: {madhesh_label[1]} }},\n'
        "  ],\n"
        f"  leader: {{ x1: {leader[0][0]}, y1: {leader[0][1]}, x2: {leader[1][0]}, y2: {leader[1][1]} }},\n"
        f'  regionLabel: {{ text: "Indo-Gangetic Plain", x: {region_label[0]}, y: {region_label[1]} }},\n'
        "} as const;\n"
    )
    (ROOT / "src" / "content" / "terai-paths.ts").write_text(ts, encoding="utf-8")

    # Favicon and social card use a Nepal-only frame, as before.
    nf = Frame(*outline.bounds)
    nepal_d, belt_d, home_d = nf.path(outline_s), nf.path(belt), nf.path(home_s)
    height = nf.height

    # Favicon: square viewBox, map centred vertically, filled shapes only (an outline
    # dissolves at 16 px, a silhouette does not).
    pad = (WIDTH - height) // 2
    favicon = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -{pad} {WIDTH} {WIDTH}">'
        f'<path d="{nepal_d}" fill="{SILHOUETTE}"/>'
        f'<path d="{belt_d}" fill="{ACCENT}"/>'
        "</svg>\n"
    )
    (ROOT / "public" / "favicon.svg").write_text(favicon, encoding="utf-8")

    # Social image: white card, name and title on the left, the map on the right.
    scale = 560 / WIDTH
    og = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">'
        '<rect width="1200" height="630" fill="#FFFFFF"/>'
        f'<text x="72" y="270" font-family="Charter, Georgia, serif" font-size="64" fill="{TEXT}">Santosh Pant</text>'
        f'<text x="72" y="322" font-family="system-ui, Segoe UI, Helvetica, Arial, sans-serif" font-size="26" fill="{MUTED}">'
        "Machine learning for Earth observation</text>"
        f'<text x="72" y="358" font-family="system-ui, Segoe UI, Helvetica, Arial, sans-serif" font-size="26" fill="{MUTED}">'
        "Knox College, 2027.</text>"
        f'<g transform="translate(600 {round((630 - height * scale) / 2)}) scale({scale:.4f})">'
        f'<path d="{belt_d}" fill="{TERAI_FILL}"/>'
        f'<path d="{home_d}" fill="{ACCENT}"/>'
        f'<path d="{nepal_d}" fill="none" stroke="{OUTLINE}" stroke-width="2" stroke-linejoin="round"/>'
        "</g></svg>\n"
    )
    (ROOT / "public" / "og.svg").write_text(og, encoding="utf-8")

    # Social platforms do not render SVG previews, so also write a PNG of the same card.
    try:
        import fitz  # PyMuPDF

        page = fitz.open(str(ROOT / "public" / "og.svg"))[0]
        page.get_pixmap(matrix=fitz.Matrix(1, 1), alpha=False).save(str(ROOT / "public" / "og.png"))
        png = "og.png"
    except ImportError:
        png = "(og.png skipped: PyMuPDF not installed)"

    print("site viewBox", region.view)
    print("labels: Bihar", bihar_label, "| Madhesh", madhesh_label, "leader", leader, "| plain", region_label)
    print("bytes:", {k: len(v) for k, v in site.items()})
    print("wrote terai-paths.ts, favicon.svg, og.svg,", png)


if __name__ == "__main__":
    main()
