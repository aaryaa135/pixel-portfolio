# pixel-portfolio
*A retro-futuristic desktop OS portfolio. Built with React, SQLite, and a pinch of nostalgia.*

## The Vibe
🖥️ **Aarya-OS v1.0** — a pixel-perfect desktop environment simulated in your browser.
- Drag windows, minimize, maximize, close
- Click icons to open project panels
- A grumpy girl sprite lives above the dock (she has opinions)
- Konami code easter egg 🐧

## Tech Stack
| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind-adjacent CSS |
| State | React hooks (`useWindows`, `useViewport`, `useSound`) |
| Backend | Express + Better-SQLite3 |
| Data | SQLite `portfolio.db` (file-based, zero config) |
| Styling | Custom properties, keyframe animations, SVG patterns |

## How It Works
1. **Boot sequence** → progress bar → desktop reveals
2. **Projects loaded** from `backend/api/projects` (falls back to local data if offline)
3. **Click icons** → windows open with drag/resize/minimize controls
4. **Contact form** → validates email → stores message in DB + sends non-blocking email
5. **Trash can** → reveals "rejected concepts" easter egg

## Responsive
- **Desktop** (≥1024px): full window management, docked icons
- **Tablet** (640–1023px): windows stack, compact icon grid
- **Mobile** (<640px): full-screen windows, hamburger menu, touch-friendly

## Run Locally
```bash
# Backend
cd backend && npm install && npm run dev

# Frontend  
cd frontend && npm install && npm run dev
```

Visit `http://localhost:5173` — the boot screen will serenade you.

## Folder Quick-Start
```
frontend/src/components/   → 15 UI bricks (Window, Dock, MenuBar, etc.)
frontend/src/data/         → projects + icon definitions
frontend/src/hooks/        → useWindows, useViewport, useSound, useSelection
frontend/src/api.js        → thin wrapper over backend
backend/index.js           → Express + rate limit + email transport
backend/seed.js            → populate portfolio.db
```

## Fun Parts
- Girl sprite random greetings (`console.log("hi")`, `docker run portfolio`, etc.)
- Boot animation with progress bar + blinky cursor
- Background drifting SVG + animated hardware icons
- Konami code → surprise!
- `useSelection()` drag-to-select box (try selecting text elsewhere on the page)

## License
MIT — or "do whatever you want, just don't claim you wrote the boot sound."