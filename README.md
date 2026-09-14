# Campaign Momentum

Plan it. Track it. Ship it.

A free Kanban board for planning and tracking campaigns and editorial deadlines, built by [Plain Speaking Communications](https://plainspeakingcomms.com) as part of the [Momentum suite](https://plainspeakingcomms.com/psc-tools).

## Files

- `index.html` — marketing landing page
- `app.html` — the board itself
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` — PWA support
- `CNAME` — set to `campaignmomentum.app` for GitHub Pages

## How it works

- Works immediately with no setup. Cards are saved to the browser's local storage.
- Optional: connect a Google Sheet (Settings → paste Web App URL) to sync the board across devices. The Apps Script to paste into the Sheet is included in the Settings panel of `app.html`, and matches the same pattern used by Network Momentum, with `replaceRow` and `deleteRow` actions added for full-card edits and deletes.
- Optional: add an Anthropic API key (Settings) to enable "Suggest next step" on any card. Calls go straight from the browser to Anthropic's API — nothing passes through PSC servers.

## Brand standards applied

- Colors: Ocean #002366, Horizon #3A6DB5, Mist #D6E4F5, Fog #F0F4F9, Dark #1A1A1A
- Typography: Josefin Sans
- Same nav/hero/alternating-block landing page structure as Mission Momentum
- Model: `claude-sonnet-5`, `max_tokens: 8000` (adaptive thinking on by default)
