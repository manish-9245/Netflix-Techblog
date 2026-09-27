<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual tokens and components. -->

# Design System: Write Like Netflix

## Overview

**Creative North Star: "The Red Pen Press"**

A working newsroom that grades in red ink. The surface behaves like the front page of a technical broadsheet: black nameplate bands, hairline column rules, folio lines, and a single red pencil that underlines, stamps, and scores. Density is the aesthetic: tabular figures, ruled indexes, and full-measure headlines.

**Key Characteristics:**
- Print grammar on a live page: masthead, folio, dateline, kickers, pull quotes, colophon.
- One red, used sparingly and always meaning verdict or action.
- Motion behaves like presswork: rolling reveals, drawn rules, a stamped PASS.

## Colors

Restrained strategy: cool paper ground, ink black, one signal red. Red carries verdicts and actions only.

- **Primary**
  - **Signal Red** (#E50914): verdicts, stamps, primary actions, drawn rules. Never body text.
- **Neutral**
  - **Press Paper** (#F4F3EF): page ground.
  - **Ink** (#141412): headlines, body, black bands.
  - **Folio Gray** (#6B6B66): datelines, captions, secondary text.
  - **Hairline** (#E2DFD6): column rules and dividers.
  - **Card Stock** (#FFFFFF): grading cards and reader surface.

### Named Rules
**The Red Means Verdict Rule.** Red appears only where something is judged or done: scores, stamps, primary buttons, drawn rules. Decorative red is forbidden.

## Typography

**Display Font:** Boska (with Georgia fallback)
**Body Font:** Satoshi (with system sans fallback)
**Label/Mono Font:** system monospace stack (ui-monospace), for data, scores, and code only.

**Character:** Boska brings the editorial shout; Satoshi keeps the working text quiet and legible; mono is reserved for measurement.

### Hierarchy
- **Display** (800, clamp(3rem, 6vw, 5.5rem), 1.02): front-page headlines only.
- **Headline** (800, clamp(1.8rem, 3.5vw, 2.8rem), 1.05): section heads.
- **Title** (700, 1.25rem, 1.3): card and entry titles.
- **Body** (400/500, 1.05rem, 1.7, max 70ch): reading text.
- **Label** (700, 0.75rem, uppercase, tracked): kickers, folios, captions.

### Named Rules
**The Two-Line Headline Rule.** Display headlines never exceed three lines; width and size are set to guarantee it.

## Layout

Broadsheet grid: 12 columns on desktop, single column under 768px. Front page zones separated by 2px ink rules, not whitespace alone. Sections breathe with large vertical rhythm (8rem+ between chapters). More space above a heading than below it.

## Elevation & Depth

No shadows. Depth comes from paper layering: ink bands, hairline rules, and red verdict marks. Cards are flat stock on paper with 1px hairline borders.

## Shapes

Sharp editorial corners (4px) on buttons and cards. Pills reserved for small controls like the tab filter. Circular stamps (PASS/FAIL) are the only round quote marks allowed at large scale.

## Do's and Don'ts

- **Do** set headlines in Boska at full measure; let them run wide.
- **Do** use red only for verdicts and primary actions.
- **Do** rule sections with ink lines; let the grid show.
- **Don't** use glass, blur, gradients-as-decoration, or grain overlays.
- **Don't** use emojis, tracked eyebrow labels on every section, or numbered steps unless the sequence carries information.
- **Don't** invent testimonials, users, benchmarks, or metrics.
