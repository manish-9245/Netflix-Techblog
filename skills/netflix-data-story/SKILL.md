---
name: netflix-data-story
description: Frames raw numbers as baseline, intervention, measured delta with a chart spec, the signature Netflix move. Use when there are metrics, experiment results, or benchmarks to present, or when a post's numbers feel flat.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Data Story

## When to activate

- Raw metrics, A/B results, or benchmarks exist
- `netflix-review` flagged the evidence axis
- User asks how to present results convincingly

## When NOT to use

- No numbers exist. Route to `netflix-research` for a measurement plan. This skill frames data; it never invents it.
- The numbers are vanity metrics with no baseline. Say so and stop.

## Ask first

- Paste the numbers or point at the dashboard. Which figure is the baseline, which is the result, over what window?
- If there are no numbers yet, stop and say so. This skill frames data; it never invents it.

## Instructions

1. **Baseline first:** What was true before, with window and population. "Data warehouse storage grew unchecked" is nothing; "storage grew 3x in 18 months across 4,000 tables" is a baseline. Corpus proof: Byte Down opens on dozens of platforms and petabytes before any solution appears.
2. **Intervention in one line:** What changed, no mechanism yet. "We added TTL recommendations." Mechanism belongs to the approach section.
3. **Delta with teeth:** Absolute plus relative change, window, and scope. "Over a 10% decrease in warehouse footprint" names all three. Never a percentage without its base.
4. **Chart spec:** Every delta gets a results figure: delta-vs-baseline line with confidence band and a callout box carrying the headline stat (proof: the video-quality delta chart with p-value callout). X axis labeled, baseline drawn, no 3D, no dual axes without justification.
5. **Honesty pass:** Name what did not improve, the measurement limits, and where the result may not transfer. Netflix posts state limits plainly ("illustrative data" disclaimers where screenshots are mocked). Limits increase belief; hiding them destroys it.

## Example

Autoscaler numbers become: baseline (p99 missed 12 nights in Q1 across 40 jobs), intervention (controller rollout), delta (p99 misses down 12 to 1, cost down 31% on 40 jobs, March to May), chart with band plus callout, limits (steady-state workloads only).
