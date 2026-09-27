---
name: netflix-interview
description: Turns a 30-minute engineer conversation into a Netflix-style post outline using a mined question script. Use when the knowledge lives in someone's head, for engineer interviews, or when the user has access to the builders.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Interviewer

## When to activate

- The story exists but only as engineer knowledge
- User can talk to the builders, or pastes interview notes
- Starting research with people instead of documents

## When NOT to use

- Evidence already gathered. Route to `netflix-research`.
- No access to the builders and no notes. Say so.

## Ask first

- This skill is the questions. Confirm who I am interviewing (name, role) and whether notes or a live conversation, then run the script.

## Instructions

Most Netflix posts read like told stories because they start as told stories. Run the interview, then convert.

1. **Question script (30 minutes):** What broke or cost too much, in one sentence? What did the old way look like at 2 a.m.? What is the one architectural idea? What number proved it? What surprised you? What would you warn the next team about? What is next? Do not ask "tell me about the system." Ask for the incident, the graph, the surprise.
2. **Extract during answers:** candidate hook archetype (incident becomes story or problem, launch becomes announcement), the delta and its baseline, 3 figure ideas (architecture, result, screenshot), the lessons quote in the engineer's own words.
3. **Convert to outline** in `netflix-write` section order: hook, context, approach H2s, evaluation, closing. Attach the claim table rows each answer supports so `netflix-research` inherits them.
4. **Byline rule:** interviewed engineers become linked bylines (name plus profile link). Corpus norm: multi-author linked bylines open most posts.

## Example

20 minutes with the autoscaler owner yields: 2 a.m. paging story (hook), controller sketch (figure 1), cost-latency chart (figure 2), "never trust steady-state tests" (lessons quote), outline with 4 claim rows.
