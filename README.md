# Write Like Netflix

A skill suite that teaches AI assistants to write engineering blogs the way
Netflix does — trained on the complete Netflix TechBlog archive
(**800+ posts, 2017–2026**), each studied as markdown with figures,
captions, and metadata.

## Features

| Skill | What it does |
|---|---|
| `netflix-topics` | Finds topics worth writing about, scored the Netflix way |
| `netflix-titles` | Crafts titles that earn the click |
| `netflix-series` | Plans multi-part deep dives |
| `netflix-research` | Turns code, docs, and experiments into evidence |
| `netflix-interview` | Turns a 30-min engineer convo into an outline |
| `netflix-data-story` | Frames numbers as baseline → intervention → measured delta |
| `netflix-code` | Picks the minimal snippets that carry the story |
| `netflix-hook` | Writes first-150-words openers in 5 proven archetypes |
| `netflix-write` | Drafts the full post to per-section budgets |
| `netflix-visuals` | Places the right figure in the right spot, with captions |
| `netflix-review` | Scores any draft like a Netflix editor — with fixes |
| `netflix-factcheck` | Verifies every claim against its source |
| `netflix-blog` | Router — picks the right skills in the right order |

Every rule is quantified, every technique traces to real posts.
No generic writing advice.

## Status

- [x] Training corpus (800+ posts archived as markdown + figures)
- [ ] Corpus profiler → quantitative style profiles
- [ ] Skill suite (`skills/`)
- [ ] Reviewer rubric + annotated exemplar set

## Use

Compatible with any agent that loads skills
([Claude Code](https://docs.anthropic.com/en/docs/claude-code),
[OpenCode](https://opencode.ai/docs), etc.):

```bash
git clone https://github.com/manish-9245/Netflix-Techblog.git
# point your agent at the skills/ directory
```

## License

Skills and code are MIT. Post content studied belongs to Netflix.
