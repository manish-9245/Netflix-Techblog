---
name: netflix-series
description: Splits oversized topics into multi-part Netflix-style series with per-part scope and cross-linking conventions. Use when a topic exceeds one post, when the user mentions Part 2 or a series, or when continuing an earlier post.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Series

## When to activate

- Topic needs over 2,800 words (p90 single-post length)
- User asks for Part 2, a sequel, or a series plan
- A post references "earlier posts" and needs a continuation

## When NOT to use

- The topic fits one post. Do not manufacture parts.
- Standalone announcements. Those ship whole.

## Instructions

Mined from 11 Part-N posts in the corpus (3% of titles carry Part markers):

1. **Split by narrative joint, not by length.** Each part needs its own hook, delta, and payoff. Typical joints: problem and context (Part 1), architecture (Part 2), evaluation and lessons (Part 3). Corpus proof: GraphQL Federation Part 1 covers Studio Edge case study end to end, not a cliffhanger.
2. **Title each part** as "Base Title (Part N)". Keep the base identical across parts.
3. **Open continuations** with the continuation hook ("As described in previous posts...") plus a 2-sentence recap with a link to Part 1. Never assume the reader arrived in order.
4. **Close non-final parts** with a 1-paragraph preview of the next part, not a conclusion. Only the final part gets Conclusion plus closer.
5. **Per-part budgets** follow `netflix-write` (around 1,600 words, 3 figures each). A part that cannot fill them is a section, not a part.

## Example

Flink autoscaler series: Part 1 (the 2 a.m. knob problem plus measurement), Part 2 (controller architecture), Part 3 (fleet results plus lessons). Each titled, recapped, and previewed.
