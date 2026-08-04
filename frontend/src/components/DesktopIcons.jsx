import { useState } from 'react';
import PixelIcon from './PixelIcon';

export default function DesktopIcons({ projects, onOpen }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="icons">
      {projects.map((p) => (
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
