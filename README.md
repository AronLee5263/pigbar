# PIGBAR website

Static Korean/English restaurant website for PIGBAR in Hapjeong.

## Development

The publishable files are in `dist/`. Run `node preview.mjs`, then open `http://127.0.0.1:4173/`. The English page is `/en/`.

## Deployment

Repository: https://github.com/AronLee5263/pigbar

GitHub Pages: https://aronlee5263.github.io/pigbar/

`.github/workflows/pages.yml` publishes `dist/` whenever `main` changes. Settings → Pages uses GitHub Actions. No installation or build step is needed. Relative links support both GitHub project paths and a future custom domain.

## Content and media

- [Naver Place](https://pcmap.place.naver.com/restaurant/1006983247/menu): menu, prices and PIGBAR menu photos. Checked September 30, 2026.
- [Naver reviews](https://pcmap.place.naver.com/restaurant/1006983247/review/visitor): confirmed five-star Korean reviews.
- [Google Maps](https://maps.app.goo.gl/Ffdk7cAi9mKsqfgm6): confirmed five-star English reviews.

Review cards contain attributed verbatim excerpts, with ellipses for omitted text. They do not claim that every review has five stars. The Korean section keeps the overall Naver rating of 4.88 separately.

The main menu has 16 Naver listings. An accordion holds 24 additional items from menu-board photos dated May–June 2026 and asks visitors to confirm availability and prices.

The Naver home video is stored locally as a 10-second MP4. Sound starts muted and visitors can enable it. See [MEDIA_HISTORY.md](MEDIA_HISTORY.md) for the previous video and the Git commit needed to restore it.
