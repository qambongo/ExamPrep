# CompTIA Security+ SY0-701 Study Guide

An interactive study guide for the CompTIA Security+ SY0-701 exam.

> **This folder is the editable source.** The Practice Hub serves the built copy from
> [`../security-plus-guide/`](../security-plus-guide/) at `/security-plus-guide/`.
> Don't edit the built folder by hand. Edit here, then run `npm run build:hub` (see below).

Originally based on [iakhator/comptia-security-plus-701](https://github.com/iakhator/comptia-security-plus-701).

---

## What's Inside

| Content | Count |
|---|---|
| Domain chapters with notes, tables & examples | 5 |
| Chapter practice tests (A + B banks) | 10 × 30 = **300 questions** |
| Comprehensive final exam | **100 questions** |
| Interactive PBQ simulations | **13** |
| Exam cheat sheet sections | **10** |
| **Total practice questions** | **400+** |

### Domain Coverage

| Domain | Weight | Sections |
|---|---|---|
| 1.0 — General Security Concepts | 12% | 1.1 Controls · 1.2 Concepts · 1.3 Change Mgmt · 1.4 Cryptography |
| 2.0 — Threats, Vulnerabilities & Mitigations | 22% | 2.1 Threat Actors · 2.2 Vectors · 2.3 Vulnerabilities · 2.4 Indicators · 2.5 Mitigations |
| 3.0 — Security Architecture | 18% | 3.1 Architecture · 3.2 Considerations · 3.3 Infrastructure · 3.4 Network · 3.5 Data · 3.6 HA |
| 4.0 — Security Operations | 28% | 4.1–4.9 Hardening · Vuln Mgmt · IAM · IR · Forensics · Automation |
| 5.0 — Security Program Management & Oversight | 20% | 5.1 Governance · 5.2 Risk · 5.3 Third-Party · 5.4 Compliance · 5.5 Audits · 5.6 Awareness |

### Exam Cheat Sheet Covers
Ports & Protocols · Cryptography algorithms · Wireless standards · Auth protocols · Attack types · OWASP Top 10 · Regulations (GDPR/HIPAA/PCI DSS/SOX) · Security tools · Risk formulas · 120+ acronym glossary

---

## Getting Started

All commands run from this folder (`security-plus-guide-src/`).

```bash
npm install
npm run dev        # http://localhost:5173 — live reload while editing
```

## Updating the hosted copy (Practice Hub)

```bash
npm run build:hub  # rebuilds ../security-plus-guide/ for the /security-plus-guide/ path
cd ..
git add security-plus-guide security-plus-guide-src
git commit -m "Update Security+ study guide"
git push           # Vercel deploys automatically
```

`build:hub` uses `--mode hub`, which reads [`.env.hub`](.env.hub) (adds the "Back to Practice Hub" link)
and sets the base path and output folder in [`vite.config.js`](vite.config.js).
This source folder is listed in the hub's `.vercelignore`, so it isn't published.

`npm run build` still produces a standalone copy in `dist/` (no hub link, served from `/`).

---

## Project Structure

```
.
├── index.html                  # App shell — nav + main container
├── src/
│   ├── main.js                 # Hash router, progress tracking, pager, init
│   ├── nav.js                  # Site structure: domains, pages, icons (edit to add pages)
│   ├── components/
│   │   ├── Home.js             # Dashboard landing page
│   │   ├── Navbar.js           # Collapsible sidebar with search + progress
│   │   ├── ThemePicker.js      # Theme menu (System, Midnight, Slate, Forest, Plum, Daylight, Sepia)
│   │   ├── QuestionCard.js     # Renders one question, handles answer selection
│   │   └── TestSection.js      # Renders a full test (30 or 100 questions)
│   ├── chapters/
│   │   ├── chapter1/           # intro.js · sec11.js · sec12.js · sec13.js · sec14.js
│   │   ├── chapter2/           # intro.js · sec21.js – sec25.js
│   │   ├── chapter3/           # intro.js · sec31.js – sec36.js
│   │   ├── chapter4/           # intro.js · sec41.js – sec48.js
│   │   ├── chapter5/           # intro.js · sec51.js – sec56.js
│   │   ├── pbq.js              # PBQ HTML + all 10 interactive simulation functions
│   │   ├── cheatsheet.js       # Full exam cheat sheet
│   │   └── coming.js           # Coming soon placeholder
│   ├── styles/
│   │   ├── variables.css       # Design tokens (default Midnight theme) + resets
│   │   ├── themes.css          # Colour overrides for each extra theme
│   │   ├── home.css            # Dashboard styles
│   │   ├── layout.css          # Shell, sidebar, main area, section, nav
│   │   ├── components.css      # Content, cards, tables, alerts, test/question/PBQ styles
│   │   └── cheatsheet.css      # All .cs-* cheat sheet classes
│   └── data/
│       ├── ch1_TestA.json      # 30 questions — Domain 1.0 Test A
│       ├── ch1_TestB.json      # 30 questions — Domain 1.0 Test B
│       ├── ch2_TestA.json
│       ├── ch2_TestB.json
│       ├── ch3_TestA.json
│       ├── ch3_TestB.json
│       ├── ch4_TestA.json
│       ├── ch4_TestB.json
│       ├── ch5_TestA.json
│       ├── ch5_TestB.json
│       └── finalExam.json      # 100 questions — all 5 domains
├── vite.config.js
└── package.json
```

---

## Question Data Format

Each question in the JSON files follows this schema:

```json
{
  "id": "t2q1",
  "objective": "QUESTION 1 OF 30 · Objective 2.1",
  "question": "Which threat actor type is characterized by...",
  "options": {
    "A": "Script kiddie",
    "B": "Nation-state",
    "C": "Hacktivist",
    "D": "Organized crime"
  },
  "correct": "B",
  "explanation": "Nation-state actors are characterized by..."
}
```

To add questions, edit the relevant JSON file in `src/data/` and follow this schema.

---

## Exam Tips

- The real SY0-701 exam is 90 questions, 90 minutes, passing score 750/900
- Expect 3–5 Performance-Based Questions (PBQs) at the start
- Study the Cheat Sheet before your exam day — especially ports, crypto algorithms, and the risk formulas (SLE = AV × EF, ALE = SLE × ARO)
- Score 80%+ consistently on the practice tests before booking the exam

---

## Contributing

1. Fork the repo
2. Add or fix questions in the relevant `src/data/*.json` file
3. Follow the question schema above
4. Open a PR with a description of what you changed and why

Please verify any added questions against the official [CompTIA SY0-701 exam objectives](https://www.comptia.org/certifications/security).

---

## License

MIT — free to use, share, and modify. If this helps you pass the exam, a star on the repo is appreciated.
