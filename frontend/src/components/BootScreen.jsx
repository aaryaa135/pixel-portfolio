import { useEffect, useState, useRef } from 'react';
import PixelIcon from './PixelIcon';

const BOOT_LINES = [
  'AARYA-OS v1.0',
  'INITIALIZING DEVELOPER ENVIRONMENT...',
  'LOADING KERNEL MODULES............ OK',
  'MOUNTING /dev/skills................ OK',
  'STARTING NETWORK STACK.............. OK',
  'CALIBRATING PIXEL GRID.............. OK',
  'INJECTING CREATIVITY DRIVERS........ OK',
  'SYNCING GITHUB REPOS................ OK',
  'PRECOMPILING SHADERS................ OK',
  'ESTABLISHING WEBSOCKET LINK......... OK',
  'BOOT COMPLETE. WELCOME BACK, AARYA.',
];

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function randomGlitchChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

export default function BootScreen({ onDone }) {
  const [phase, setPhase] = useState('crt-on');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const [hiding, setHiding] = useState(false);
  const [showScanlines, setShowScanlines] = useState(true);
  const lineTimerRef = useRef(null);
  const charTimerRef = useRef(null);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 300));
      setPhase('typing');
      setShowScanlines(true);

      for (let i = 0; i < BOOT_LINES.length; i++) {
        const line = BOOT_LINES[i];
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
          }, i === 0 ? 80 : 30);
        });

        if (i < BOOT_LINES.length - 1) {
          await new Promise(r => setTimeout(r, 120));
        }
      }

      await new Promise(r => setTimeout(r, 500));
      setPhase('glitch');
      setShowScanlines(false);

      await new Promise(r => setTimeout(r, 400));
      setHiding(true);
      await new Promise(r => setTimeout(r, 700));
      onDone();
    };

    sequence();
    return () => {
      clearInterval(lineTimerRef.current);
      clearInterval(charTimerRef.current);
    };
  }, [onDone]);

  const glitchStyle = phase === 'glitch' ? {
    animation: 'glitchSkew 0.05s infinite linear alternate-reverse',
  } : {};

  return (
    <div className={`boot ${phase} ${hiding ? 'boot-hide' : ''}`} style={glitchStyle}>
      <div className="boot-scanlines" style={{ display: showScanlines ? 'block' : 'none' }} />
      <div className="boot-vignette" />
      
      <div className="boot-content">
        {phase === 'crt-on' && (
          <div className="crt-poweron">
            <PixelIcon name="star" className="boot-logo crt-logo" />
            <div className="crt-text">AARYA-OS</div>
          </div>
        )}

        {phase === 'typing' && (
          <div className="boot-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">boot.log</div>
            </div>
            <div className="terminal-body">
              {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
                <div key={i} className="terminal-line">{line}</div>
              ))}
              <div className="terminal-line current">
                <span className="terminal-prompt">{'>'} </span>
                <span className="terminal-text">{currentLine}</span>
                <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>
        )}

        {phase === 'glitch' && (
          <div className="boot-glitch">
            <PixelIcon name="star" className="boot-logo glitch-logo" />
            <div className="glitch-text" data-text="READY">READY</div>
          </div>
        )}
      </div>
    </div>
  );
}
