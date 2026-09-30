# Mobile redesign and deployment

Reference: https://m.outback.co.kr/
Project: C:\project\pigbar
Public site: https://aronlee5263.github.io/pigbar/

## Backups saved before redesign

Both annotated tags have been pushed to GitHub:
- backup/local-before-outback-20260930: local food-first version, commit d6d4515.
- backup/deployed-before-outback-20260930: last successful Pages deployment, commit b45af11.

The site is static. Each tag includes the complete dist/ folder (HTML, CSS, JavaScript, images and video). There is no separate build output to reconstruct.

## Preview

    cd "C:\project\pigbar"
    $env:PORT = "4174"
    node preview.mjs

Open http://127.0.0.1:4174/, /en/, /zh/ and /ja/ on the same local server.
If a preview is already running, save files and refresh with Ctrl+F5.

## Deploy the committed redesign

    cd "C:\project\pigbar"
    git push origin main

No npm install or build command is needed. GitHub Actions publishes dist/ on a main push.
Check https://github.com/AronLee5263/pigbar/actions for the green deployment result.

## Inspect an old version separately

    git worktree add "C:\project\pigbar-backup-local" backup/local-before-outback-20260930
    git worktree add "C:\project\pigbar-backup-deployed" backup/deployed-before-outback-20260930

Run preview.mjs in that folder with a different PORT to compare without changing the current project.

## Republish the former deployed version

Commit or preserve any current edits first. Then restore the old static files as a new commit:

    git restore --source=backup/deployed-before-outback-20260930 -- dist
    git add dist
    git commit -m "Restore previous deployed design"
    git push origin main

This creates a new commit; it does not rewrite Git history.

## Design choices

- Centered mobile logo, left menu and right language switch.
- Five manually swiped store-photo banners with accessible dots and a photo counter.
- One-line Korean and English headline, without the old description or numerical facts.
- Three compact experience columns: tender pork, staff grilling, stew and rice.
- Four signature dishes, pork neck first, with a visible next card, navigation controls and a link to the complete menu.
- Portrait video at its original 9:16 ratio without side letterboxing; five verified five-star review excerpts in each language.
- Directions and hours near the bottom, followed by menu/directions/reservation tiles.
- Original Pexels video remains documented in MEDIA_HISTORY.md and Git history.
## Refinement and sharing preview (2026-09-30)

- Stronger, single-line headline with a darker photo overlay.
- Text-only quick links: labels enlarged by 3px on mobile and shorter tiles.
- Three drinks are grouped beneath a clear heading and compact rows.
- Tested at 320px and 390px mobile widths and 1440px desktop width; no horizontal page overflow.
- Korean, English, Simplified Chinese and Japanese pages include static Open Graph and Twitter metadata, canonical URLs and reciprocal hreflang links.
- Current share artwork: dist/assets/pigbar-share-neon-v3.png, 1731 x 909 pixels.
- The earlier flat wordmark remains available in dist/assets/pigbar-logo.svg. Browser icon: dist/assets/favicon.svg.
- The approved sharing artwork uses coral-pink neon with a red-orange glow on a dark background. It contains only PIGBAR and KOREAN PORK BBQ; Outback branding is not copied.
- Public share preview can be checked after deploying this commit. Local preview cannot expose the public image URL to external crawlers.

If Kakao still shows the old photo after deployment, clear the cached metadata in the Kakao Developers URL metadata tool, then share the link again.
Official guide: https://developers.kakao.com/docs/ko/tool/common

## Chinese and Japanese update (2026-09-30)

- Added /zh/ for Simplified Chinese and /ja/ for Japanese, matching the English layout and content.
- Full menus, additional board items, opening hours, directions, booking links and accessible controls are localized.
- Mobile uses a native four-language selector; desktop shows four direct links.
- New grilled pork-neck photo appears in the second banner and first signature card in every language.
- Chinese and Japanese translate the same selected five-star English Google review excerpts, with a translated-text label beside the source.
- Verified mobile widths of 320px and 390px, a 900px desktop breakpoint, language switching, menu filtering, source links, image availability and Pages-relative routes.
- Translation locations and route details are documented in LANGUAGES.md.
