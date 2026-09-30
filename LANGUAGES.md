# Website languages

- Korean: /pigbar/
- English: /pigbar/en/
- Simplified Chinese: /pigbar/zh/ (HTML language: zh-Hans)
- Japanese: /pigbar/ja/

All pages share the same layout, prices, opening hours, photos, video and approved neon share thumbnail. The header shows a globe and the fixed English label Language in every locale. Its native disclosure menu lists 한국어, English, 简体中文 and 日本語, with a check beside the current language. The same control is used on mobile and desktop. Relative routes work on both local preview and GitHub Pages.

Chinese and Japanese copy, menu translations and accessible labels are in dist/locales.js. The main Korean and English dictionaries remain in dist/app.js. Chinese and Japanese reviews translate the existing five selected English Google excerpts, retaining their authors, ratings and original links; the source heading identifies the text as translated.

Names such as gabrisal are retained where a literal translation could incorrectly identify a pork cut. Wine ade is translated as a wine drink, not grape juice. Prices are Korean won, and street addresses preserve the romanized road name for map lookup.

Static HTML contains translated content and per-language canonical, hreflang and sharing metadata. No build is required: pushing main publishes dist/ through the existing Pages workflow. When editing translations later, keep static HTML and the shared dictionaries in sync.
