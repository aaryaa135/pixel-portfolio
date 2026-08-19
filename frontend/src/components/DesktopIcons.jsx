import { useState } from 'react';
import PixelIcon from './PixelIcon';

const DESKTOP_ICON_ORDER = [
  'proj-about',
  'proj-stack',
  'proj-projects',
  'proj-resume',
  'proj-events',
  'proj-certificates',
  'proj-game',
  'proj-contact',
];

export default function DesktopIcons({ projects, onOpen, isMobile, isTablet }) {
  const [selectedId, setSelectedId] = useState(null);
  const compact = isMobile || isTablet;

  const projectMap = new Map(projects.map(p => [p.id, p]));
  const orderedProjects = DESKTOP_ICON_ORDER
    .map(id => projectMap.get(id))
    .filter(Boolean);

  return (
    <div className={`icons${compact ? ' icons--compact' : ''}`}>
      {orderedProjects.map((p) => (
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
    </div>
  );
}
