import { useEffect, useRef, useState } from 'react';
import PixelIcon from './PixelIcon';

const HARDWARE_CONFIGS = [
  { name: 'monitor', top: '15%', left: '5%', size: 80, dur: 45, delay: 0, opacity: 0.15 },
  { name: 'keyboard', top: '70%', left: '8%', size: 100, dur: 55, delay: -12, opacity: 0.12 },
  { name: 'mouse', top: '75%', left: '85%', size: 50, dur: 40, delay: -8, opacity: 0.15 },
  { name: 'headphones', top: '25%', left: '90%', size: 90, dur: 50, delay: -20, opacity: 0.1 },
  { name: 'phone', top: '55%', left: '3%', size: 60, dur: 48, delay: -5, opacity: 0.12 },
  { name: 'server', top: '40%', left: '92%', size: 70, dur: 60, delay: -30, opacity: 0.08 },
];

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export default function TechHardware() {
  const [items, setItems] = useState(() =>
    HARDWARE_CONFIGS.map((c) => ({
      ...c,
      left: `${randomFloat(parseFloat(c.left) - 3, parseFloat(c.left) + 3)}%`,
      top: `${randomFloat(parseFloat(c.top) - 3, parseFloat(c.top) + 3)}%`,
      size: c.size * randomFloat(0.85, 1.15),
      rotation: randomFloat(-5, 5),
    }))
  );

  useEffect(() => {
    let raf;
    const animate = () => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          left: `${parseFloat(item.left) + (Math.random() - 0.5) * 0.08}%`,
          top: `${parseFloat(item.top) + (Math.random() - 0.5) * 0.06}%`,
          rotation: item.rotation + (Math.random() - 0.5) * 0.3,
        }))
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="tech-hardware-layer" aria-hidden="true">
      {items.map((item, i) => (
        <div
          key={i}
          className="tech-item"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            opacity: item.opacity,
            transform: `rotate(${item.rotation}deg)`,
            animation: `drift ${item.dur}s linear ${item.delay}s infinite`,
          }}
        >
          <PixelIcon name={item.name} />
        </div>
      ))}
    </div>
  );
}