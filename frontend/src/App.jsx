import { useEffect, useState } from 'react';
import BootScreen from './components/BootScreen';
import MenuBar from './components/MenuBar';
import Clouds from './components/Clouds';
import StickyNote from './components/StickyNote';
import Girl from './components/Girl';
import DesktopIcons from './components/DesktopIcons';
import TrashCan from './components/TrashCan';
import Dock from './components/Dock';
import Window from './components/Window';
import useSound from './hooks/useSound';
import useWindows from './hooks/useWindows';
import useViewport from './hooks/useViewport';
import { fetchProjects } from './api';
import fallbackProjects, { REJECTED } from './data/projects';

const YOUR_NAME = 'AARYA GUPTA';
const YOUR_TITLE = 'Software Engineer';
const TAGLINE = '404 : imposter syndrome not found';
const GITHUB_URL = 'https://github.com/aaryaa135/pixel-portfolio';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [projects, setProjects] = useState(fallbackProjects);
  const sfx = useSound();
  const { windows, open, close, focus, minimize, closeAll } = useWindows();
  const { isMobile, isTablet } = useViewport();

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

  const findProject = (id) => projects.find((p) => p.id === id);

  const dockItems = projects
    .filter((p) => p.id !== 'proj-about')
    .map((p) => ({ icon: p.icon, label: p.label, action: () => openProject(p) }));
  dockItems.unshift({ icon: 'idcard', label: 'About', action: () => openProject(findProject('proj-about')) });

  return (
    <>
      {!booted && (
        <BootScreen
          onDone={() => {
            setBooted(true);
            // On mobile, a full-screen window popping up the instant the
            // site loads is disorienting — let people see the home screen
            // first and tap into About themselves.
            if (!isMobile) {
              openProject(findProject('proj-about'));
            }
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

        <Clouds />
        <StickyNote tagline={TAGLINE} signature="aarya" />

        <DesktopIcons projects={projects} onOpen={openProject} isMobile={isMobile} isTablet={isTablet} />

        <TrashCan
          onOpen={() => {
            sfx.trash();
            open(REJECTED);
          }}
        />

        {!isMobile && !isTablet && <Girl />}
        {!isMobile && <Dock items={dockItems} />}

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
      </div>
    </>
  );
}