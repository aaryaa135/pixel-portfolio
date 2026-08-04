import PixelIcon from './PixelIcon';
import useClock from '../hooks/useClock';

export default function MenuBar({ name }) {
  const time = useClock();
  return (
    <div className="menubar">
      <div className="menubar-side">
        <div className="menubar-logo pixel-font">
          <PixelIcon name="faceLogo" className="menubar-face" /> pixelOS
        </div>
        <span className="menu-item">File</span>
        <span className="menu-item">Projects</span>
        <span className="menu-item">About</span>
      </div>
      <div className="menubar-side">
        <span className="menu-item menu-item--name pixel-font">{name}</span>
        <span className="menubar-clock pixel-font">{time}</span>
      </div>
    </div>
  );
}
