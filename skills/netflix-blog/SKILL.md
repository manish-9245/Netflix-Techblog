---
name: netflix-blog
description: Routes any Netflix-style engineering blog task to the right specialist skills in the right order. Use when the user wants to write, plan, review, or illustrate a technical blog post in the Netflix TechBlog style, or says write like Netflix.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Blog Router

## When to activate

- User wants a Netflix-style engineering blog post and has not named a specific step
- User says "write like Netflix", "Netflix-style post", or names a topic to turn into a post
- A draft exists and needs the full pipeline (review, visuals, fact-check)

## When NOT to use

- User named a specific skill already (topics, titles, review). Let that skill run.
- The task is not technical blog writing.

## Ask first

- What is the topic or draft, and where in the pipeline are we (idea, outline, draft, published)? At most 3 questions, then chain.

## Instructions

Interview for at most 3 answers, then chain. Default chain for a new post:

1. `netflix-topics` (scope the topic, unless the topic is fixed)
2. `netflix-titles` (lock the title before drafting)
3. `netflix-research` (claim-to-evidence table)
4. `netflix-write` (draft to section budgets; calls `netflix-hook` for the opener)
5. `netflix-visuals` (figure map and captions)
6. `netflix-factcheck` then `netflix-review` (verify, then score; fix loop until score passes)

For an existing draft, run `netflix-factcheck` then `netflix-review` only.
For a big topic, insert `netflix-series` after step 1.
Announce each handoff in one line. Never skip the review gate.

## Example

User: "Write a Netflix-style post about our Flink autoscaler."
Router: locks topic, runs titles, research, write, visuals, factcheck, review.
