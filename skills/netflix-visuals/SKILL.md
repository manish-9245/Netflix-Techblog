---
name: netflix-visuals
description: Maps figure types, positions, and captions for a Netflix-style post from 7 mined figure archetypes. Use when a draft needs illustrations, when figures feel random, or when the user asks for diagrams, charts, or captions.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Visuals

## When to activate

- Draft has text but needs a figure plan
- Existing figures lack captions, positions, or purpose
- User asks for infographics, diagrams, or charts in Netflix style

## When NOT to use

- Draft under 1,000 words with a single idea. One hero may suffice; do not pad.
- Decorative stock art. Every figure must carry information.

## Ask first (always, before mapping)

1. **Supply or generate?** Will you supply the figures (screenshots, exports, photos), or should I write a generation prompt per figure? If supplied, ask for the files up front and map them to positions. If generated, write one prompt per figure in the map below.
2. **Diagram format:** Mermaid code, image-generator prompts, or a mix? Default: Mermaid for architecture and flow strips, image prompts for heroes and illustrations, real pixels for screenshots and charts.
3. **Chart data:** For each results chart, ask for the numbers or the export. Never plot from memory. No data, no chart. The figure becomes a placeholder spec instead.

## Instructions

Output a figure map: for each figure, type, position, content spec, and caption. Budgets: median 3 figures per post at 2.1 per 1,000 words; 84% of posts illustrated; 16:9-ish wide PNG is the house format.

1. **Pick types from the 13 mined archetypes:** architecture diagram (pastel boxes, left-to-right data flow, labeled arrows; belongs in the first third), layered stack (green container, dark gray bars, pink connectors, blue cylinders, lollipop interfaces), results chart (delta-vs-baseline line, confidence band, callout box with the headline stat), flow strip (very wide, 3 to 5 boxes, one pipeline), dashboard (treemap or panel grid, real tool pixels), CLI output (monospace table, IPs masked as XX), code screenshot (dark IDE pixels, distinct from fenced code), product screenshot (tall phone frame or UI, real pixels), tool screenshot (multi-panel internal UI, names redacted with white bars), title still (show frame as evidence, never decorative), mascot or illustration (team identity, opener only), poster (flat illustration, giant event type, dusty-rose plus navy plus yellow), quote card (white italic on black, culture posts), stock hero (generic photo, opener only, last resort).
2. **Place by rule:** hero before the first heading (30% of illustrated posts); first body figure after about 267 words of setup; architecture figure before the deep dive; results chart adjacent to the delta claim it proves. One figure per section is the norm; pairs are allowed for before/after or step sequences (32% of illustrated sections carry 2+), always with prose between figure and next idea.
3. **Caption every figure** with a short unnumbered italic one-liner around 79 characters that says what to see, not what it is. "Artwork variants covering themes no single image portrays" beats "System diagram". Numbered "Figure N." captions appear in about 1% of posts; match that rarity.
4. **Alt text** describes the information, not the pixels, so the figure survives without sight.
5. **Mermaid or diagram code** follows the same rules: labeled flows, no unlabeled boxes, no spaghetti arrows. If it needs a paragraph to explain the diagram, redraw the diagram.
6. **Per-figure generation prompts** (when the user chose generate) follow this shape: subject plus data flow, house style tokens, text-in-image constraint (short labels only, no paragraphs), and the caption it must support. One prompt per figure, numbered to match the map. House tokens, measured from 1,795 figures: white canvas, near-black ink (#101010), gray neutrals, accents in Netflix red (#E00000), amber (#E0C080), steel blue (#4080A0), sky (#80C0E0). Recipes: architecture gets pastel boxes with left-to-right labeled arrows; layered stacks get the green-container plus dark-bars plus pink-connectors grammar; charts get thin lines, markers, legend, and a callout box; screenshots get red (#E00000) arrows, circles, and labels marking the moment, with names whited out and IPs masked as XX.

## Example

Autoscaler map: hero (ops dashboard at 2 a.m., stock or screenshot), figure 1 architecture (controller loop, first third), figure 2 results chart (p99 misses plus cost, beside the delta), each with a one-line italic caption.
