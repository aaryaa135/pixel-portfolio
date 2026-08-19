import { useEffect, useState, useRef } from 'react';
import PixelIcon from './PixelIcon';

const OPENING_LINES = [
  'SYSTEM ONLINE',
  'PIXEL GRID ACTIVE',
  'NEURAL INTERFACE READY',
  'WELCOME BACK, DEVELOPER',
];

export default function OpeningAnimation({ onDone }) {
  const [phase, setPhase] = useState('pixel-burst');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const [hiding, setHiding] = useState(false);
  const [particles, setParticles] = useState([]);
  const charTimerRef = useRef(null);

  useEffect(() => {
    const initParticles = [];
    for (let i = 0; i < 30; i++) {
      initParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: [`#ff8fc0`, `#cdb8ec`, `#b8ecd6`, `#ffdab3`][Math.floor(Math.random() * 4)],
      });
    }
    setParticles(initParticles);

    const sequence = async () => {
      await new Promise(r => setTimeout(r, 200));
      setPhase('typing');

      for (let i = 0; i < OPENING_LINES.length; i++) {
        const line = OPENING_LINES[i];
        setLineIndex(i);
        setCurrentLine('');
        setCharIndex(0);

        await new Promise(r => {
          charTimerRef.current = setInterval(() => {
            setCharIndex(prev => {
              const next = prev + 1;
              setCurrentLine(line.slice(0, next));
              if (next >= line.length) {
                clearInterval(charTimerRef.current);
                return prev;
              }
              return next;
            });
          }, 60);
        });

        if (i < OPENING_LINES.length - 1) {
          await new Promise(r => setTimeout(r, 200));
        }
      }

      await new Promise(r => setTimeout(r, 600));
      setPhase('glitch-flash');
      await new Promise(r => setTimeout(r, 300));
      setHiding(true);
      await new Promise(r => setTimeout(r, 500));
      onDone();
    };

    sequence();
    return () => clearInterval(charTimerRef.current);
  }, [onDone]);

  const animateParticles = () => {
    setParticles(prev => prev.map(p => ({
      ...p,
      x: (p.x + p.speedX + 100) % 100,
      y: (p.y + p.speedY + 100) % 100,
    })));
  };

  useEffect(() => {
    if (phase !== 'pixel-burst') return;
    const id = setInterval(animateParticles, 50);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <div className={`opening ${phase} ${hiding ? 'opening-hide' : ''}`}>
      <div className="opening-bg" />
      <div className="opening-scanlines" />
      
      {phase === 'pixel-burst' && (
        <div className="particle-field">
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.color,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>
      )}

      <div className="opening-content">
        {phase === 'pixel-burst' && (
          <PixelIcon name="star" className="opening-logo pulse" />
        )}

        {phase === 'typing' && (
          <div className="opening-terminal">
            <div className="opening-terminal-header">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="opening-terminal-body">
              {OPENING_LINES.slice(0, lineIndex).map((line, i) => (
                <div key={i} className="opening-line">{line}</div>
              ))}
              <div className="opening-line current">
                <span className="opening-prompt">{'>'} </span>
                <span className="opening-text">{currentLine}</span>
                <span className="opening-cursor">█</span>
              </div>
            </div>
          </div>
        )}

        {phase === 'glitch-flash' && (
          <div className="glitch-flash">
            <PixelIcon name="star" className="opening-logo glitch" />
            <div className="glitch-text" data-text="INITIALIZING...">INITIALIZING...</div>
          </div>
        )}
      </div>
    </div>
  );
}