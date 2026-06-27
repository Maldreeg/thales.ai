<div align="center">

![Thales AI Banner](/assets/thales_banner.png)

![React](https://img.shields.io/badge/React-18-black?style=flat-square&logo=react&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-black?style=flat-square&logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-black?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-black?style=flat-square)

</div>

---

## What is Thales?

Thales is an AI-powered product validation tool built for early-stage founders who want evidence before they build. Paste in an idea. Get back a complete validation report — in under 30 seconds.

No fluff. No encouragement for its own sake. Just the analysis you'd want from a sharp co-founder who's done this before.

---

## Why it exists

Most founders spend months building products nobody wants. The problem isn't execution — it's skipping validation. Market research is slow, expensive, and scattered across spreadsheets, forums, and gut feelings.

Thales compresses that research into a single structured report powered by Gemini 1.5 Pro, so you can decide whether an idea is worth pursuing before writing a single line of product code.

---

## Demo

> *Type an idea. Get a full validation report.*

![Thales Demo](/assets/thales_demo.gif)

---

## Features

**Validation Dashboard**
A live data panel that renders the moment your report loads — no page refresh, no waiting.

- Radar chart across 6 dimensions: Market Size, Competition, Feasibility, Monetization, Timing, and Founder Fit
- Competitor Strength Index as an animated horizontal bar chart
- MVP Feature Effort Matrix with Small / Medium / Large sizing

**Full Report Sections**

| Section | What it gives you |
|---|---|
| Validation Score | 0–100 score with a one-sentence verdict |
| Ideal Customer Profile | Demographics, psychographics, pain intensity, willingness to pay |
| Competitor Landscape | 4–6 real competitors with positioning notes, rendered as a table |
| SWOT Analysis | 3 points per quadrant, formatted as a comparison table |
| Risk Register | Top 5 risks ranked by severity, each with a mitigation strategy |
| MVP Features | 5–7 features with rationale and effort estimates |
| Pricing Strategy | 2–3 tiers with names, price points, and feature rationale |
| Landing Page Copy | Headline, subheadline, value props, CTA, and social proof blurb |
| Lean Canvas | Auto-generated 9-cell canvas with all standard fields |

**Design**
- Monochrome, typographically precise — no gradients, no shadows, no color noise
- Two-column layout with a sticky left-rail section navigator
- Pure SVG radar chart with zero charting library dependencies
- Fully responsive at 768px and below

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 |
| AI Model | Gemini 3.5 Flash via `@google/generative-ai` |
| Markdown Rendering | `react-markdown` + `remark-gfm` |
| Charts | Pure SVG — no chart library |
| Styling | Handwritten CSS with custom properties |
| Fonts | DM Mono · Inter · Playfair Display |

---

## Setup

**1. Clone the repo**

```bash
git clone https://github.com/your-username/thales.git
cd thales
```

**2. Install dependencies**

```bash
npm install
```

**3. Add your Gemini API key**

Create a `.env` file in the project root:

```
REACT_APP_GEMINI_API_KEY=your_key_here
```

> Get a free API key at [aistudio.google.com](https://aistudio.google.com)

**4. Run locally**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to use it

1. Type or paste your product idea into the input field — one or two sentences is enough
2. Click **Run Validation**
3. Review the dashboard, then scroll through each section using the left-rail navigator
4. Click **← New Idea** to start over

---

## Project structure

```
/src
  App.jsx                 # Root state and layout shell
  components/
    InputPanel.jsx        # Idea entry form
    ReportView.jsx        # Two-column report layout + nav
    Dashboard.jsx         # Radar chart, bar chart, effort matrix
    ScoreBadge.jsx        # Large score number + verdict
    SectionBlock.jsx      # Reusable markdown card (with remark-gfm)
    LeanCanvas.jsx        # 9-cell Lean Canvas grid
  services/
    ai.js                 # Gemini API call + JSON parsing
  styles/
    global.css            # Design tokens + reset
    layout.css            # Two-column layout + responsive breakpoints
    components.css        # Card blocks, score badge, canvas
    dashboard.css         # Chart-specific styles
```

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `REACT_APP_GEMINI_API_KEY` | Yes | Your Gemini API key from Google AI Studio |

---

<div align="center">

*Built with the conviction that most ideas deserve an honest answer before a single line of product code is written.*

</div>