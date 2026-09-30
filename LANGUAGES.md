# Website languages

- Default English page: /pigbar/
- Existing English alias: /pigbar/en/ (canonical: /pigbar/)
- Korean: /pigbar/ko/
- Simplified Chinese: /pigbar/zh/ (HTML language: zh-Hans)
- Japanese: /pigbar/ja/

The default URL serves complete English HTML without a redirect or Korean flash. The Korean page has its own /ko/ route. Canonical, Open Graph and hreflang metadata match these routes. Relative links support both localhost and the GitHub project path.

Before an explicit language choice, the header displays Language. A choice stores only a local boolean marker (pigbar.languageChosen), so later pages and refreshes display the current page language's native name: 한국어, English, 简体中文 or 日本語. A fresh default visit is English. There is no automatic redirect based on browser language. If browser storage is unavailable, navigation still works.

All prominent reservation links and the contact-card CATCHTABLE link use the current page's URL:

- Korean: https://app.catchtable.co.kr/ct/shop/pigbar?from=share&type=WAITING
- English: https://www.catchtable.net/shop/pigbar
- Simplified Chinese: https://www.catchtable.net/zh-CN/shop/pigbar
- Japanese: https://www.catchtable.net/ja-JP/shop/pigbar

The header has four section links and one CATCHTABLE action. The story section remains in the page, but its navigation tab is removed. NAVER Map and Google Maps keep English brand labels in every language, with equal button sizes and neutral borders.

All pages share menu prices, opening hours, photos, the silent video and the approved neon share thumbnail. Static HTML and shared dictionaries must be updated together. No build step is required; pushing main publishes dist/.

Chinese and Japanese reviews translate the selected English Google excerpts while retaining masked authors, ratings and source links. The source heading identifies translated reviews.
