---
name: netflix-research
description: Turns a topic into a claim-to-evidence table with sources for every row, the Netflix way. Use when the topic is fixed and the user needs research, evidence gathering, or to know what to measure before drafting.
---

# Netflix Researcher

## When to activate

- Topic and title exist, drafting has not started
- User asks what evidence, data, or sources a post needs
- `netflix-review` flagged the evidence axis

## When NOT to use

- Still choosing topics. Route to `netflix-topics`.
- Draft already exists. Route to `netflix-factcheck` for verification instead.

## Instructions

Output a claim table. Each row: claim, evidence type, source, status (have it, need it, cannot get). No row ships with "cannot get" on a load-bearing claim.

1. **Extract the load-bearing claims** (usually 5 to 9): the problem exists and matters, the old way fails, the new way works, the delta is measured, the tradeoffs are known. Corpus proof: median post carries 29 numbers per 1,000 words. A claim without a number is a paragraph, not proof.
2. **Assign evidence types:** code or config (pointer to file and lines), production metric (dashboard plus window), experiment result (baseline, treatment, dates), external doc or paper (link), prior post (link for series continuity; Netflix posts link predecessors heavily).
3. **Frame the delta early:** baseline, intervention, measured change. If the intervention has not run, the output is a measurement plan, not a draft. Say that explicitly.
4. **Mark gaps:** anything missing becomes a task list with owners, not hand-waving. Unmeasurable claims get cut or downgraded to qualitative language ("smoother", never "40% faster" without the experiment).
5. **External facts:** every standard-protocol or algorithm claim gets a doc or paper link. About 7 links per 1,000 words is the house norm.

## Example

Autoscaler research: claim "manual tuning misses latency nightly" needs on-call pages plus latency chart (have it); claim "controller halves cost" needs A/B window (need it, owner SRE). Draft waits on row 2.
