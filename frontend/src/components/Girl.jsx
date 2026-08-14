import { GirlSprite } from './PixelIcon';
import PixelIcon from './PixelIcon';

export default function Girl() {
  return (
    <div className="girl" aria-hidden="true">
      <GirlSprite />
      <div className="girl-laptop">
        <PixelIcon name="laptop" />
      </div>
    </div>
  );
}
