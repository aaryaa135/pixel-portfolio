import { useEffect, useState, useRef } from 'react';
import BootScreen from './components/BootScreen';
import MenuBar from './components/MenuBar';
import Clouds from './components/Clouds';
import StickyNote from './components/StickyNote';
import StoryCard from './components/StoryCard';
import Girl from './components/Girl';
import DesktopIcons from './components/DesktopIcons';
import TrashCan from './components/TrashCan';
import Dock from './components/Dock';
import Window from './components/Window';
import TechHardware from './components/TechHardware';
import Footer from './components/Footer';
import useSound from './hooks/useSound';
import useWindows from './hooks/useWindows';
import useViewport from './hooks/useViewport';
import useSelection from './hooks/useSelection';
import { fetchProjects } from './api';
import fallbackProjects, { REJECTED } from './data/projects';

const YOUR_NAME = 'AARYA GUPTA';
const YOUR_TITLE = 'Computer Science Student • Software Engineer';
const TAGLINE = 'Pushed to production. Said a prayer.';
const GITHUB_URL = 'https://github.com/aaryaa135/pixel-portfolio';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [projects, setProjects] = useState(fallbackProjects);
  const sfx = useSound();
  const { windows, open, close, focus, minimize, closeAll } = useWindows();
  const { isMobile, isTablet } = useViewport();
  const { selection, isSelecting } = useSelection();

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length) setProjects(data);
      })
      .catch(() => {
        /* backend not available — fallback data already in state */
      });
  }, []);

  const openProject = (project) => {
    sfx.open();
    open(project);
  };

  // On mobile, a window is a full-screen panel — if the phone's hardware
  // or swipe-back gesture isn't hooked up, it would just leave the site
  // entirely instead of closing the window. This keeps one history entry
  // in sync with "a window is open" so back-button presses close windows
  // and land back on the desktop instead.
  const pushedHistoryRef = useRef(false);
  const ignoreNextPopRef = useRef(false);

  useEffect(() => {
    if (!isMobile) return undefined;
    const onPopState = () => {
      if (ignoreNextPopRef.current) {
        ignoreNextPopRef.current = false;
        return;
      }
      if (pushedHistoryRef.current) {
        pushedHistoryRef.current = false;
        closeAll();
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [isMobile, closeAll]);

  useEffect(() => {
    if (!isMobile) return;
    const hasWindow = windows.length > 0;
    if (hasWindow && !pushedHistoryRef.current) {
      window.history.pushState({ pixelOsWindow: true }, '');
      pushedHistoryRef.current = true;
    } else if (!hasWindow && pushedHistoryRef.current) {
      // A window was closed via the in-app "← Back" button rather than the
      // hardware back button — consume the extra history entry we pushed
      // so the two stay in sync, without re-triggering our own close logic.
      pushedHistoryRef.current = false;
      ignoreNextPopRef.current = true;
      window.history.back();
    }
  }, [windows.length, isMobile]);

  const findProject = (id) => projects.find((p) => p.id === id);

  const otherProjects = projects.filter((p) => p.id !== 'proj-about' && p.id !== 'proj-guide');
  const guideProject = projects.find((p) => p.id === 'proj-guide');
  
  const dockItems = otherProjects
    .map((p) => ({ icon: p.icon, label: p.label, action: () => openProject(p) }));
  dockItems.unshift({ icon: 'idcard', label: 'About', action: () => openProject(findProject('proj-about')) });
  if (guideProject) {
    dockItems.push({ icon: guideProject.icon, label: guideProject.label, action: () => openProject(guideProject) });
  }

  return (
    <>
      {!booted && (
        <BootScreen
          onDone={() => {
            setBooted(true);
          }}
        />
      )}

      <div id="desktop">
        <MenuBar
          name={YOUR_NAME}
          title={YOUR_TITLE}
          projects={projects}
          onOpen={openProject}
          onCloseAll={closeAll}
          isMobile={isMobile}
          githubUrl={GITHUB_URL}
        />

        <TechHardware />
        <Clouds />
        <StickyNote tagline={TAGLINE} signature="aarya" />
        <StoryCard />

        <DesktopIcons projects={projects} onOpen={openProject} isMobile={isMobile} isTablet={isTablet} />

        <TrashCan
          onOpen={() => {
            sfx.trash();
            open(REJECTED);
          }}
        />

        {!isMobile && !isTablet && <Girl />}
        {!isMobile && !isTablet && <Dock items={dockItems} />}

        <div className="windows-layer">
          {windows.map((w, i) => (
            <Window
              key={w.id}
              win={w}
              index={i}
              onFocus={focus}
              onClose={close}
              onMinimize={minimize}
              sfx={sfx}
              isMobile={isMobile}
            />
          ))}
        </div>

        {selection && isSelecting && (
          <div
            className="selection-box"
            style={{
              left: selection.x,
              top: selection.y,
              width: selection.width,
              height: selection.height,
            }}
          />
        )}
        <Footer />
      </div>
    </>
  );
}
