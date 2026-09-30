# Media history

The original site is preserved in Git commit `2350ca295b28fb60a80ae0de718182928a728fd2`.

Original video: https://videos.pexels.com/video-files/37253004/15781662_1920_1080_30fps.mp4

Original video credit: Mallesh Baithi / Pexels, https://www.pexels.com/video/tasty-korean-bbq-pork-belly-grill-closeup-37253004/

Current video: Naver Place home preview, 10 seconds, posted by PIGBAR on May 1, 2026. The locally stored `dist/assets/mango-pork.mp4` avoids relying on Naver's expiring playback URL. Source: https://pcmap.place.naver.com/restaurant/1006983247/home

Current photos are PIGBAR's menu photos from Naver Place. Source: https://pcmap.place.naver.com/restaurant/1006983247/menu

Korean cards contain verbatim excerpts of confirmed five-star Naver reviews by younju0516, Su Yeoun Jung and skymin1003. English cards contain verbatim excerpts of confirmed five-star Google reviews by Mary Delia Bondoc, Albert Cheese and Guillermo Lamiel. Ellipses indicate omitted text, and author links lead to the review source. Ratings were checked September 30, 2026. Overall ratings remain separate from selected review ratings.

## Outback-inspired mobile redesign (2026-09-30)
- New banner: dist/assets/charcoal-grill.jpg.
- Source: PIGBAR's business-uploaded Google Maps food photo, dated June 2026.
- Google photo ID: CIABIhA-uV1-E7gxMaPnNVCCYKjZ.
- Place: https://maps.app.goo.gl/Ffdk7cAi9mKsqfgm6
- It shows scored grilled pork held with tongs and smoke. It is described as charcoal pork, not mislabelled as pork neck.
- The other banners use the existing actual-store fried-rice and doenjang photos.
- Outback's assets and copy are not included; its mobile layout is the design reference.
## Additional review excerpts and sharing artwork (2026-09-30)

- Two additional Korean reviews: 애엉잉 (visit 2026-09-23), 미유찡 (visit 2026-09-12).
- Source: https://pcmap.place.naver.com/restaurant/1006983247/review/visitor
- Both individual ratings were visibly confirmed as five stars in Naver Place.
- Two additional English reviews: Chloe Teo and erika c. Their five-star Google Maps ratings and original English text were checked directly, with automatic translation disabled.
- Source: https://maps.app.goo.gl/Ffdk7cAi9mKsqfgm6
- All five cards per language are selected verbatim excerpts, with ellipses for omitted portions. They do not claim every review of the restaurant is five stars.
- All five banner images are existing actual-store photographs: charcoal grill, pork neck, soybean stew, cheese fried rice and draft beer.
- The share thumbnail is an original orange-and-white PIGBAR wordmark with a steam motif. The editable SVG and 1200 x 630 PNG are stored in dist/assets/.


## Sharing artwork simplification (2026-09-30)
- Removed the three steam marks from the editable SVG and re-centered the text.
- Current share image: dist/assets/pigbar-share-v2.png, 1200 x 630 pixels.
- Both language pages reference the new image URL so image caching can distinguish this revision.

## Approved neon sharing thumbnail (2026-09-30)
- Current share image: dist/assets/pigbar-share-neon-v3.png.
- The user approved this generated logo artwork after comparing it with the real interior neon lighting in Naver Place photos.
- Color reference: https://pcmap.place.naver.com/restaurant/1006983247/photo?filterType=AI%20View&subFilter=INTERIOR
- The thumbnail is original logo artwork, not a photograph of the restaurant sign.
- Text contains only PIGBAR and KOREAN PORK BBQ; the location line and steam symbols are omitted.
- Korean and English Open Graph and Twitter image tags point to the same versioned public image URL, with the image's actual dimensions declared.
- The earlier flat orange share thumbnail and SVG are retained for comparison.


## Grilled pork-neck photo (2026-09-30)
- New asset: dist/assets/pork-neck-grilled.jpg (900 x 900).
- Selected from Naver Place's pork-neck photo category. It shows a moist cross-section of a browned, grilled pork bite held over the charcoal grill.
- Category: https://pcmap.place.naver.com/restaurant/1006983247/photo?filterType=AI%20View&subFilter=MENU_NAME%3A%EB%AA%A9%EC%82%B4
- Original image: https://blogfiles.pstatic.net/MjAyNjA0MThfMjg0/MDAxNzc2NDgzMjc1MzAy.CD_gbhdC08H4wTEXpYWfSld2bh2B-2xHvvYdV3GXqKUg.Xyht2oDvIAK4AtrKR2jcJRkVtIptBISLgrYSAB5yk14g.JPEG/900_20260416_190924.jpg/900x900
- Used in the pork-neck banner and first signature card in all four languages. The previous pork-neck.jpg is retained.
- The main charcoal-grill photo and approved neon sharing thumbnail remain the same.

## Numbered pork-neck alternatives (2026-09-30)

- Added ten Naver Place alternatives after the representative banner, labeled 01–10.
- The user will choose a final image after comparing the photos inside the mobile layout.
- The current first signature-card image remains pork-neck-grilled.jpg.
- Exact original URLs and candidate ordering are recorded in PHOTO_OPTIONS.json; see PHOTO_OPTIONS.md.
- The approved coral-pink neon share image is unchanged. The public page already references pigbar-share-neon-v3.png, and that image returned HTTP 200 with image/png when checked.

## Selected photos and official menu additions (2026-09-30)

- Selected neck options: 01, 04, 05 and 07. Original five banner images and existing signature-card images are preserved. Other six options are removed from current assets.
- Source menu page: https://pcmap.place.naver.com/restaurant/1006983247/menu/list
- 소갈비살: dist/assets/beef-rib.webp, 900 x 1200. Original: https://ldb-phinf.pstatic.net/20260515_196/1778822239891Ydj6E_JPEG/%BC%D2%B0%A5%BA%F1%BB%EC.jpg
- 수제 간장 벌집껍데기: dist/assets/soy-honeycomb-skin.webp, 900 x 1200. Original: https://ldb-phinf.pstatic.net/20240108_249/1704641147440k1NzU_JPEG/%B2%AE%B5%A5%B1%E23.jpg
- Review names are masked in static HTML, accessibility labels and deployed JavaScript data. Review text, ratings and source links are preserved.


## Menu and UX refinement (2026-09-30)

- Removed prior banner positions 2, 3 and 5. Current banner contains 9 images, including seafood soft tofu stew. Existing asset files remain available for rollback.
- Dish labels now sit at bottom right; the first image is identified as mango-cut gabrisal per the user's correction.
- Signature pork-neck image matches attachment 4: pork-neck-official.webp. Source: https://ldb-phinf.pstatic.net/20260514_89/1778741410056FOpxB_JPEG/IMG_0823.jpg
- Seafood stew: seafood-tofu.webp. Source: https://ldb-phinf.pstatic.net/20260514_72/1778741653985FgM8j_JPEG/8A7D1DA6-79E9-4989-AA53-31CA1F4389CA.jpg
- Recommendation marks follow the three supplied menu-board images, rather than inferred popularity.
- The original 18.11-second Naver mango video was also inspected. Its AAC track decodes to silence (mean and max volume -91 dB); the current 10-second trailer has no audio track. The current visual clip is preserved; the sound button is removed at the user’s request. Downloaded test originals remain outside the repository.
- Short review names preserve at least one grapheme when possible: up to 5 characters hide the last 2, 6 hide the last 3, longer names hide the last 5. A single-character name is replaced by one asterisk. Published author data and ARIA labels use the same mask.

- Alternative video reference supplied by user: https://naver.me/xnO08RTf . Remember for a later comparison; explicitly not used on the current website.
