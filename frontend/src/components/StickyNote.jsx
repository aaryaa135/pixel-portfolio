export default function StickyNote({ tagline, signature }) {
  return (
    <div className="sticky-note">
      <div className="sticky-pin" />
      <p>{tagline}</p>
      <span className="sticky-sign">— {signature}</span>
    </div>
  );
}
