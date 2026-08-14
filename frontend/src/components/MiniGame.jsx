import { useEffect, useRef, useState } from 'react';

// A tiny "catch the crumbs" game — move the basket to catch falling
// pixel crumbs, miss 3 and it's game over. Arrow keys / A-D on
// desktop, on-screen buttons or drag on mobile.
const WIDTH = 320;
const HEIGHT = 260;
const BASKET_WIDTH = 46;
const BASKET_HEIGHT = 14;
const MAX_MISSES = 3;

export default function MiniGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);

  const startGame = () => {
    stateRef.current = {
      basketX: WIDTH / 2 - BASKET_WIDTH / 2,
      crumbs: [],
      lastSpawn: 0,
      speed: 3.2,
      keys: {},
    };
    setScore(0);
    setMisses(0);
    setGameOver(false);
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let frame = 0;

    const onKeyDown = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key)) {
        stateRef.current.keys[e.key] = true;
      }
    };
    const onKeyUp = (e) => {
      stateRef.current.keys[e.key] = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    const loop = () => {
      const s = stateRef.current;
      frame += 1;

      if (s.keys.ArrowLeft || s.keys.a) s.basketX -= 7;
      if (s.keys.ArrowRight || s.keys.d) s.basketX += 7;
      s.basketX = Math.max(0, Math.min(WIDTH - BASKET_WIDTH, s.basketX));

      if (frame - s.lastSpawn > Math.max(8, 20 - Math.floor(score / 2))) {
        s.crumbs.push({ x: Math.random() * (WIDTH - 12), y: -12 });
        s.lastSpawn = frame;
      }

      let newMisses = 0;
      let newScore = 0;
      s.crumbs = s.crumbs.filter((c) => {
        c.y += s.speed;
        const caught =
          c.y + 10 >= HEIGHT - BASKET_HEIGHT - 8 &&
          c.y <= HEIGHT - 8 &&
          c.x + 6 >= s.basketX &&
          c.x <= s.basketX + BASKET_WIDTH;
        if (caught) {
          newScore += 1;
          return false;
        }
        if (c.y > HEIGHT) {
          newMisses += 1;
          return false;
        }
        return true;
      });
      if (newScore) setScore((v) => v + newScore);
      if (newMisses) setMisses((v) => v + newMisses);

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = '#fdeef7';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.fillStyle = '#e46b6b';
      s.crumbs.forEach((c) => ctx.fillRect(c.x, c.y, 10, 10));

      ctx.fillStyle = '#4a2e4a';
      ctx.fillRect(s.basketX, HEIGHT - BASKET_HEIGHT - 8, BASKET_WIDTH, BASKET_HEIGHT);
      ctx.fillStyle = '#8fd6c9';
      ctx.fillRect(s.basketX + 3, HEIGHT - BASKET_HEIGHT - 5, BASKET_WIDTH - 6, BASKET_HEIGHT - 6);

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [running, score]);

  useEffect(() => {
    if (misses >= MAX_MISSES) {
      setRunning(false);
      setGameOver(true);
    }
  }, [misses]);

  const nudge = (dir) => {
    if (!stateRef.current) return;
    stateRef.current.basketX = Math.max(
      0,
      Math.min(WIDTH - BASKET_WIDTH, stateRef.current.basketX + dir * 24)
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 13, margin: '0 0 12px' }}>
        CRUMB QUEST
      </p>
      <p style={{ margin: '0 0 12px' }}>
        Score: {score} &nbsp; Misses: {misses}/{MAX_MISSES}
      </p>

      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        style={{ border: '2px solid #4a2e4a', background: '#fdeef7', maxWidth: '100%' }}
      />

      {!running && (
        <div style={{ marginTop: 14 }}>
          {gameOver && (
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, marginBottom: 10 }}>
              GAME OVER — final score {score}
            </p>
          )}
          <button type="button" className="btn" onClick={startGame}>
            {gameOver ? 'PLAY AGAIN →' : 'START GAME →'}
          </button>
        </div>
      )}

      {running && (
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 10 }}>
          <button type="button" className="btn" onClick={() => nudge(-1)}>
            ← LEFT
          </button>
          <button type="button" className="btn" onClick={() => nudge(1)}>
            RIGHT →
          </button>
        </div>
      )}

      <p style={{ marginTop: 12, fontSize: 15, color: '#6a4a6a' }}>
        Arrow keys / A-D to move, or use the buttons above on touch.
      </p>
    </div>
  );
}