---
name: netflix-titles
description: Crafts and scores engineering blog titles against measured Netflix title patterns. Use when a topic needs a title, when there are title options to choose between, or when a working title feels weak.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Titles

## When to activate

- A topic is fixed and needs a title
- User offers title candidates and wants the winner
- `netflix-review` flagged the title axis

## When NOT to use

- Topic is still open. Route to `netflix-topics` first.
- Non-technical content.

## Ask first

- Present the 5 scored options and ask the user to pick, or to approve the auto-winner. Never ship a title the user has not seen.

## Instructions

Generate 5 options, score each against the gates below (trained on 388 titles, median 58 characters), and declare one winner with reasons.

1. **Length:** Aim 40 to 75 characters. Over 90 is cut down.
2. **Name the system:** 76% of titles contain Netflix or the system name. The reader must know what this is about before clicking.
3. **Name the payoff:** Verbs that work, mined from top title words: Introducing, Announcing, Scaling, How, Building. "Some thoughts on X" never ships.
4. **Templates that win:** "How Netflix Scales X with Y", "Introducing X: [payoff]", "X at Netflix", "[System]: [outcome]". Series titles append "(Part N)" (3% of posts).
5. **Curiosity gap:** Exactly one unanswered question or surprising pairing per title. Two gaps is clickbait; zero is invisible.
6. **No-goes:** Questions as titles are rare (under 5%); colons are fine; keep "Netflix TechBlog" suffixes and Medium artifacts out.

## Example

Topic: Flink autoscaler. Options include "How Netflix Tamed Flink Autoscaling" (winner: system named, payoff verb, 38 chars), "Introducing Adaptive Flink: Half the Cost, Same Latency" (runner-up), three rejects with reasons.
