# Pixel Portfolio — React + Express + SQLite

A macOS-styled, pixel-art portfolio site. Pastel desktop, draggable
windows, a live clock, a pixel-art character, 8-bit sounds, and a
"Rejected Concepts" trash-can easter egg.

```
pixel-portfolio/
├── frontend/     React app (Vite) — everything you see
└── backend/      Express API + SQLite database — projects data + contact form
```

The frontend works **on its own** with placeholder data (see
`frontend/src/data/projects.js`), so you can preview it before setting
up the backend. The backend adds two real things: your projects served
from a database (so you can edit content without touching code), and a
working contact form that saves messages.

---

## 1. Install Node.js

You need **Node.js 18 or newer**. Check with:

```bash
node -v
```

If you don't have it, install from [nodejs.org](https://nodejs.org).

---

## 2. Run the backend (API + database)

```bash
cd backend
npm install
cp .env.example .env
npm run seed      # creates portfolio.db and fills it with starter projects
npm run dev        # starts the API on http://localhost:4000
```

That's it — `portfolio.db` is a plain SQLite file created automatically
in the `backend/` folder. No separate database server to install.

**Endpoints:**
| Method | Path | What it does |
|---|---|---|
| GET | `/api/projects` | returns all projects for the desktop |
| POST | `/api/contact` | saves a message from the Contact window's form |
| GET | `/api/messages?key=YOUR_ADMIN_KEY` | lists submitted messages (set `ADMIN_KEY` in `.env`) |
| GET | `/api/health` | simple uptime check |

---

## 3. Run the frontend (React app)

In a **second terminal**:

```bash
cd frontend
npm install
cp .env.example .env    # points the app at http://localhost:4000 by default
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). You should see
the boot screen, then the desktop.

If you skip the backend entirely, the frontend still runs fine using
the fallback data in `frontend/src/data/projects.js` — the Contact
form will just show an error when submitted, since there's nowhere to
send it.

---

## 4. Edit your content

**Easiest — no database needed:**
Edit `frontend/src/data/projects.js` directly. This is what's used if
the backend isn't running.

**With the database (recommended once it's set up):**
Edit the project objects in `backend/seed.js`, then run:

```bash
cd backend
npm run seed
```

This updates existing rows (matched by `slug`) rather than duplicating
them, so it's safe to re-run any time.

Each project needs:
- `slug` — unique id, e.g. `'proj-projects'` (current set: `proj-about`, `proj-projects`, `proj-game`, `proj-resume`, `proj-contact`)
- `label` — text under the desktop icon
- `icon` — one of: `code`, `palette`, `joystick`, `notebook`, `camera`,
  `cassette`, `idcard`, `scroll`, `mail` (see `frontend/src/data/icons.js`
  to add your own pixel icon — it's just a grid of letters mapped to colors)
- `title` — window title bar text
- `body` — HTML string shown inside the window (`<h2>`, `<p>`, `<ul>`,
  `.tag` chips, and `.btn` links are all styled already)

**Your name and tagline:** edit the constants at the top of
`frontend/src/App.jsx` (`YOUR_NAME`, `TAGLINE`).

---

## 5. Read your contact form messages

Open this in a browser (replace the key with whatever you set in
`backend/.env`):

```
http://localhost:4000/api/messages?key=YOUR_ADMIN_KEY
```

Or browse `backend/portfolio.db` directly with a free tool like
[DB Browser for SQLite](https://sqlitebrowser.org/).

---

## 6. Deploying it for real

**Frontend:** run `npm run build` inside `frontend/` — it outputs a
static `dist/` folder. Deploy that to Vercel, Netlify, Cloudflare
Pages, or GitHub Pages. Set the `VITE_API_URL` environment variable in
your host's dashboard to your live backend URL.

**Backend:** deploy `backend/` to Render, Railway, or Fly.io — any
host that runs a persistent Node process. Set `PORT`, `CORS_ORIGIN`
(your live frontend URL), and `ADMIN_KEY` as environment variables.

**Important — about the SQLite file:** `portfolio.db` is a file on
disk. Most free/serverless hosts *don't* keep disk changes between
deploys, so your seeded projects will survive (they get committed to
the repo or re-seeded on boot) but new contact messages could be lost.
Two ways to handle it:
- On **Render**, attach a small persistent disk to the backend service.
- Or swap SQLite for a hosted **Postgres** database (Render, Railway,
  and Supabase all offer a free tier). You'd replace `better-sqlite3`
  with the `pg` package in `backend/db.js` — the rest of the code
  (`index.js`, `seed.js`) barely changes since the SQL is almost
  identical.

---

## What changed for readability

Compared to a pure pixel-font version: headings, labels, and window
chrome still use **Press Start 2P** for that 8-bit feel, but all body
text (project descriptions, form fields) uses **VT323** — a pixel-style
monospace that's actually comfortable to read at paragraph length —
set larger, with more line-height, and capped at a 66-character line
width inside windows so text doesn't stretch edge-to-edge.

---

## Project structure reference

```
frontend/src/
├── App.jsx                 top-level state: boot screen, windows, projects
├── api.js                  fetch wrapper for the backend
├── index.css                all styling
├── data/
│   ├── icons.js             pixel icon matrices + color palette
│   └── projects.js          fallback project content
├── hooks/
│   ├── useSound.js           8-bit blip sounds (Web Audio API)
│   ├── useClock.js           live menu-bar clock
│   └── useWindows.js         open/close/focus/minimize window state
└── components/
    ├── BootScreen.jsx
    ├── MenuBar.jsx
    ├── Clouds.jsx
    ├── StickyNote.jsx
    ├── Girl.jsx               pixel-art character above the dock
    ├── DesktopIcons.jsx
    ├── TrashCan.jsx           "Rejected Concepts" easter egg
    ├── Dock.jsx
    ├── Window.jsx             draggable/resizable/stackable window
    ├── ContactForm.jsx        posts to POST /api/contact
    └── PixelIcon.jsx          renders any icon from data/icons.js as SVG

backend/
├── index.js    Express server + routes
├── db.js       SQLite connection + table setup
├── seed.js     starter project content (run with `npm run seed`)
└── .env.example
```
