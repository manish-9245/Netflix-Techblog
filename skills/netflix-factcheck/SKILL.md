---
name: netflix-factcheck
description: Verifies every claim in a Netflix-style draft against its source, returning claim-by-claim verdicts. Use when a draft is complete, before review or publishing, or when the user asks what is verified.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Factchecker

## When to activate

- Draft is complete and needs verification before `netflix-review` or publishing
- User asks which claims hold up
- After new numbers or snippets enter a draft

## When NOT to use

- No draft exists. There is nothing to check.
- As a substitute for research. Missing evidence goes back to `netflix-research`, not around it.

## Instructions

Extract every checkable claim and verdict each one: verified, soft (direction right, number shaky), or unsupported. Output the table plus required fixes. Unsupported load-bearing claims block publishing.

1. **Quantitative claims** (median post carries 29 numbers per 1,000 words): each number needs a source (dashboard, experiment window, paper) or it downgrades to qualitative language. "40% faster" without a window becomes "noticeably faster". No exceptions for round numbers; round numbers get extra scrutiny.
2. **Mechanism claims** ("X works by Y"): each needs a code pointer or doc link. Unverifiable mechanisms move to "we believe" or get cut.
3. **External claims** (protocols, algorithms, other companies' systems): each needs its link. About 7 links per 1,000 words is the house norm; missing links are findings, not nits.
4. **Comparisons** ("better", "faster", "cheaper", "first"): each needs the comparison named (better than what, measured how). Naked comparatives fail.
5. **Illustrative data:** mocked screenshots or hypothetical numbers must carry the disclaimer convention ("does not represent actual data, illustrative purposes only"), per corpus practice. Undisclosed mock data is a publication blocker.
6. **Fix loop:** return the verdict table; after fixes, re-run this skill, then hand to `netflix-review`.

## Example

Autoscaler draft: "cost down 31%" verified (March to May billing export); "first autoscaler to..." unsupported (cut to "our controller"); dashboard screenshot mocked without disclaimer (blocker until labeled).
