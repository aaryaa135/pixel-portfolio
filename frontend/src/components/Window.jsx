import { useRef, useState, useCallback } from 'react';
import PixelIcon from './PixelIcon';
import ContactForm from './ContactForm';

// A single draggable / resizable / stackable macOS-style window.
// Dragging + resizing are done with plain mouse events and local
// state, so each window is independent of the others.
export default function Window({ win, index, onFocus, onClose, onMinimize, sfx }) {
  const { project, z, minimized } = win;

  const [pos, setPos] = useState(() => ({
    left: 120 + index * 26,
    top: 70 + index * 26,
  }));
  const [size, setSize] = useState({ width: 380, height: 380 });
  const [maximized, setMaximized] = useState(false);
  const prevRect = useRef(null);

  const dragRef = useRef(null);
  const resizeRef = useRef(null);

  const startDrag = useCallback(
    (e) => {
      if (e.target.closest('.tlbtn')) return;
      onFocus(project.id);
      dragRef.current = { dx: e.clientX - pos.left, dy: e.clientY - pos.top };

      const onMove = (ev) => {
        if (!dragRef.current) return;
        setPos({
          left: Math.max(0, ev.clientX - dragRef.current.dx),
          top: Math.max(34, ev.clientY - dragRef.current.dy),
        });
      };
      const onUp = () => {
        dragRef.current = null;
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    },
    [onFocus, project.id, pos.left, pos.top]
  );

  const startResize = useCallback(
    (e) => {
      e.stopPropagation();
      onFocus(project.id);
      resizeRef.current = { sx: e.clientX, sy: e.clientY, w: size.width, h: size.height };

      const onMove = (ev) => {
        if (!resizeRef.current) return;
        setSize({
          width: Math.max(280, resizeRef.current.w + (ev.clientX - resizeRef.current.sx)),
          height: Math.max(180, resizeRef.current.h + (ev.clientY - resizeRef.current.sy)),
        });
      };
      const onUp = () => {
        resizeRef.current = null;
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    },
    [onFocus, project.id, size.width, size.height]
  );

  const toggleMaximize = () => {
    sfx.click();
    if (!maximized) {
      prevRect.current = { ...pos, ...size };
      setPos({ left: 24, top: 46 });
      setSize({ width: window.innerWidth - 48, height: window.innerHeight - 150 });
    } else if (prevRect.current) {
      setPos({ left: prevRect.current.left, top: prevRect.current.top });
      setSize({ width: prevRect.current.width, height: prevRect.current.height });
    }
    setMaximized((m) => !m);
  };

  if (minimized) return null;

  return (
    <div
      className="win"
      style={{ left: pos.left, top: pos.top, width: size.width, height: size.height, zIndex: z }}
      onMouseDown={() => onFocus(project.id)}
    >
      <div className="titlebar" onMouseDown={startDrag}>
        <div className="tl-title pixel-font">
          <PixelIcon name={project.icon} className="ttico" />
          {project.title}
        </div>
        <div className="tl-buttons">
          <div
            className="tlbtn tlbtn--min"
            title="Minimize"
            onClick={() => {
              sfx.click();
              onMinimize(project.id);
            }}
          />
          <div className="tlbtn tlbtn--max" title="Maximize" onClick={toggleMaximize} />
          <div
            className="tlbtn tlbtn--close"
            title="Close"
            onClick={() => {
              sfx.close();
              onClose(project.id);
            }}
          />
        </div>
      </div>

      <div className="content">
        {project.id === 'proj-contact' ? (
          <ContactForm />
        ) : (
          // Project descriptions come from the backend/fallback data as
          // simple HTML strings (headings, tags, links) — safe here since
          // it's all content we author ourselves, not user input.
          <div dangerouslySetInnerHTML={{ __html: project.body }} />
        )}
      </div>

      <div className="resize-handle" onMouseDown={startResize} />
    </div>
  );
}
