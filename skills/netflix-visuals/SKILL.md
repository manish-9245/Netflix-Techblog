---
name: netflix-visuals
description: Maps figure types, positions, and captions for a Netflix-style post from 7 mined figure archetypes. Use when a draft needs illustrations, when figures feel random, or when the user asks for diagrams, charts, or captions.
---

# Netflix Visuals

## When to activate

- Draft has text but needs a figure plan
- Existing figures lack captions, positions, or purpose
- User asks for infographics, diagrams, or charts in Netflix style

## When NOT to use

- Draft under 1,000 words with a single idea. One hero may suffice; do not pad.
- Decorative stock art. Every figure must carry information.

## Instructions

Output a figure map: for each figure, type, position, content spec, and caption. Budgets: median 3 figures per post at 2.1 per 1,000 words; 84% of posts illustrated; 16:9-ish wide PNG is the house format.

1. **Pick types from the 7 mined archetypes:** architecture diagram (pastel boxes, left-to-right data flow, labeled arrows; belongs in the first third), results chart (delta-vs-baseline line, confidence band, callout box with the headline stat), flow strip (very wide, 3 to 5 boxes, one pipeline), product screenshot (tall phone frame or UI, real pixels), tool screenshot (multi-panel internal UI), mascot or illustration (team identity, opener only), stock hero (generic photo, opener only, last resort).
2. **Place by rule:** hero before the first heading (30% of illustrated posts); first body figure after about 267 words of setup; architecture figure before the deep dive; results chart adjacent to the delta claim it proves; never two figures without prose between them.
3. **Caption every figure** with a short unnumbered italic one-liner around 79 characters that says what to see, not what it is. "Artwork variants covering themes no single image portrays" beats "System diagram". Numbered "Figure N." captions appear in about 1% of posts; match that rarity.
4. **Alt text** describes the information, not the pixels, so the figure survives without sight.
5. **Mermaid or diagram code** follows the same rules: labeled flows, no unlabeled boxes, no spaghetti arrows. If it needs a paragraph to explain the diagram, redraw the diagram.

## Example

Autoscaler map: hero (ops dashboard at 2 a.m., stock or screenshot), figure 1 architecture (controller loop, first third), figure 2 results chart (p99 misses plus cost, beside the delta), each with a one-line italic caption.
