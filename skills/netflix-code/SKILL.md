---
name: netflix-code
description: Picks the minimal code snippets that carry a Netflix-style post, with file and line citations. Use when a draft needs code, when snippets feel bloated, or when the user asks what code to show.
license: MIT
metadata: {version: "0.1.0", corpus_posts: 388, corpus_date: "2026-09"}
---

# Netflix Code

## When to activate

- Draft needs code to prove a mechanism
- Existing snippets feel long or unexplained
- User asks which code to include

## When NOT to use

- The post works without code (85% of Netflix posts ship zero code blocks). Do not add code for decoration.
- Full listings. Netflix shows fragments, never files.

## Instructions

1. **Select 1 to 3 fragments** that each prove exactly one claim. One fragment per mechanism. If a snippet proves nothing, cut it.
2. **Keep them short and annotated:** Corpus norm is tiny fenced fragments (median fences are a few lines), historically Java and config. Show the 5 to 15 lines that matter, with a sentence before (what it does) and after (why it matters). Pattern from the corpus: single annotated lines like monitor declarations, each explained in prose.
3. **Cite file and lines** on every snippet. Large blocks get replaced by an architecture figure plus the key fragment.
4. **Commands count as code:** Single deploy or run commands in backticks or fences carry launch posts (proof: "python myflow.py step-functions create" as the payoff line). Give the command, then what the reader gets.
5. **Explain, never dump:** No uncommented listings, no imports unless the import is the point, no language labels needed when obvious from content.

## Example

Autoscaler post shows one 8-line controller rule (the mechanism), one deploy command (the payoff). The 200-line controller stays in the repo, linked once.
