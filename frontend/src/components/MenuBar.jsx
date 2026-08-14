import { useState, useRef, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import useClock from '../hooks/useClock';

// Which project ids belong to which nav category. Edit these arrays
// if you rename/add project ids so the dropdowns keep matching reality.
const PROJECT_CATEGORY_IDS = ['proj-projects', 'proj-game'];
const ABOUT_CATEGORY_IDS = ['proj-about', 'proj-stack', 'proj-resume', 'proj-contact'];

const ICON_FOR = {
  'proj-about': '🪪',
  'proj-stack': '🧩',
  'proj-resume': '📜',
  'proj-contact': '✉️',
  'proj-projects': '💻',
  'proj-game': '🕹️',
};

// Top menu bar. On desktop/tablet: File / Projects / About are real
// dropdowns whose contents actually match their names. On mobile they
// collapse into a single hamburger menu listing everything.
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

  const projectItems = projects.filter((p) => PROJECT_CATEGORY_IDS.includes(p.id));
  const aboutItems = projects.filter((p) => ABOUT_CATEGORY_IDS.includes(p.id));

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

            <div className="nav-item">
              <span
                className={`nav-trigger${openMenu === 'file' ? ' nav-trigger--active' : ''}`}
                onClick={toggle('file')}
              >
                File
              </span>
              {openMenu === 'file' && (
                <div className="nav-dropdown">
                  {githubUrl && (
                    <div
                      className="nav-row"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(githubUrl, '_blank', 'noopener,noreferrer');
                        setOpenMenu(null);
                      }}
                    >
                      🐙 View source on GitHub
                    </div>
                  )}
                  <div
                    className="nav-row"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseAll();
                      setOpenMenu(null);
                    }}
                  >
                    ✕ Close all windows
                  </div>
                </div>
              )}
            </div>

            <div className="nav-item">
              <span
                className={`nav-trigger${openMenu === 'projects' ? ' nav-trigger--active' : ''}`}
                onClick={toggle('projects')}
              >
                Projects
              </span>
              {openMenu === 'projects' && (
                <div className="nav-dropdown">
                  {projectItems.map((p) => (
                    <div key={p.id} className="nav-row" onClick={handleOpen(p)}>
                      {ICON_FOR[p.id] || '📁'} {p.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-item">
              <span
                className={`nav-trigger${openMenu === 'about' ? ' nav-trigger--active' : ''}`}
                onClick={toggle('about')}
              >
                About
              </span>
              {openMenu === 'about' && (
                <div className="nav-dropdown">
                  {aboutItems.map((p) => (
                    <div key={p.id} className="nav-row" onClick={handleOpen(p)}>
                      {ICON_FOR[p.id] || '📁'} {p.label}
                    </div>
                  ))}
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
              📶
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
              =
            </span>
            {openMenu === 'mobile' && (
              <div className="nav-dropdown nav-dropdown--right">
                {projects.map((p) => (
                  <div key={p.id} className="nav-row" onClick={handleOpen(p)}>
                    {ICON_FOR[p.id] || '�'} {p.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}