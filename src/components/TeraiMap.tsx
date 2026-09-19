import { regionMap } from "../content/terai-paths";
import { mapCaption } from "../content/problem";

const FADE = 0.12; // share of the figure over which the plain band fades out at each edge
const SOFTEN = 12; // blur radius, in viewBox units, that feathers the band's own boundary

/**
 * Nepal and the plain to its south: the Ganges Plain as a faint band with feathered
 * edges that fades out at the left, right and bottom of the figure, the 21 Terai
 * districts shaded, Kanchanpur district (home) in the accent, Bihar outlined, and three
 * small labels. Paths come from real boundary data; see scripts/make_terai_svg.py.
 */
export function TeraiMap() {
  const { width: w, height: h } = regionMap;
  const fx = Math.round(w * FADE);
  const fy = Math.round(h * FADE);
  const { leader, regionLabel } = regionMap;

  return (
    <figure className="map">
      <svg viewBox={regionMap.viewBox} role="img" aria-labelledby="map-title">
        <title id="map-title">
          Map of Nepal and the Ganges Plain to its south. The plain is a faint band across
          Bihar and Uttar Pradesh, the 21 Terai districts of Nepal are shaded green, and
          Kanchanpur district in the far west is dark green.
        </title>
        <defs>
          <filter id="soften" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation={SOFTEN} />
          </filter>
          <linearGradient id="fade-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#000" stopOpacity="1" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fade-right" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0" stopColor="#000" stopOpacity="1" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fade-bottom" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#000" stopOpacity="1" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <mask id="plain-fade" maskUnits="userSpaceOnUse" x="0" y="0" width={w} height={h}>
            <rect x="0" y="0" width={w} height={h} fill="#fff" />
            <rect x="0" y="0" width={fx} height={h} fill="url(#fade-left)" />
            <rect x={w - fx} y="0" width={fx} height={h} fill="url(#fade-right)" />
            <rect x="0" y={h - fy} width={w} height={fy} fill="url(#fade-bottom)" />
          </mask>
        </defs>
        <path d={regionMap.plain} fill="#EAE7DE" filter="url(#soften)" mask="url(#plain-fade)" />
        <path d={regionMap.terai} fill="#B5C9A7" />
        <path d={regionMap.kanchanpur} fill="#2F6B3A" />
        <path
          d={regionMap.bihar}
          fill="none"
          stroke="#B8B4AB"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
        <path
          d={regionMap.nepal}
          fill="none"
          stroke="#6B6B6B"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
        <text x={regionLabel.x} y={regionLabel.y} className="map-region">
          {regionLabel.text}
        </text>
        <line x1={leader.x1} y1={leader.y1} x2={leader.x2} y2={leader.y2} className="map-leader" />
        {regionMap.labels.map((label) => (
          <text key={label.text} x={label.x} y={label.y} className="map-label" textAnchor="middle">
            {label.text}
          </text>
        ))}
      </svg>
      <figcaption>{mapCaption}</figcaption>
    </figure>
  );
}
