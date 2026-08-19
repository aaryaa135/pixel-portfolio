import { useEffect, useState } from 'react';
import PixelIcon from './PixelIcon';

// Shows a short retro boot sequence, then calls onDone() so App can
// reveal the desktop (and open a welcome window).
export default function BootScreen({ onDone }) {
  const [pct, setPct] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setPct((prev) => {
        const next = Math.min(100, prev + Math.random() * 18 + 6);
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(() => setHiding(true), 350);
          setTimeout(onDone, 1050);
        }
        return next;
      });
    }, 220);
    return () => clearInterval(iv);
  }, [onDone]);

  return (
    <div className={`boot${hiding ? ' boot-hide' : ''}`}>
      <PixelIcon name="star" className="boot-logo" />
      <div className="boot-text">
        AARYA-OS&nbsp; v1.0
        <br />
        INITIALIZING DEVELOPER ENVIRONMENT...<span className="boot-blink">_</span>
      </div>
      <div className="boot-barwrap">
        <div className="boot-bar" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
