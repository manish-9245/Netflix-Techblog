---
name: netflix-review
description: Scores an engineering blog draft against the quantified Netflix TechBlog rubric (structure, evidence, figures, title, hook, voice) and returns fixes. Use when a draft exists and the user wants a Netflix-editor review, a score, or to know what is missing before publishing.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Reviewer

## When to activate

- A draft exists and the user asks for review, feedback, scoring, or publish-readiness
- After `netflix-write` finishes a draft (mandatory gate)

## When NOT to use

- No draft exists yet. Route to `netflix-topics` or `netflix-write`.
- The user wants copy-editing only (grammar, spelling). This skill judges Netflix-fit, not prose mechanics.

## Ask first

- Report-only, or apply the fixes? Default: report with the top 5 fixes, apply on approval.
- Publish target and date, if any (sets how strict the gate is)?

## Instructions

Score the draft 0 to 10 on each axis using the gates below, trained on 388 Netflix TechBlog posts. Report a table plus the top 5 fixes ordered by score impact. Pass mark: no axis below 6, total at least 48/70.

1. **Structure (10):** Median post is 1,614 words (p10 549, p90 2,801). Expect: problem or context opening, 2+ H2 sections, architecture or approach section, results or evaluation, closing section (Conclusion, Summary, Next steps, or What is next appear in most posts). Posts under 800 words can pass if all density gates hold (compact mode). Deduct for missing results, missing closing, or single-section walls of text.
2. **Evidence density (10):** Median 29 numbers and 7 links per 1,000 words. Every performance or scale claim needs a number; every external fact needs a link. Flag unsupported quantitative claims as failures, not warnings.
3. **Figures (10):** 84% of posts are illustrated, median 3 figures at 2.1 per 1,000 words. First figure should land within roughly the first 300 words. Zero figures in a post over 1,000 words caps this axis at 4. Call `netflix-visuals` for the fix list.
4. **Title (10):** Median 58 characters; 76% contain Netflix or the system name. Title must name the system and the payoff. Vague titles ("Some thoughts on pipelines") fail.
5. **Hook (10):** First 150 words must match one of 10 mined archetypes: announcement (17%), problem (17%), definition (6%), metric (5%), question (4%), story, mission, scenario, tour, continuation. Name the archetype or mark missing.
6. **Voice (10):** Sentences near 22 words median; active "we"-voice outnumbers passive 2 to 1 (13.4 vs 6.1 per 1,000 words); hedging under 2 per 1,000. Flag passive-heavy or hedged passages with rewrites.
7. **Ending (10):** 24% close with a hiring call, others with future work, thanks, or lessons. A post that just stops loses points. Suggest the fitting closer.

## Example

Draft about a cache layer with no figures and no numbers: Structure 7, Evidence 3, Figures 2, Title 6, Hook 7 (problem), Voice 7, Ending 4. Total 36. Top fix: add the hit-rate delta with a results chart (Evidence + Figures +12).
