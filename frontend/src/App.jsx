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
import { fetchProjects } from './api';
import fallbackProjects, { REJECTED } from './data/projects';

const YOUR_NAME = 'AVA CHEN';
const TAGLINE = 'i build cute things that also ship on time. ✿';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [projects, setProjects] = useState(fallbackProjects);
  const sfx = useSound();
  const { windows, open, close, focus, minimize } = useWindows();

  // Try loading projects from the backend; silently keep the local
  // fallback data if the API isn't running (e.g. during frontend-only dev).
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

  const dockItems = [
    { icon: 'house', label: 'Desktop', action: () => windows.forEach((w) => minimize(w.id)) },
    { icon: 'idcard', label: 'About', action: () => openProject(findProject('proj-about')) },
    { icon: 'code', label: 'Projects', action: () => openProject(findProject('proj-code')) },
    { icon: 'scroll', label: 'Resume', action: () => openProject(findProject('proj-resume')) },
    { icon: 'mail', label: 'Contact', action: () => openProject(findProject('proj-contact')) },
  ];

  return (
    <>
      {!booted && (
        <BootScreen
          onDone={() => {
            setBooted(true);
            openProject(findProject('proj-about'));
          }}
        />
      )}

      <div id="desktop">
        <MenuBar name={YOUR_NAME} />
        <Clouds />
        <StickyNote tagline={TAGLINE} signature="ava" />

        <DesktopIcons projects={projects} onOpen={openProject} />

        <TrashCan
          onOpen={() => {
            sfx.trash();
            open(REJECTED);
          }}
        />

        <Girl />
        <Dock items={dockItems} />

        <div className="windows-layer">
          {windows.map((w, i) => (
            <Window key={w.id} win={w} index={i} onFocus={focus} onClose={close} onMinimize={minimize} sfx={sfx} />
          ))}
        </div>
      </div>
    </>
  );
}
