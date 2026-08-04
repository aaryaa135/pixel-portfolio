const CLOUD_CONFIGS = [
  { top: '12%', size: 120, dur: 38, delay: 0, fill: '#ffffff', op: 0.9 },
  { top: '22%', size: 80, dur: 52, delay: -14, fill: '#fff5fb', op: 0.8 },
  { top: '8%', size: 150, dur: 64, delay: -30, fill: '#ffffff', op: 0.7 },
  { top: '30%', size: 70, dur: 46, delay: -8, fill: '#fff5fb', op: 0.85 },
];

function CloudSVG({ fill }) {
  return (
    <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
      <g fill={fill}>
        <rect x="6" y="10" width="28" height="6" />
        <rect x="10" y="6" width="10" height="4" />
        <rect x="20" y="4" width="10" height="6" />
        <rect x="2" y="12" width="4" height="4" />
        <rect x="34" y="12" width="4" height="4" />
      </g>
    </svg>
  );
}

// Purely decorative, slow-drifting pixel clouds across the desktop background.
export default function Clouds() {
  return (
    <div className="cloud-layer" aria-hidden="true">
      {CLOUD_CONFIGS.map((c, i) => (
        <div
          key={i}
          className="cloud"
          style={{
            top: c.top,
            width: c.size,
            height: c.size * 0.5,
            opacity: c.op,
            animation: `drift ${c.dur}s linear ${c.delay}s infinite`,
          }}
        >
          <CloudSVG fill={c.fill} />
        </div>
      ))}
    </div>
  );
}
