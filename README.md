# Mauritius Learning Passport (MLP) — Concept Demonstrator

A static, front-end-only prototype built to showcase the **Mauritius Learning Passport** proposal: a national digital education, skills and career identity platform.

> This is a **visual concept demonstrator** for stakeholder presentations — there is no backend, database, or real citizen data. All records, names, and statistics are sample data for illustration only.

## What's included

| Page | Purpose |
|---|---|
| `index.html` | Overview: the problem, the proposed solution, rollout phases, vision |
| `citizen.html` | A citizen's Learning Passport — academic records, skills, micro-credentials, sharing controls |
| `institution.html` | Institution portal — registering students and issuing verified certificates |
| `employer.html` | Employer portal — verifying a candidate's shared passport and matching skills to a role |
| `ai-assistant.html` | Interactive AI Career Assistant — suggests careers and training from a profile |
| `dashboard.html` | National Skills Intelligence Dashboard — aggregated workforce charts for government planning |

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository (root of the repo, or a `/docs` folder).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", choose your branch and the folder (`/root` or `/docs`).
4. Save — GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

No build step is required — this is plain HTML, CSS and JavaScript.

## Tech notes

- No frameworks or build tools — plain HTML/CSS/JS so it can be hosted directly on GitHub Pages.
- Charts on the Skills Dashboard use [Chart.js](https://www.chartjs.org/) via CDN.
- Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) are loaded from Google Fonts via CDN.
- All interactivity (toggles, "generate recommendations", "issue certificate") is simulated client-side in `assets/js/main.js` and inline scripts — nothing is sent to a server.

## Extending this into a real platform

This prototype maps to Phase 1 of the proposal (citizen profiles, certificate uploads, institution verification, employer sharing). Turning it into a production system would additionally require:

- A real backend with a citizen identity system (e.g. tied to National ID)
- Institution-side APIs for direct, automated result submission (Phase 2)
- Proper authentication, encryption, audit logging and data-protection compliance
- A trained recommendation model behind the AI Career Assistant, fed by real labour market data (Phase 3)

## Source

Built from the *Mauritius Learning Passport (MLP)* proposal document — see the executive summary, vision, and phased implementation approach reflected throughout this demo.
