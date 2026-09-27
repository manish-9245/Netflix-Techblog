---
name: netflix-topics
description: Finds and ranks engineering blog topics the Netflix way, mapping a codebase or domain onto the mined Netflix topic taxonomy. Use when the user has a system or domain and asks what to write about, or wants topic ideas.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Topics

## When to activate

- User has a system, team, or domain and asks what to write about
- User wants topic ideas in the Netflix style
- Starting the pipeline before the topic is fixed

## When NOT to use

- Topic is already fixed. Go to `netflix-titles`.
- The domain has no production system, no data, and no users. Say so instead of inventing topics.

## Ask first

- Which system, team, or repo should topics come from? (Need read access or a 5-line brief.)
- Any off-limits topics (stealth work, security-sensitive, already published)?

## Instructions

1. **Map the domain** onto the mined topic taxonomy (top Netflix tags: data engineering, software engineering, recommendation systems, AI and machine learning, LLMs, autoscaling, stream processing, operational excellence, Flink, backend development, distributed systems, observability). Name the 2 closest Netflix topics and 3 exemplar posts.
2. **Generate 5 candidates**, each with a one-line angle (system plus payoff, never just a technology).
3. **Score each 1 to 5** on: scale of the problem (would the numbers impress?), data availability (can we show a measured delta?), novelty versus the exemplar posts (are we repeating Netflix?), audience breadth (practitioners beyond one company?).
4. **Rank and recommend one**, with the reason tied to the scores. Flag any candidate that scores under 3 on data availability as unpublishable until measured.
5. **Split check:** if the winner needs over 2,800 words (p90 post length), route to `netflix-series` first.

## Example

Domain: feature store. Winner: "How we cut training-serving skew to zero" (scale 4, data 5, novelty 4, breadth 4). Reject: "Our feature store architecture" (no payoff, novelty 2).
