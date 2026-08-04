import PixelIcon from './PixelIcon';

export default function Dock({ items }) {
  return (
    <div className="dock">
      {items.map((item, i) => (
        <div key={i} className="dock-item" title={item.label} onClick={item.action}>
          <PixelIcon name={item.icon} />
        </div>
      ))}
    </div>
  );
}
