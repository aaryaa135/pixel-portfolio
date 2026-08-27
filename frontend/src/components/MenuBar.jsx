import { useState, useRef, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import useClock from '../hooks/useClock';

// All projects organized by dropdown category
const MENU_CATEGORIES = {
  file: {
    label: 'File',
    items: [
      { id: 'github', label: 'View source on GitHub', icon: 'github', external: true },
      { id: 'close-all', label: 'Close all windows', icon: 'close' },
    ],
  },
  projects: {
    label: 'Projects',
    items: [
      'proj-projects',
      'proj-game',
      'proj-certificates',
    ],
  },
  about: {
    label: 'About',
    items: [
      'proj-about',
      'proj-stack',
      'proj-resume',
      'proj-events',
      'proj-contact',
      'proj-guide',
    ],
  },
};

// Map project ID to icon name from icons.js
const PROJECT_ICON = {
  'proj-about': 'idcard',
  'proj-stack': 'stack',
  'proj-resume': 'scroll',
  'proj-contact': 'mail',
  'proj-projects': 'code',
  'proj-game': 'joystick',
  'proj-guide': 'trash',
  'proj-certificates': 'certificate',
  'proj-events': 'calendar',
};

export default function MenuBar({ name, title, projects, onOpen, onCloseAll, isMobile, githubUrl }) {
  const time = useClock();
  const [openMenu, setOpenMenu] = useState(null);
  const barRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = () => setOpenMenu(null);
    window.addEventListener('click', closeOnOutsideClick);
    return () => window.removeEventListener('click', closeOnOutsideClick);
  }, []);

  const toggle = (menu) => (e) => {
    e.stopPropagation();
    setOpenMenu((m) => (m === menu ? null : menu));
  };

  const handleOpen = (project) => (e) => {
    e.stopPropagation();
    onOpen(project);
    setOpenMenu(null);
  };

  const handleSpecial = (item) => (e) => {
    e.stopPropagation();
    if (item.id === 'github' && githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    } else if (item.id === 'close-all') {
      onCloseAll();
    }
    setOpenMenu(null);
  };

  // Build project map for quick lookup
  const projectMap = new Map(projects.map(p => [p.id, p]));

  const renderNavRow = (itemId) => {
    const project = projectMap.get(itemId);
    if (!project) return null;
    const iconName = PROJECT_ICON[itemId] || 'window';
    return (
      <div key={itemId} className="nav-row" onClick={handleOpen(project)}>
        <PixelIcon name={iconName} className="nav-icon" />
        {project.label}
      </div>
    );
  };

  const renderSpecialRow = (item) => (
    <div key={item.id} className="nav-row" onClick={handleSpecial(item)}>
      <PixelIcon name={item.icon} className="nav-icon" />
      {item.label}
    </div>
  );

  return (
    <div className="menubar" ref={barRef} onClick={(e) => e.stopPropagation()}>
      <div className="menubar-side">
        <span className="menubar-logo pixel-font">
          {isMobile ? (
            <>
              <PixelIcon name="code" className="menubar-face" />
              <span style={{ marginLeft: '6px' }}>AARYA-OS</span>
            </>
          ) : (
            <>
              <PixelIcon name="faceLogo" className="menubar-face" /> {name}
            </>
          )}
        </span>
        <span className="menubar-subtitle">{isMobile ? '' : title}</span>

        {!isMobile && (
          <>
            <span className="menubar-divider" />

            {/* File Menu */}
            <div className="nav-item">
              <span
                className={`nav-trigger${openMenu === 'file' ? ' nav-trigger--active' : ''}`}
                onClick={toggle('file')}
              >
                File
              </span>
              {openMenu === 'file' && (
                <div className="nav-dropdown">
                  {MENU_CATEGORIES.file.items.map((item) => renderSpecialRow(item))}
                </div>
              )}
            </div>

            {/* Projects Menu */}
            <div className="nav-item">
              <span
                className={`nav-trigger${openMenu === 'projects' ? ' nav-trigger--active' : ''}`}
                onClick={toggle('projects')}
              >
                Projects
              </span>
              {openMenu === 'projects' && (
                <div className="nav-dropdown">
                  {MENU_CATEGORIES.projects.items.map((id) => renderNavRow(id))}
                </div>
              )}
            </div>

            {/* About Menu */}
            <div className="nav-item">
              <span
                className={`nav-trigger${openMenu === 'about' ? ' nav-trigger--active' : ''}`}
                onClick={toggle('about')}
              >
                About
              </span>
              {openMenu === 'about' && (
                <div className="nav-dropdown">
                  {MENU_CATEGORIES.about.items.map((id) => renderNavRow(id))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className="menubar-side">
        {!isMobile && (
          <>
            <span className="menubar-status" title="Wi-Fi">
              🛜
            </span>
            <span className="menubar-status" title="Battery">
              🔋
            </span>
          </>
        )}
        <span className="menubar-clock pixel-font">{time}</span>

        {isMobile && (
          <div className="nav-item">
            <span className="hamburger" onClick={toggle('mobile')}>
              <span className="hamburger-inner">=</span>
            </span>
            {openMenu === 'mobile' && (
              <div className="nav-dropdown nav-dropdown--right">
                {MENU_CATEGORIES.file.items.map((item) => renderSpecialRow(item))}
                <div className="nav-divider" />
                {MENU_CATEGORIES.projects.items.map((id) => renderNavRow(id))}
                {MENU_CATEGORIES.about.items.map((id) => renderNavRow(id))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}