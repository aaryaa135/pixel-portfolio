import { useState, useRef, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import useClock from '../hooks/useClock';

// Top menu bar. On desktop/tablet: File / Projects / About are real
// dropdowns. On mobile: they collapse into a single hamburger menu
// listing every project (there's no room for 3 separate dropdowns
// on a phone-width screen, and dropdown are a worse fit for touch).
export default function MenuBar({ name, title, projects, onOpen, onCloseAll, isMobile }) {
  const time = useClock();
  const [openMenu, setOpenMenu] = useState(null); // 'file' | 'projects' | 'about' | 'mobile' | null
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

  const findProject = (id) => projects.find((p) => p.id === id);
  const about = findProject('proj-about');
  const contact = findProject('proj-contact');

  return (
    <div className="menubar" ref={barRef} onClick={(e) => e.stopPropagation()}>
      <div className="menubar-side">
        <span className="menubar-logo pixel-font">
          <PixelIcon name="faceLogo" className="menubar-face" /> {name}
        </span>
        <span className="menubar-subtitle">{title}</span>

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
                  <div className="nav-row" onClick={(e) => e.stopPropagation()}>
                    🗔 New window
                  </div>
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
                  {projects
                    .filter((p) => p.id !== 'proj-about' && p.id !== 'proj-contact')
                    .map((p) => (
                      <div key={p.id} className="nav-row" onClick={handleOpen(p)}>
                        {p.label}
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
                  {about && (
                    <div className="nav-row" onClick={handleOpen(about)}>
                      🪪 About me
                    </div>
                  )}
                  {contact && (
                    <div className="nav-row" onClick={handleOpen(contact)}>
                      ✉️ Contact
                    </div>
                  )}
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
              ☰
            </span>
            {openMenu === 'mobile' && (
              <div className="nav-dropdown nav-dropdown--right">
                {projects.map((p) => (
                  <div key={p.id} className="nav-row" onClick={handleOpen(p)}>
                    {p.label}
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
