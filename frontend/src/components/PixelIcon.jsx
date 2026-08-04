import { ICONS, iconPalettes, GIRL, girlPalette } from '../data/icons';

function normalizeRows(rows, len) {
  return rows.map((r) => (r.length < len ? r.padEnd(len, '.') : r.slice(0, len)));
}

function buildRects(rows, palette) {
  const rects = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch !== '.' && palette[ch]) {
        rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={palette[ch]} />);
      }
    }
  });
  return rects;
}

// Renders one of the named pixel icons from data/icons.js as crisp SVG.
export default function PixelIcon({ name, className }) {
  const raw = ICONS[name];
  if (!raw) return null;
  const width = raw[0].length;
  const rows = normalizeRows(raw, width);
  const palette = iconPalettes[name] || {};
  return (
    <svg viewBox={`0 0 ${width} ${rows.length}`} className={className} xmlns="http://www.w3.org/2000/svg">
      {buildRects(rows, palette)}
    </svg>
  );
}

// The pixel-art girl character (separate export since she isn't a "named icon").
export function GirlSprite({ className }) {
  const width = GIRL[0].length;
  const rows = normalizeRows(GIRL, width);
  return (
    <svg viewBox={`0 0 ${width} ${rows.length}`} className={className} xmlns="http://www.w3.org/2000/svg">
      {buildRects(rows, girlPalette)}
    </svg>
  );
}
