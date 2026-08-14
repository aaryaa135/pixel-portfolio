import { useState } from 'react';
import PixelIcon from './PixelIcon';

// Renders the desktop icon grid. On tablet/mobile this switches to a
// centered multi-column grid (via the `icons--compact` class) instead
// of the single left-hand column used on desktop.
export default function DesktopIcons({ projects, onOpen, isMobile, isTablet }) {
  const [selectedId, setSelectedId] = useState(null);
  const compact = isMobile || isTablet;

  const guideProject = projects.find((p) => p.id === 'proj-guide');
  const otherProjects = projects.filter((p) => p.id !== 'proj-guide');

  return (
    <div className={`icons${compact ? ' icons--compact' : ''}`}>
      {otherProjects.map((p) => (
        <button
          key={p.id}
          type="button"
          className={`icon${selectedId === p.id ? ' icon--selected' : ''}`}
          onClick={() => {
            setSelectedId(p.id);
            onOpen(p);
          }}
        >
          <PixelIcon name={p.icon} className="icon-img" />
          <span>{p.label}</span>
        </button>
      ))}
      {guideProject && !compact && (
        <button
          key="proj-guide"
          type="button"
          className={`icon${selectedId === 'proj-guide' ? ' icon--selected' : ''} icon--guide`}
          onClick={() => {
            setSelectedId('proj-guide');
            onOpen(guideProject);
          }}
        >
          <PixelIcon name={guideProject.icon} className="icon-img" />
          <span>{guideProject.label}</span>
        </button>
      )}
      {compact && guideProject && (
        <button
          key="proj-guide"
          type="button"
          className={`icon${selectedId === 'proj-guide' ? ' icon--selected' : ''}`}
          onClick={() => {
            setSelectedId('proj-guide');
            onOpen(guideProject);
          }}
        >
          <PixelIcon name={guideProject.icon} className="icon-img" />
          <span>{guideProject.label}</span>
        </button>
      )}
    </div>
  );
}
