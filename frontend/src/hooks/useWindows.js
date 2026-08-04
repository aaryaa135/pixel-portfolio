import { useState, useCallback, useRef } from 'react';

// Manages the set of open desktop windows: which ones are open,
// their stacking order (z-index), and minimized state.
// Each Window component manages its own drag position/size locally.
export default function useWindows() {
  const [windows, setWindows] = useState([]); // [{ id, project, z, minimized }]
  const zRef = useRef(10);

  const open = useCallback((project) => {
    if (!project) return;
    zRef.current += 1;
    const z = zRef.current;
    setWindows((prev) => {
      const exists = prev.find((w) => w.id === project.id);
      if (exists) {
        return prev.map((w) => (w.id === project.id ? { ...w, z, minimized: false } : w));
      }
      return [...prev, { id: project.id, project, z, minimized: false }];
    });
  }, []);

  const close = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const focus = useCallback((id) => {
    zRef.current += 1;
    const z = zRef.current;
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, z } : w)));
  }, []);

  const minimize = useCallback((id) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const closeAll = useCallback(() => setWindows([]), []);

  return { windows, open, close, focus, minimize, closeAll };
}
