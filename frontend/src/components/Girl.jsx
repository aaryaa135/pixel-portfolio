import { useState, useEffect } from 'react';
import { GirlSprite } from './PixelIcon';
import PixelIcon from './PixelIcon';

const GREETINGS = [
  'hello_world();',
  'git push origin main',
  'npm run deploy',
  'console.log("hi")',
  'SELECT * FROM users',
  'docker run portfolio',
  'printf("Hello!")',
  'echo "Welcome!"',
  'const aarya = new Engineer()',
  'system.boot()',
];

export default function Girl() {
  const [greeting, setGreeting] = useState(GREETINGS[0]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="girl" aria-hidden="true">
      <GirlSprite />
      <div className="girl-laptop">
        <PixelIcon name="laptop" />
      </div>
      <div className={`girl-speech${show ? ' show' : ''}`}>
        <span className="speech-text">{greeting}</span>
        <span className="speech-tail" />
      </div>
    </div>
  );
}
