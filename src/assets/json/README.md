# Site content (`src/assets/json`)

Edit these files to update the website. Prefer changing JSON/images here instead of React components.

## Files

| File | Used by |
|------|---------|
| `latest-news.json` | Home Latest News + article detail |
| `news-and-updates.json` | News & Events page |
| `upcoming.json` | Upcoming/recent events on News & Events page |
| `people.json` | People page (and Research member links by `id`) |
| `publications.json` | Publications page |

## Images

| Folder | Contents |
|--------|----------|
| `images/people/` | Profile photos — set `"photo": "Filename.ext"` in `people.json` |
| `images/articles/` | Article images/PDFs — reference via `srcKey` in news JSON + import in loader |

## Tips

- Keep `people.json` `id` values stable (Research projects reference them).
- Use ISO dates / `sortDate` for ordering where present.
- After adding a new article image, also register it in `eventsData.js` / `newsData.js` mediaRegistry.
- Validate JSON before committing (trailing commas will break the build).
