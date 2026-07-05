# Mauritius Learning Passport (MLP) — Interactive Concept Demonstrator

A fully-functional, front-end-only prototype built to showcase the **Mauritius Learning Passport** proposal to stakeholders: a national digital education, skills and career identity platform.

> This is a **concept demonstrator** for presentations — there is no real server or database. It uses your browser's local storage to simulate a working system, so actions like issuing a certificate or sharing a record actually persist and flow between the different portals while you're demoing it.

Every page (`index.html`, `login.html`, `citizen.html`, `institution.html`, `employer.html`, `dashboard.html`) is a **single, self-contained HTML file** — styling and behaviour are built in, not loaded from separate files. Open any one of them on its own, from anywhere, and it will look and work exactly as intended. The only things loaded from the internet are Google Fonts and the Chart.js library (both from public CDNs), so an internet connection is needed to see the intended typography and the charts on the dashboard.

---

## Demo logins

Open **`login.html`** (or click "Try the demo" on the homepage) and sign in as any of the four roles below. Each role sees the same underlying data through a different lens.

| Role | Username | Password | What you'll see |
|---|---|---|---|
| **Citizen** | `aditi.ramgoolam` | `passport123` | Aditi's passport — Computer Science graduate |
| **Citizen** | `yannick.liwanpo` | `passport123` | Yannick's passport — Civil Engineering graduate |
| **Citizen** | `priya.nundlall` | `passport123` | Priya's passport — Economics graduate |
| **Institution** | `admin.uom` | `institution123` | University of Mauritius registrar view |
| **Employer** | `hr.rogers` | `employer123` | Rogers Group HR view |
| **Government** | `admin.moe` | `government123` | Ministry of Education planning dashboard |

All of these are also listed directly on the sign-in page itself, with a one-click "Use" button to autofill them — convenient for a live walkthrough.

### A good demo flow to show officials

1. Sign in as **`admin.uom`** (Institution) → issue a new certificate to Aditi Ramgoolam.
2. Sign out, sign in as **`aditi.ramgoolam`** (Citizen) → see the new certificate already in her passport, and toggle "Professional certificates" sharing on.
3. Sign out, sign in as **`hr.rogers`** (Employer) → search "Aditi" → see exactly what she's chosen to share, and run the skills-match check against a role.
4. Sign out, sign in as **`admin.moe`** (Government) → see the aggregate, anonymised national picture, including a live count of certificates issued across the whole demo.

Use **"Reset demo data"** in the homepage footer at any point to wipe the browser's local storage and start the walkthrough again from a clean state.

> Note: because each page carries its own copy of the shared logic, data is shared across pages **only when they're all opened from the same location** (the same folder on disk, or the same hosted site) — sessions and saved data live in that browser's local storage, keyed to that location. Opening a page from a different folder or URL starts fresh.

---

## What's included

| File | Purpose |
|---|---|
| `index.html` | Overview: the problem, the proposed solution, rollout phases, vision, and demo entry points |
| `login.html` | Unified sign-in with role tabs and visible demo credentials |
| `citizen.html` | A citizen's Learning Passport — verified records, skills, micro-credentials, live sharing toggles |
| `institution.html` | Institution portal — search students, issue certificates that really update the data |
| `employer.html` | Employer portal — search any demo candidate, see only what they've shared, run a skills-match |
| `dashboard.html` | National Skills Intelligence Dashboard — workforce charts, skills-gap table, live certificate count |

## How to view it right now

Just double-click any `.html` file to open it in your browser — no setup, no server, no build step. Since each file is self-contained, this works straight away.

## Hosting on GitHub Pages

1. Push all six `.html` files (and this README) to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", then choose your branch and folder (`/root` or `/docs`).
4. Save — GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

## How the "backend" works

There is no server. Instead:

- Each page seeds three demo citizens (with realistic Mauritian names, records and skills) into the browser's `localStorage` the first time it loads.
- Issuing a certificate, or toggling a sharing switch, writes straight back to that same `localStorage` object — so the change is visible immediately from any portal, in any order, for as long as you're using that browser and site location.
- A simple demo login system checks a username/password against a fixed list and remembers who's "logged in" for the current browser tab (`sessionStorage`) until you sign out.
- Refreshing the page keeps your changes. Closing the tab and reopening logs you out but keeps the data. "Reset demo data" wipes everything back to the original three citizens.

This is intentionally simple so the whole thing runs from static files with zero setup — but it means data is **local to each visitor's browser**, not shared between different people viewing the site. For a shared, persistent demo (e.g. two officials looking at the same data from different laptops), it would need a small real backend.

## Suggestions for what to add next

A few directions worth considering as this moves from concept demo toward a real pilot:

- **National ID integration** — tie each passport to the existing National Identity Card number rather than a separate MLP ID, so citizens don't have to re-register.
- **Multi-language support** — English, French, and Kreol Morisien toggle, since all three are in everyday use.
- **Audit log / activity history** — a visible "who viewed or changed this record, and when" trail for each citizen, both for trust and for dispute resolution.
- **Dispute / correction workflow** — a formal way for a citizen to flag an incorrect record and have the issuing institution review and amend it.
- **Downloadable/printable passport summary (PDF)** — for the (still common) cases where a physical copy is requested.
- **QR-code verification** — a scannable code on any shared record that an employer can check instantly, useful for walk-in or paper-based verification too.
- **Notifications** — email/SMS alert to a citizen when a new record is issued, or when someone accesses a shared link.
- **Accessibility & offline access** — screen-reader support, and a lightweight mode for low-bandwidth connections, so the platform works well outside Port Louis too.
- **Parent/guardian access** for school-age learners, with a clear handover to full citizen control at 18.
- **The AI Career Assistant** from the original proposal — deliberately left out of this build for now, to keep the initial pitch focused on the verification and portability problem first. It's a natural Phase 3 addition once real labour-market data is flowing into the Skills Dashboard.

## Tech notes

- No frameworks or build tools, and no external files to keep track of — each page is one plain HTML file with its CSS and JavaScript built in.
- Charts on the Skills Dashboard use [Chart.js](https://www.chartjs.org/) via CDN.
- Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via CDN.
- Both CDNs require an internet connection to render correctly — normal for a hosted demo, but worth knowing if presenting somewhere offline.

## Source

Built from the *Mauritius Learning Passport (MLP)* proposal document — the executive summary, vision, and phased implementation approach are reflected throughout this demo.
