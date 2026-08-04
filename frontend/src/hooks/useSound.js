import { useRef, useCallback, useEffect } from 'react';

// Generates simple 8-bit "blip" sounds with the Web Audio API —
// no audio files needed. Browsers block audio until the user
// interacts with the page at least once, so we "unlock" the
// AudioContext on the first click anywhere on the page.
export default function useSound() {
  const ctxRef = useRef(null);

  const ensureContext = useCallback(() => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AudioCtx();
    }
    return ctxRef.current;
  }, []);

  useEffect(() => {
    const unlock = () => {
      const ctx = ensureContext();
      if (ctx.state === 'suspended') ctx.resume();
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    return () => window.removeEventListener('pointerdown', unlock);
  }, [ensureContext]);

  const blip = useCallback(
    (freqs, dur = 0.07, type = 'square', vol = 0.05) => {
      const ctx = ensureContext();
      let t = ctx.currentTime;
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(f, t + i * dur);
        gain.gain.setValueAtTime(vol, t + i * dur);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + (i + 1) * dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t + i * dur);
        osc.stop(t + (i + 1) * dur);
      });
    },
    [ensureContext]
  );

  return {
    open: () => blip([440, 660, 880], 0.06),
    close: () => blip([660, 440, 220], 0.06),
    click: () => blip([520], 0.05),
    trash: () => blip([300, 200, 150, 100], 0.05),
  };
}
