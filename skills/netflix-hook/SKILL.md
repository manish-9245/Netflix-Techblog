---
name: netflix-hook
description: Writes the first 150 words of an engineering post in one of 10 Netflix-proven hook archetypes. Use when starting a draft, when the opening is weak, or when the user asks for an intro, hook, or lede.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Hook

## When to activate

- A new draft needs its opening 150 words
- `netflix-review` flagged the hook axis
- User asks for intro options

## When NOT to use

- The opening already scores well. Do not rewrite working hooks.
- Non-technical or non-Netflix-style content.

## Instructions

Pick the archetype that fits the material, using measured frequencies as priors. Write 100 to 150 words, then state the archetype and why it fits. Never stack two archetypes.

1. **Announcement (17%):** For launches and open source. "We are pleased to announce X" plus what it is and who it serves in the first 3 sentences. Corpus proof: Lemur, Zuul 2, Metaflow Step Functions posts open this way. A bolded tl;dr line is reserved for major launches (under 1% of posts); do not default to it.
2. **Problem (17%):** For pain-driven work. Name a pain the reader feels ("Change management is hard", "noisy neighbors"), then widen to systems. One concrete symptom before any abstraction.
3. **Definition (6%):** For unknown systems. "X is a Y that does Z", one sentence, then stakes. Proof: Conductor, GenRec posts.
4. **Metric (5%):** For scale stories. Open with the biggest honest number (members, petabytes, requests per second), then what it costs or breaks. Proof: "195 million subscribers generate petabytes of data everyday."
5. **Question (4%):** For curiosity gaps. "Ever wonder why Netflix works so well on a train?" or "How can we be confident updates are not harming users?" Exactly one question, answered by the post.
6. **Story (2%):** For events and incidents. "Last week, we hosted..." grounds the post in time, then extracts the lesson.
7. **Mission:** "At Netflix, our goal is to predict what you want to watch before you watch it." Use when the work serves a company-level mission.
8. **Scenario:** Second person. "You are working on the next great show..." Use for creator-facing tooling.
9. **Tour:** "In this post, we will share a behind-the-scenes look at..." Use for sprawling topics that need a map.
10. **Continuation:** "As described in previous posts..." Use only for sequels and Part-N posts.

Rules: byline first (linked author names), hero figure optional (30% of illustrated posts), no throat-clearing ("In today's fast-paced world" is an instant fail).

## Example

Autoscaler post: Problem archetype. "Your Flink job is either burning money or missing latency, and the knob between them is checked by hand at 2 a.m. Ours was. This is how we taught the platform to turn it."
