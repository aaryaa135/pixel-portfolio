import PixelIcon from './PixelIcon';

export default function TrashCan({ onOpen }) {
  return (
    <button type="button" id="trash" onClick={onOpen}>
      <PixelIcon name="trash" className="icon-img" />
      <span>
        Rejected
        <br />
        Concepts
      </span>
    </button>
  );
}
