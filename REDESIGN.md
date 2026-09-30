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

Open http://127.0.0.1:4174/ and http://127.0.0.1:4174/en/.
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
- Three manually swiped food banners with accessible dot buttons.
- One-line Korean and English headline, without the old description or numerical facts.
- Three compact experience columns: tender pork, staff grilling, stew and rice.
- Pork neck as the first signature dish; original menu prices and reviews retained.
- Compact video, light content sections, overlapping review cards and short dessert banner.
- Directions and hours near the bottom, followed by menu/directions/reservation tiles.
- Original Pexels video remains documented in MEDIA_HISTORY.md and Git history.