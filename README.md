# vallee.pro

Personal website of **Adam D. Vallée** — President of CUPW Elliot Lake–Blind
River Local 532, postal worker, and self-taught technologist.

A deliberately simple stack: a tiny Express server serving a hand-written
static site. No build step, no frameworks, no trackers.

## Run locally

```bash
npm install
npm start
# → http://localhost:3000
```

## Deploy (cPanel → Websites & Apps → Deploy a Node.js app)

1. In cPanel, choose **Git repository** and paste this repo's HTTPS clone URL.
2. Confirm the detected defaults (Node ≥ 18, `npm install`, `npm start`).
3. Point it at the `vallee.pro` domain — cPanel serves it over HTTPS.

## Editing content

Everything is plain files — no CMS needed:

| What | Where |
|---|---|
| Page text/sections | `public/index.html` |
| Colours, spacing, fonts | `public/styles.css` |
| Animations | `public/script.js` |
| Contact email | `public/script.js` — base64 string in the `contactEmail` block (never in the HTML, so bots can't harvest it) |

## Structure

```
├── server.js        # Express static server (PORT env aware)
├── package.json     # start script → server.js
└── public/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── favicon.svg
    └── robots.txt
```

## License

All rights reserved © Adam D. Vallée.