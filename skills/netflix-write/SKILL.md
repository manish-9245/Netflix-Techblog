---
name: netflix-write
description: Drafts a full Netflix-style engineering post from an outline plus evidence, enforcing per-section budgets for words, figures, and code. Use when the topic and evidence exist and the user wants a complete draft.
---

# Netflix Writer

## When to activate

- Outline plus evidence table exist (from `netflix-research`, or user-supplied)
- User asks for a full draft in Netflix style

## When NOT to use

- No evidence yet. Route to `netflix-research` first. Drafts without numbers fail review.
- User wants only an outline, title, or section. Use the narrower skill.

## Instructions

Build the draft to these budgets, mined from 388 posts (median 1,614 words, range 549 to 2,801):

1. **Byline plus hook (150 words):** Linked author names first, then delegate the opener to `netflix-hook`. Optional hero figure (30% of illustrated posts use one).
2. **Context section (200 to 300 words):** Landscape plus why the old way fails. First body figure lands after about 267 words of setup. Name internal systems with links to earlier posts where they exist.
3. **Approach sections (600 to 900 words, 2+ H2s):** Concepts before use; each new term defined on first appearance. One architecture figure within the first third of the post. Repeat per-solution subsections (data flow, then logic, then view) when covering parallel systems. Corpus proof: the Byte Down post repeats Data flow, Cost calculations, Dashboard view twice.
4. **Evaluation (200 to 400 words):** Baseline, intervention, measured delta with at least one concrete number. No delta, no publish.
5. **Closing (100 to 200 words):** Labeled Conclusion, Summary, Next steps, or What is next. Then the fitting closer: hiring call (24% of posts), future work, thanks, or lessons learned. Never just stop.
6. **Code:** Only 15% of posts carry code. When used, keep snippets short and annotated (median fence is tiny), Java and config dominate historically. Prefer a figure plus key snippet over a listing.
7. **Links:** About 7 per 1,000 words. Link earlier posts in a series, docs for external systems, papers for algorithms.

After drafting, self-score with the `netflix-review` gates and report the score with the draft.

## Example

Outline on TTL automation becomes: hook (problem), Background, Data platform landscape, Cost visibility with 3 figures, TTL recommendations with dashboard views, Learnings, Conclusion with the 10% footprint number, What is next, hiring line.
