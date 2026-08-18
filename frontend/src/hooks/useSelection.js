import { useState, useEffect, useRef, useCallback } from 'react';

export default function useSelection() {
  const [selection, setSelection] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;

    const target = e.target;
    if (target.closest('button, input, textarea, select, a[href], .tlbtn, .nav-trigger, .hamburger, .dock-item, .icon, .mobile-back-btn, .btn, .btn-sm, .contact-form input, .contact-form textarea')) {
      return;
    }

    startRef.current = { x: e.clientX, y: e.clientY };
    setIsSelecting(true);
    setSelection({
      x: e.clientX,
      y: e.clientY,
      width: 0,
      height: 0,
    });

    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isSelecting) return;

    const startX = startRef.current.x;
    const startY = startRef.current.y;
    const currentX = e.clientX;
    const currentY = e.clientY;

    const x = Math.min(startX, currentX);
    const y = Math.min(startY, currentY);
    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    setSelection({ x, y, width, height });
  }, [isSelecting]);

  const handleMouseUp = useCallback(() => {
    if (!isSelecting) return;
    setIsSelecting(false);
    setSelection(null);
  }, [isSelecting]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseMove, handleMouseUp, handleMouseDown]);

  return { selection, isSelecting };
}