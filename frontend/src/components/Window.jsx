import { useRef, useState, useCallback, useMemo } from 'react';
import PixelIcon from './PixelIcon';
import ContactForm from './ContactForm';
import MiniGame from './MiniGame';
import ResumeViewer from './ResumeViewer';
import EventsSection from './EventsSection';
import DOMPurify from 'dompurify';

// A single draggable / resizable / stackable macOS-style window.
// On mobile it renders as a full-screen panel instead — dragging
// and free resizing don't work well with touch, so those handlers
// are skipped entirely rather than just hidden visually.
export default function Window({ win, index, onFocus, onClose, onMinimize, sfx, isMobile }) {
  const { project, z, minimized } = win;

  const [pos, setPos] = useState(() => ({
    left: 140 + index * 28,
    top: 74 + index * 28,
  }));
  const [size, setSize] = useState({ width: 560, height: 440 });
  const [maximized, setMaximized] = useState(false);
  const prevRect = useRef(null);

  const dragRef = useRef(null);
  const resizeRef = useRef(null);

  const startDrag = useCallback(
    (e) => {
      if (isMobile) return;
      if (e.target.closest('.tlbtn')) return;
      onFocus(project.id);
      dragRef.current = { dx: e.clientX - pos.left, dy: e.clientY - pos.top };

      const onMove = (ev) => {
        if (!dragRef.current) return;
        setPos({
          left: Math.max(0, ev.clientX - dragRef.current.dx),
          top: Math.max(40, ev.clientY - dragRef.current.dy),
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
    [isMobile, onFocus, project.id, pos.left, pos.top]
  );

  const startResize = useCallback(
    (e) => {
      if (isMobile) return;
      e.stopPropagation();
      onFocus(project.id);
      resizeRef.current = { sx: e.clientX, sy: e.clientY, w: size.width, h: size.height };

      const onMove = (ev) => {
        if (!resizeRef.current) return;
        setSize({
          width: Math.max(320, resizeRef.current.w + (ev.clientX - resizeRef.current.sx)),
          height: Math.max(220, resizeRef.current.h + (ev.clientY - resizeRef.current.sy)),
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
    [isMobile, onFocus, project.id, size.width, size.height]
  );

  const toggleMaximize = () => {
    if (isMobile) return;
    sfx.click();
    if (!maximized) {
      prevRect.current = { ...pos, ...size };
      setPos({ left: 24, top: 50 });
      setSize({ width: window.innerWidth - 48, height: window.innerHeight - 150 });
    } else if (prevRect.current) {
      setPos({ left: prevRect.current.left, top: prevRect.current.top });
      setSize({ width: prevRect.current.width, height: prevRect.current.height });
    }
    setMaximized((m) => !m);
  };

  if (minimized) return null;

  const style = isMobile
    ? { left: 0, top: 40, right: 0, bottom: 0, width: 'auto', height: 'auto', zIndex: z }
    : { left: pos.left, top: pos.top, width: size.width, height: size.height, zIndex: z };

  return (
    <div
      className={`win${isMobile ? ' win--mobile' : ''}`}
      style={style}
      onMouseDown={() => onFocus(project.id)}
    >
      <div className="titlebar" onMouseDown={startDrag} style={{ cursor: isMobile ? 'default' : 'grab' }}>
        <div className="tl-title pixel-font">
          <PixelIcon name={project.icon} className="ttico" />
          {project.title}
        </div>
<div className="tl-buttons">
        {!isMobile && (
          <>
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
          </>
        )}
        {isMobile && (
          <button
            type="button"
            className="mobile-back-btn pixel-font"
            onClick={() => {
              sfx.close();
              onClose(project.id);
            }}
          >
            ← Back
          </button>
        )}
      </div>
      </div>

      <div className="content">
        {project.id === 'proj-contact' ? (
          <ContactForm />
        ) : project.id === 'proj-game' ? (
          <MiniGame />
        ) : project.id === 'proj-resume' ? (
          <ResumeViewer />
        ) : project.id === 'proj-events' ? (
          <EventsSection />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: useMemo(() => DOMPurify.sanitize(project.body), [project.body]) }} />
        )}
      </div>

      {!isMobile && <div className="resize-handle" onMouseDown={startResize} />}
    </div>
  );
}
