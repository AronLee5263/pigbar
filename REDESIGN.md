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

## Mobile spacing, language control and photo selection (2026-09-30)

- The mobile hero keeps its existing outer dimensions. Its photograph occupies 85% of the height; the upper area holds the headline, with a short gradient at the boundary. At the checked 390px viewport the hero remains 560px and the photograph is 476px, reducing the rendered subject scale by 15%.
- Ten numbered photo alternatives follow the representative image. Previous/next controls and a counter replace the crowded dots for the 14-slide comparison. Details: PHOTO_OPTIONS.md.
- The language control always reads Language and opens native-language links, with the current language checked.
- Section labels follow the current language. Korean address, opening hours and booking labels no longer have English duplicates; the main brand eyebrow is retained.
- The mobile opening-hours card measured 191px, previously 214px, with times and text sizes retained.
- Main menu and expanded-board prices have 6px of right inset; their vertical alignment is retained. Mobile drink prices also move inward.
- Bottom menu, directions and reservation tiles contain only their localized labels, with no duplicate English text or arrow symbols.
- The local preview recognizes JPEG, WebP, SVG and MP4 media and disables stale response caching.
- Checked all four locales at 320px, ten candidate images, carousel boundaries and language navigation. Existing prices and review selections are retained.

### Kakao sharing preview

The public page already points to the approved neon image. If Kakao still displays an older meat photo, clear the URL metadata cache and send the link again. The tool requires a Kakao login.

Tool: https://developers.kakao.com/tool/debugger/sharing
Official cache explanation: https://devtalk.kakao.com/t/topic/33298

Keep using https://aronlee5263.github.io/pigbar/ when resetting the Korean page. Reset the exact language URL separately if an older preview is shown for it.

## Selected banner photos and reviewer-name masking (2026-09-30)

- Original five banners are retained. Inserted selected neck photos 01, 04, 05 and 07, plus official Naver representative photos of beef rib meat and soy-marinated honeycomb pork skin. Total: 11 slides.
- The selected photos use dish-name captions, without temporary candidate text. Existing mobile framing and signature cards are retained.
- All four languages mask the final five visible characters of reviewer nicknames as *****. Names with five characters or fewer are fully masked. The same masked names are stored in deployed JavaScript and static HTML, including aria-labels.
- The approved neon sharing image remains unchanged; the user confirmed Kakao cache clearing worked.


## Further mobile UX refinement (2026-09-30)

- 9 hero images; all captions sit at bottom right. Added seafood tofu stew.
- Explicit downward-scroll link to the experience section. Motion stops after three cycles and is disabled for reduced-motion users.
- Experience copy covers aged Boseong Nokdon pork, charcoal grilling by staff and beer/soju/highballs/wine. The brand and aging statement comes from the user's supplied brief.
- 6 signature cards: official neck photo, pork belly, mango gabrisal, beef doenjang, seafood tofu and cheesy fried rice. Removed the section's repeated introductory paragraph.
- Localized handwritten recommendation labels and 3 visible set menus with compositions from the supplied boards.
- Booking entry points first open the reservation guide, including seven-table capacity, cut-off times, Naver booking and the confirmed CATCHTABLE international waitlist page. Instagram is included with its icon.
- No direct booking API, live availability or automatic menu/review synchronization is claimed.
- The drinks image layout and Kakao-only zoom behavior are preserved as requested; recommendations are documented in SALES_HANDOFF.md.

## 2026-10-01 첫 화면과 영상 개선

- 아래로 더 보기 버튼은 섹션 앵커로 이동하는 대신 화면 높이의 28%, 최대 220px만 부드럽게 스크롤한다. 동작 줄이기 설정에서는 애니메이션을 생략한다.
- 첫 화면 사진 높이를 화면 크기에 맞게 줄이고 다음 소개 영역을 밝은 배경으로 구분한다. 사진·바로가기 아래에 본문 제목과 콘텐츠 일부가 보이도록 한다.
- 중국어 김치말이국수 이름은 泡菜冷面으로 통일한다. 메뉴와 세트 설명의 정적 HTML 및 공통 번역 데이터를 함께 수정했다.
- 영상은 초기 autoplay 대신 IntersectionObserver로 화면에 들어올 때 무음 재생하고, 화면 밖에서는 일시정지한다. 기존 loop 속성으로 반복 재생한다. 동작 줄이기 설정에서는 수동 재생한다. 자동재생이 기기 설정으로 거부되면 기존 재생 버튼을 사용할 수 있다.
- 기본 영어 페이지의 영상 포스터 상대 경로를 바로잡았다.

## Mobile sizing and autoplay follow-up — 2026-10-01

- Restore 30% of the previous mobile hero height reduction at each viewport size.
- Set minimum viewport scale to 1, retain zoom-in, and clip horizontal page overflow.
- Restore native muted inline autoplay and loop; start on visibility, retry on media readiness, page return and normal touch.
- Remove the reduced-motion autoplay gate per the requested continuous video behavior; retain manual pause.
