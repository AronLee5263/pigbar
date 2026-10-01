const NAVER_URL = 'https://naver.me/5XJIY3Cf';
const GOOGLE_URL = 'https://maps.app.goo.gl/Ffdk7cAi9mKsqfgm6';
const CATCHTABLE_URLS = {
  "ko": "https://app.catchtable.co.kr/ct/shop/pigbar?from=share&type=WAITING",
  "en": "https://www.catchtable.net/shop/pigbar",
  "zh": "https://www.catchtable.net/zh-CN/shop/pigbar",
  "ja": "https://www.catchtable.net/ja-JP/shop/pigbar"
};

const copy = {
  ko: {
    skip: '본문 바로가기', navSignature: '시그니처', navStory: '피그바 이야기', navMenu: '전체 메뉴', navReviews: '리뷰', navVisit: '오시는 길', reserve: '예약하기',
    heroEyebrow: 'HAPJEONG · KOREAN PORK BBQ', heroTitle: '제대로 된 숯불고기',
    seeMenu: '메뉴와 가격 보기', reserveNaver: '네이버에서 예약',
    factAge: '일 숙성', factPork: '삼겹살·목살', factStation: '합정역 3번 출구', heroPhotoTag: 'THE FIRST BITE', heroPhotoTitle: '피그삼겹살', beerPhotoTitle: '피그목살', heroBottom: '숯불이 올라오면, 저녁이 시작됩니다.',
    signatureTitle: '고기 다음까지<br />기억나는 맛.', signatureIntro: '삼겹살로 시작해, 뜨끈한 찌개와 치즈 덮인 김치볶음밥으로 마무리하세요.',
    sigMain: '가장 먼저', sigSoup: '국물 한 숟갈', sigFinish: '마지막 한 판', bellyName: '피그삼겹살', bellyDesc: '10일 이상 숙성한 +1등급 한돈. 손질한 170g 한 접시.',
    stewName: '소고기 된장찌개', stewDesc: '스지와 우삼겹을 넣은 재래식 된장찌개.', riceName: '고기듬뿍 치즈이불 볶음밥', riceDesc: '돼지고기 김치볶음밥 위에 모짜렐라와 에멘탈 치즈.',
    draftName: '한맥 크리미 생맥주', highballName: '피그 하이볼', wineName: '와인에이드',
    storyTitle: '좋은 고기는 <br />굽는 순간까지<br /><em>좋아야 하니까.</em>', storyLead: '고기를 고르고, 10일 넘게 숙성하고, 먹기 불편한 부분을 덜어냅니다. 숯불 앞에서는 직원이 맛있게 구워드립니다.',
    point1Title: '10일 이상 저온 숙성', point1Body: '선별한 +1등급 한돈의 맛을 끌어올립니다.', videoCaption: '망고 가브리살 · 피그바',
    menuTitle: '오늘 먹을<br />모든 메뉴.', menuAll: '전체', menuGrill: '고기', menuSide: '식사·사이드', menuDrink: '음료', menuUpdated: '네이버 플레이스 등록 메뉴 업데이트: 2026.09.15', checkLatestMenu: '방문 전 최신 메뉴 확인 ↗', boardSummary:'메뉴판 사진 속 추가 메뉴·세트·주류 보기', boardCaution:'아래 항목은 네이버 메뉴판 사진(2026년 5–6월) 기준입니다. 현재 판매 여부와 가격은 방문 전 매장에 확인해 주세요.',
    reviewSwipe: '옆으로 넘겨 리뷰 더 보기 →', reviewsTitle: '한 번 먹으면<br />남는 이야기.', dessertTag: 'ONE LAST THING', dessertTitle: '마지막 한 입은 돼지바.', dessertBody: '식사하신 모든 분께 무료 후식으로 드립니다.', dessertFree: '무료 후식',
    visitTitle: '합정에서 <br />만나요.', visitIntro: '합정역 3번 출구에서 도보 약 314m. 저녁 6시 이후에는 대기가 생길 수 있어요.', addressLabel: '주소', address: '서울 마포구 독막로3길 28-7 1층', station: '합정역 3번 출구에서 314m', naverMap: '네이버 지도', googleMap: 'Google Maps',
    hoursLabel: '영업시간', hoursTueThuSun: '화–목 · 일', hoursFriSat: '금 · 토', hoursMon: '월요일', lastOrder1: '라스트오더 21:30', lastOrder2: '라스트오더 22:00', closed: '정기휴무',
    contactLabel: '예약·문의', visitNote: '예약은 네이버 플레이스에서, 방문 전 변동 영업시간도 확인해 주세요.', visitReserve: '예약 및 최신 정보 확인 ↗', footerTag: '숯불, 돼지고기, 그리고 피그바.', footerSource: '메뉴·영업정보: 네이버 플레이스 (2026.09.30 확인)',
    reviewSource: '네이버 플레이스 방문자 리뷰', reviewLink: '원문 보기 ↗', pageTitle: '피그바 PIGBAR | 합정 숯불 돼지고기', pageDescription: '피그바 PIGBAR 합정·홍대. 10일 이상 숙성한 한돈 삼겹살과 목살, 숯불 그릴링, 치즈이불 김치볶음밥. 메뉴, 가격, 영업시간, 오시는 길을 확인하세요.'
  },
  en: {
    skip: 'Skip to content', navSignature: 'Highlights', navStory: 'Our story', navMenu: 'Full menu', navReviews: 'Reviews', navVisit: 'Visit', reserve: 'Book a table',
    heroEyebrow: 'HAPJEONG · KOREAN PORK BBQ', heroTitle: 'Charcoal BBQ, done right.',
    seeMenu: 'Explore the menu', reserveNaver: 'Reserve on Naver',
    factAge: 'days aged', factPork: 'pork belly & neck', factStation: 'from Hapjeong Exit 3', heroPhotoTag: 'THE FIRST BITE', heroPhotoTitle: 'Pork belly', beerPhotoTitle: 'Pork neck', heroBottom: 'When the charcoal is ready, dinner begins.',
    signatureTitle: 'More to love<br />after the grill.', signatureIntro: 'Start with pork belly. Finish with a bubbling stew and cheesy pork kimchi fried rice.',
    sigMain: 'Start here', sigSoup: 'Something warm', sigFinish: 'The finale', bellyName: 'Pig Pork Belly', bellyDesc: '170g of carefully trimmed, aged Korean pork.',
    stewName: 'Beef Doenjang Stew', stewDesc: 'Traditional soybean stew with beef tendon and brisket.', riceName: 'Cheese Blanket Kimchi Fried Rice', riceDesc: 'Pork kimchi fried rice under mozzarella and emmental.',
    draftName: 'Hanmac Creamy Draft Beer', highballName: 'Pig Highball', wineName: 'Wine Ade',
    storyTitle: 'Good pork <br />deserves a<br /><em>great finish.</em>', storyLead: 'We select our pork, age it for more than 10 days and trim each cut. Our team grills it over charcoal at your table.',
    point1Title: 'Aged for 10+ days', point1Body: 'Selected Korean pork, aged to deepen the flavor.', videoCaption: 'MANGO CUT · PIGBAR',
    menuTitle: 'The full<br />menu.', menuAll: 'All', menuGrill: 'Grill', menuSide: 'Meals & sides', menuDrink: 'Drinks', menuUpdated: 'Naver Place listed menu updated Sep 15, 2026', checkLatestMenu: 'Check the latest menu ↗', boardSummary:'See additional sets, sides and drinks on the menu board', boardCaution:'These items come from Naver menu-board photos dated May–June 2026. Confirm current availability and prices with the restaurant.',
    reviewSwipe: 'Swipe for more reviews →', reviewsTitle: 'Worth<br />talking about.', dessertTag: 'ONE LAST THING', dessertTitle: 'Ice cream is on us.', dessertBody: 'One Pig Bar ice cream for every guest after the meal.', dessertFree: 'FREE DESSERT',
    visitTitle: 'See you in <br />Hapjeong.', visitIntro: 'About 314m from Hapjeong Station Exit 3. There may be a wait after 6 pm.', addressLabel: 'ADDRESS', address: '1F, 28-7 Dongmak-ro 3-gil, Mapo-gu, Seoul', station: '314m from Hapjeong Station Exit 3', naverMap: 'Naver Map', googleMap: 'Google Maps',
    hoursLabel: 'OPENING HOURS', hoursTueThuSun: 'Tue–Thu · Sun', hoursFriSat: 'Fri · Sat', hoursMon: 'Monday', lastOrder1: 'Last order 21:30', lastOrder2: 'Last order 22:00', closed: 'Closed',
    contactLabel: 'BOOKING & CONTACT', visitNote: 'Book through Naver Place. Please check current hours before visiting.', visitReserve: 'Book and check updates ↗', footerTag: 'Charcoal, pork and PIGBAR.', footerSource: 'Menu and hours: Naver Place (checked Sep 30, 2026)',
    reviewSource: 'Google reviews', reviewLink: 'Read on Google ↗', pageTitle: 'PIGBAR | Korean Pork BBQ in Hapjeong, Seoul', pageDescription: 'Discover PIGBAR in Hapjeong, Seoul: aged Korean pork belly and neck, table-side charcoal grilling, kimchi fried rice, full menu, prices and directions.'
  }
};

Object.assign(copy.ko, {
  quickMenu:'메뉴 보기', quickVisit:'오는 길', experienceTitle:'맛있는 저녁의 세 가지.',
  experiencePork:'두툼한 목살', experiencePorkBody:'두툼하게, 부드럽게.',
  experienceGrill:'직접 그릴링', experienceGrillBody:'굽는 건 저희에게.',
  experienceFinish:'완벽한 마무리', experienceFinishBody:'찌개부터 볶음밥까지.',
  signatureSwipe:'옆으로 넘겨 대표 메뉴 보기', sigBelly:'숯불의 풍미', seeFullMenu:'전체 메뉴와 가격 보기 →', drinkHeading:'고기와 함께 한잔', signatureTitle:'피그바의 대표 메뉴', signatureIntro:'부드러운 목살, 뜨끈한 된장찌개, 치즈 덮인 김치볶음밥.',
  sigMain:'단골의 선택', neckName:'피그목살', neckDesc:'두툼한 목살, 부드러운 한 입.',
  storyTitle:'굽는 건 저희에게.', storyLead:'두툼한 고기를 숯불에 맛있게. 직원이 테이블에서 직접 구워드립니다.',
  menuTitle:'오늘의 메뉴.', reviewsTitle:'다녀간 사람들의 이야기.', visitTitle:'합정에서 만나요.',
  experienceKicker: "피그바의 저녁", signatureKicker: "피그바 추천", storyKicker: "직접 구워드립니다", menuKicker: "전체 메뉴", reviewsKicker: "손님들의 후기", visitKicker: "오시는 길"
});
Object.assign(copy.en, {
  quickMenu:'Menu', quickVisit:'Directions', experienceTitle:'Your evening at PIGBAR.',
  experiencePork:'Tender pork', experiencePorkBody:'Thick cuts. Tender bites.',
  experienceGrill:'We grill', experienceGrillBody:'You sit back and enjoy.',
  experienceFinish:'The finale', experienceFinishBody:'Warm stew. Cheesy rice.',
  signatureSwipe:'Swipe to explore our signatures', sigBelly:'Charcoal flavor', seeFullMenu:'See the full menu & prices →', drinkHeading:'A drink with your BBQ', signatureTitle:'PIGBAR signatures', signatureIntro:'Tender pork neck, beef soybean stew and cheesy kimchi fried rice.',
  sigMain:'A regular favorite', neckName:'Pig Pork Neck', neckDesc:'Thick-cut pork. Tender bites.',
  storyTitle:'We grill. You enjoy.', storyLead:'Our team grills your pork over charcoal, right at your table.',
  menuTitle:'The full menu.', reviewsTitle:'From our guests.', visitTitle:'See you in Hapjeong.',
  experienceKicker: "THE PIGBAR EXPERIENCE", signatureKicker: "PIGBAR SIGNATURE", storyKicker: "TABLESIDE GRILLING", menuKicker: "FULL MENU", reviewsKicker: "PEOPLE SAY", visitKicker: "VISIT PIGBAR"
});
// Keep names, ingredients and prices aligned across language pages.
for (const lang of ['zh', 'ja']) {
  copy[lang] = {...copy.en, ...PIGBAR_LOCALES[lang].copy};
}
for (const lang of ['ko', 'en', 'zh', 'ja']) Object.assign(copy[lang], PIGBAR_LOCALES[lang].enhancements);

const menu = [
  {category:'grill',ko:'피그삼겹살',en:'Pig Pork Belly',descKo:'+1등급 한돈 삼겹살, 10일 이상 숙성',descEn:'Aged Korean pork belly, carefully trimmed',price:17000,tag:'PORK'},
  {category:'grill',ko:'피그목살',en:'Pig Pork Neck',descKo:'+1등급 한돈 목살, 10일 이상 숙성',descEn:'Aged Korean pork neck, carefully trimmed',price:17000,tag:'PORK'},
  {category:'grill',ko:'망고 가브리살',en:'Mango-Cut Gabrisal (Pork)',descKo:'한 마리에서 소량만 나오는 희귀부위',descEn:'A prized, tender pork cut',price:18000,tag:'PORK'},
  {category:'grill',ko:'칼맛 생대패 삼겹살',en:'Hand-sliced Thin Pork Belly',descKo:'생삼겹을 3–5mm로 직접 썰어냄',descEn:'Fresh pork belly hand-sliced to 3–5mm',price:16000,tag:'PORK'},
  {category:'grill',ko:'소갈비살',en:'Beef Rib Finger Meat',descKo:'탱글하고 고소한 늑간살',descEn:'Tender, savory beef rib cut',price:18000,tag:'BEEF'},
  {category:'grill',ko:'수제 간장 벌집껍데기',en:'Soy-marinated Pork Skin',descKo:'수제 간장 양념에 48시간 숙성',descEn:'Thick pork skin marinated for 48 hours',price:10000,tag:'PORK'},
  {category:'side',ko:'소고기 된장찌개',en:'Beef Doenjang Stew',descKo:'스지·우삼겹을 넣은 재래식 된장찌개',descEn:'Traditional soybean stew with beef tendon and brisket',price:7000},
  {category:'side',ko:'아부지 된장술밥',en:'Beef Doenjang Rice Soup',descKo:'소고기 된장찌개에 밥을 넣어 끓인 메뉴',descEn:'Rice simmered in beef soybean stew',price:8000},
  {category:'side',ko:'고기듬뿍 치즈이불 볶음밥',en:'Cheese Blanket Kimchi Fried Rice',descKo:'돼지고기 김치볶음밥에 모짜렐라·에멘탈 치즈',descEn:'Pork kimchi fried rice with mozzarella and emmental',price:8000},
  {category:'side',ko:'치즈폭탄 순두부찌개',en:'Cheese Bomb Soft Tofu Stew',descKo:'우삼겹·쫄면·소시지·치즈 / 하루 10개 한정',descEn:'Beef, noodles, sausage and cheese / 10 a day',price:11000},
  {category:'side',ko:'칼칼 해물 순두부찌개',en:'Spicy Seafood Soft Tofu Stew',descKo:'칼칼한 해물 순두부찌개',descEn:'Spicy seafood and soft tofu stew',price:9000},
  {category:'side',ko:'살얼음 김치말이국수',en:'Chilled Kimchi Noodles',descKo:'살얼음과 토핑을 올린 시원한 국수',descEn:'Cold kimchi broth with icy slush and toppings',price:7000},
  {category:'drink',ko:'한맥 크리미 생맥주',en:'Hanmac Creamy Draft Beer',descKo:'차갑고 부드러운 생맥주',descEn:'Cold Korean draft beer',price:4500},
  {category:'drink',ko:'피그바하이볼',en:'Pigbar Highball',descKo:'피그바의 진한 하이볼',descEn:'House highball',price:6000},
  {category:'drink',ko:'와인에이드',en:'Wine Ade',descKo:'가볍게 즐기는 와인에이드',descEn:'A refreshing wine ade',price:6000},
  {category:'side',ko:'돼지바 아이스크림',en:'Pig Bar Ice Cream',descKo:'식사하신 모든 분께 1인 1개 무료 후식',descEn:'One complimentary ice cream per guest after the meal',price:0,tag:'FREE'}
];

const boardMenu = [
  {ko:'커플 세트',en:'Couple Set',price:59000},
  {ko:'베스트 세트',en:'Best Set',price:63000},
  {ko:'시그니처 세트',en:'Signature Set',price:86000},
  {ko:'해물듬뿍 해장라면',en:'Seafood Hangover Ramyeon',price:8000},
  {ko:'수제비 홍합탕',en:'Mussel Soup with Dough Flakes',price:14000},
  {ko:'옥수수 추가',en:'Extra Corn',price:2000},
  {ko:'콘치즈 추가',en:'Extra Corn Cheese',price:3000},
  {ko:'공기밥',en:'Steamed Rice',price:1000},
  {ko:'탄산음료',en:'Soft Drink',price:3000},
  {ko:'토닉워터·피치 토닉워터',en:'Tonic Water / Peach Tonic',price:3000},
  {ko:'레몬 슬라이스',en:'Lemon Slices',price:2000},
  {ko:'소주 (이슬·처음·진로·새로)',en:'Soju (Isul, Cheoeum, Jinro, Saero)',price:5000},
  {ko:'선양 오크',en:'Seonyang Oak Soju',price:6000},
  {ko:'청하·한라산',en:'Cheongha / Hallasan',price:6000},
  {ko:'별빛청하',en:'Starlight Cheongha',price:7000},
  {ko:'카스·테라·클라우드',en:'Cass / Terra / Kloud Beer',price:5500},
  {ko:'카스제로',en:'Cass Zero',price:4500},
  {ko:'카스제로 레몬',en:'Cass Zero Lemon',price:4500},
  {ko:'스텔라 (병)',en:'Stella (Bottle)',price:6000},
  {ko:'알파카 까베르네 소비뇽 (잔)',en:'Alpaca Cabernet Sauvignon (Glass)',price:6000},
  {ko:'알파카 까베르네 소비뇽 (병)',en:'Alpaca Cabernet Sauvignon (Bottle)',price:25000},
  {ko:'레 데쎄 뮈에트 피노누아 (병)',en:'Les Déesses Muettes Pinot Noir (Bottle)',price:33000},
  {ko:'하이볼 샷 추가',en:'Extra Highball Shot',price:3000},
  {ko:'와인에이드 샷 추가',en:'Extra Wine Ade Shot',price:2000}
];

const menuMarks = {1:'best', 2:'best', 5:'best', 7:'best', 8:'pick', 9:'signature', 11:'best'};
for (const [index, mark] of Object.entries(menuMarks)) menu[Number(index)].mark = mark;
boardMenu[1].mark = 'best';
boardMenu[2].mark = 'value';

const reviews = {
  ko: [
    {text:'합정역 근처에서 삼겹살, 목살 먹으러 방문한 피그바! 고기 질도 좋고 직원분이 직접 구워주는 고기집이라 편하게 먹을 수 있었어요. 특히 목살이 촉촉하고 부드러워서 맛있었습니다. …',author:'younj*****',date:'2026.08.08',url:'https://m.place.naver.com/my/5f04312aee4be03dee262124/review?v=2'},
    {text:'고기 맛있어요!! 가브리살 목살 삼겹살 다 맛있구 합정 상수 사이에 있어요. 숯불에 직접 구워주시고 매장은 6테이블 정도로 아담한데 테이블당 4명씩 충분히 앉을수있어요. …',author:'Su Yeoun*****',date:'2026.09.02',url:'https://m.place.naver.com/my/5e8852538f87a842bc8b3a1b/review?v=2'},
    {text:'어후~~ 하나도 남김없이 다 먹었네요!!!\n소갈비살, 삼겹, 목살 다 너무 부드럽고 고소하니 맛있어요\n특히 껍데기.. 두툼하면서 쫄깃하고 부드러운게 완전 취저입니다!!! …',author:'skymi*****',date:'2026.09.11',url:'https://m.place.naver.com/my/5ea7e2908f87a842bc6c93ed/review?v=2'}
  ],
  en: [
    {text:"… The food was delicious, the service was excellent, and I'll definitely come back next time I'm in the area!",author:'Mary Delia B*****',date:'Google',url:GOOGLE_URL},
    {text:'… very kind to help us out with cooking all the meat. I enjoy the pork belly and neck with their sides the most.',author:'Albert C*****',date:'Google',url:GOOGLE_URL},
    {text:'Pigbar is the place to go if you love Korean BBQ. … the staff makes sure the grill is always perfect.',author:'Guillermo L*****',date:'Google',url:GOOGLE_URL}
  ]
};

reviews.ko.push(
  {text:'작년부터 왔는데 삼겹 목살 진짜 한결같이 잡내없이 맛있어요🥹\n항상 잘 구워주셔서 열심히 먹기만 하면 된답니다-!\n… 된장술밥은 고기랑 같이 먹으면 그냥 뒤집어집니다🫶🏻',author:'애**',date:'2026.09.23',url:'https://pcmap.place.naver.com/restaurant/1006983247/review/visitor'},
  {text:'… 고기 구성은 소갈빗살+삼겹+목살+껍데기+소고기 된장찌게였는데 다 맛있었어요~\n반찬구성도 적당하게 좋았고 무엇보다 친절하게 잘 챙겨주셔서 기분좋게 먹었습니다. …',author:'미**',date:'2026.09.12',url:'https://pcmap.place.naver.com/restaurant/1006983247/review/visitor'}
);
reviews.en.push(
  {text:'The pork here is SOOO GOOOD.\nSuper tender and juicy!\nThe staff cooks the meat for you as well 😊 …',author:'Chlo*****',date:'Google',url:GOOGLE_URL},
  {text:'REALLY DELICIOUS FOOD 😍 the pork was soft and the staff were really friendly!!\n… Short walk from Hapjeong station, great service!',author:'eri*****',date:'Google',url:GOOGLE_URL}
);
for (const lang of ['zh', 'ja']) {
  const localized = PIGBAR_LOCALES[lang];
  menu.forEach((item, index) => {
    item[lang] = localized.menu[index][0];
    item['desc' + lang[0].toUpperCase() + lang.slice(1)] = localized.menu[index][1];
  });
  boardMenu.forEach((item, index) => { item[lang] = localized.boardMenu[index]; });
  // These are translations of the same selected reviews, with original authors and links.
  reviews[lang] = reviews.en.map((item, index) => ({...item, text:localized.reviews[index]}));
}
// Names are stored masked; enforce the same rule for future review entries.
function maskReviewerName(name) {
  const value = String(name).trim();
  if (/\*+$/.test(value)) return value;
  const characters = typeof Intl.Segmenter === 'function'
    ? Array.from(new Intl.Segmenter(undefined, {granularity:'grapheme'}).segment(value), item => item.segment)
    : Array.from(value);
  const length = characters.length;
  const hidden = length <= 1 ? length : Math.min(length - 1, length <= 5 ? 2 : length === 6 ? 3 : 5);
  return characters.slice(0, length - hidden).join('') + '*'.repeat(hidden);
}
let currentLang = 'en';
let languageChosen = false;
try { languageChosen = localStorage.getItem('pigbar.languageChosen') === 'true'; } catch {}

function updateLanguageLabel(lang) {
  const summary = document.querySelector('.language-menu summary');
  const label = languageChosen ? PIGBAR_LOCALES[lang].ui.languageName : 'Language';
  summary.querySelector('span').textContent = label;
  summary.lang = languageChosen ? PIGBAR_LOCALES[lang].htmlLang : 'en';
  summary.setAttribute('aria-label', languageChosen ? PIGBAR_LOCALES[lang].ui.languageLabel + ': ' + label : label);
}

function updateCatchtableLinks(lang) {
  document.querySelectorAll('[data-catchtable]').forEach(link => { link.href = CATCHTABLE_URLS[lang]; });
}
let currentCategory = 'all';
const menuList = document.getElementById('menu-list');
const reviewList = document.getElementById('review-list');

function menuMark(mark) {
  return mark ? '<span class="menu-mark menu-mark-' + mark + '">' + PIGBAR_LOCALES[currentLang].ui.menuMarks[mark] + '</span>' : '';
}
function renderSets() {
  document.getElementById('set-menu-list').innerHTML = boardMenu.slice(0,3).map((item,index) => '<article class="set-card"><div class="set-card-title"><h3>' + item[currentLang] + '</h3>' + menuMark(item.mark) + '</div><p>' + PIGBAR_LOCALES[currentLang].ui.setDescriptions[index] + '</p><strong>₩' + item.price.toLocaleString('ko-KR') + '</strong></article>').join('');
}
function renderMenu() {
  const shown = menu.filter(item => currentCategory === 'all' || item.category === currentCategory);
  menuList.innerHTML = shown.map(item => {
    const name = item[currentLang];
    const desc = item['desc' + currentLang[0].toUpperCase() + currentLang.slice(1)];
    const price = item.price ? `₩${item.price.toLocaleString('ko-KR')}` : PIGBAR_LOCALES[currentLang].ui.freeLabel;
    const tags = {PORK:PIGBAR_LOCALES[currentLang].ui.tagPork, BEEF:PIGBAR_LOCALES[currentLang].ui.tagBeef, FREE:PIGBAR_LOCALES[currentLang].ui.tagFree};
    const tag = item.tag ? `<span>${tags[item.tag]}</span>` : '';
    return `<article class="menu-item"><h3><span class="menu-name">${name}</span>${menuMark(item.mark)}${tag}</h3><strong>${price}</strong><p>${desc}</p></article>`;
  }).join('');
}

function renderBoardMenu() {
  document.getElementById('board-menu-list').innerHTML = boardMenu.slice(3).map(item => `<div class="board-menu-item"><span>${item[currentLang]}</span><strong>₩${item.price.toLocaleString('ko-KR')}</strong></div>`).join('');
}

function renderReviews() {
  const list = reviews[currentLang];
  reviewList.setAttribute('aria-label', PIGBAR_LOCALES[currentLang].ui.reviewRegion);
  reviewList.innerHTML = list.map(item => {
    const author = maskReviewerName(item.author);
    return `<article class="review-card"><div class="review-rating"><span class="stars" aria-label="5 / 5">★★★★★</span><strong>5.0</strong></div><blockquote>${item.text}</blockquote><a class="review-author" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${author} ${PIGBAR_LOCALES[currentLang].ui.reviewReadFull}">${author}<span>${item.date} ↗</span></a></article>`;
  }).join('');
  document.getElementById('review-source-title').textContent = copy[currentLang].reviewSource;
  const rating = document.querySelector('.review-source .stars');
  rating.textContent = currentLang === 'ko' ? '4.88 / 5' : '5.0 / 5';
  rating.setAttribute('aria-label', PIGBAR_LOCALES[currentLang].ui.ratingLabel);
  const link = document.getElementById('review-source-link');
  link.textContent = copy[currentLang].reviewLink;
  link.href = currentLang === 'ko' ? NAVER_URL : GOOGLE_URL;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = PIGBAR_LOCALES[lang].htmlLang;
  document.documentElement.dataset.language = lang;
  for (const code of ['ko','en','zh','ja']) document.body.classList.toggle('lang-' + code, code === lang);
  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.innerHTML = copy[lang][element.dataset.i18n];
  }
  for (const button of document.querySelectorAll('.lang-button')) {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('is-active', selected);
    if (selected) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
    button.querySelector('.language-check').textContent = selected ? '✓' : '';
  }
  document.title = copy[lang].pageTitle;
  document.querySelector('meta[name="description"]').content = copy[lang].pageDescription;
  updateLanguageLabel(lang);
  updateCatchtableLinks(lang);
  localizeAccessibility();
  renderMenu();
  renderBoardMenu();
  renderSets();
  renderReviews();
}

document.querySelectorAll('.menu-tab').forEach(button => button.addEventListener('click', () => {
  currentCategory = button.dataset.category;
  document.querySelectorAll('.menu-tab').forEach(tab => {
    const selected = tab === button;
    tab.classList.toggle('is-active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  renderMenu();
}));

const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', PIGBAR_LOCALES[currentLang].ui[open ? 'menuClose' : 'menuOpen']);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', PIGBAR_LOCALES[currentLang].ui.menuOpen);
}));

const video = document.getElementById('grill-video');
const videoToggle = document.getElementById('video-toggle');
let videoInView = false;
let videoManuallyPaused = false;
function syncVideoControls() {
  const ui = PIGBAR_LOCALES[currentLang].ui;
  videoToggle.textContent = video.paused ? '▶' : 'Ⅱ';
  videoToggle.setAttribute('aria-label', ui[video.paused ? 'videoPlay' : 'videoPause']);
}
videoToggle.addEventListener('click', async () => {
  if (video.paused) {
    videoManuallyPaused = false;
    try { await video.play(); } catch { syncVideoControls(); }
  } else {
    videoManuallyPaused = true;
    video.pause();
  }
});
video.addEventListener('play', syncVideoControls);
video.addEventListener('pause', syncVideoControls);

video.querySelector('source').addEventListener('error', () => { videoToggle.hidden = true; });
// Keep iOS inline autoplay muted, and retry when media becomes ready or the page returns.
video.defaultMuted = video.muted = true;
function playVisibleVideo() {
  if (videoInView && !videoManuallyPaused && !document.hidden && video.paused) {
    video.play().catch(syncVideoControls);
  }
}
if ('IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver(([entry]) => {
    videoInView = entry.isIntersecting;
    if (videoInView) playVisibleVideo();
    else video.pause();
  }, {threshold:0});
  videoObserver.observe(video);
} else {
  videoInView = true;
  playVisibleVideo();
}
video.addEventListener('canplay', playVisibleVideo);
window.addEventListener('pageshow', playVisibleVideo);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) video.pause();
  else playVisibleVideo();
});
// A normal touch can retry playback in browsers that require user interaction.
document.addEventListener('touchend', playVisibleVideo, {passive:true});
document.addEventListener('pointerup', playVisibleVideo, {passive:true});


function localizeAccessibility() {
  const ui = PIGBAR_LOCALES[currentLang].ui;
  const labels = {'.header-inner > .brand':'home', '#main-nav':'primary', '.lang-switch':'languageLabel', '.quick-nav':'quickLinks', '.bottom-actions':'planVisit', '#hero-track':'foodPhotos', '.hero-pagination':'photoSelection', '#hero-prev':'heroPrevious', '#hero-next':'heroNext', '.menu-tabs':'menuCategories', '.nav-toggle':'menuOpen', '#grill-video':'videoLabel', '#video-toggle':video.paused ? 'videoPlay' : 'videoPause', '#signature-prev':'signaturePrevious', '#signature-next':'signatureNext'};
  for (const [selector, key] of Object.entries(labels)) document.querySelector(selector).setAttribute('aria-label', ui[key]);
  document.querySelectorAll('.hero-slide img').forEach(img => {
    img.alt = img.dataset.selectedNeck ? ui.selectedNeckAlts[img.dataset.selectedNeck] : ui.photoAlts[Number(img.dataset.photo)];
  });
  document.querySelectorAll('.hero-photo-label[data-caption]').forEach(caption => {
    caption.textContent = ui[caption.dataset.caption];
  });
  document.querySelectorAll('.signature-card img').forEach(img => { img.alt = ui.signatureAlts[img.dataset.signatureAlt]; });
  document.querySelectorAll('.drink-card img').forEach((img, index) => { img.alt = ui.drinkAlts[index]; });
}
const languageMenu = document.querySelector('.language-menu');
document.querySelectorAll('.lang-button').forEach(link => {
  link.addEventListener('click', () => {
    languageChosen = true;
    try { localStorage.setItem('pigbar.languageChosen', 'true'); } catch {}
    updateLanguageLabel(link.dataset.lang);
  });
});
document.addEventListener('click', event => {
  if (!languageMenu.contains(event.target)) languageMenu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && languageMenu.open) {
    languageMenu.open = false;
    languageMenu.querySelector('summary').focus();
  }
});
const pageLanguage = document.documentElement.dataset.language || 'en';
setLanguage(Object.hasOwn(copy, pageLanguage) ? pageLanguage : 'en');
syncVideoControls();

// Manual store-photo carousel; original photos keep their relative order.
const heroTrack = document.getElementById('hero-track');
const heroSlides = [...heroTrack.querySelectorAll('.hero-slide')];
const heroPrevious = document.getElementById('hero-prev');
const heroNext = document.getElementById('hero-next');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
// Reveal a little of the next section without jumping to its anchor.
document.querySelector('.hero-scroll').addEventListener('click', event => {
  event.preventDefault();
  window.scrollBy({
    top:Math.min(220, Math.round(window.innerHeight * .28)),
    behavior:'smooth'
  });
});
let heroIndex = 0;
function updateHeroPosition() {
  const index = Math.max(0, Math.min(heroSlides.length - 1, Math.round(heroTrack.scrollLeft / heroTrack.clientWidth)));
  heroIndex = index;
  const count = (index + 1) + ' / ' + heroSlides.length;
  const counter = document.getElementById('hero-count');
  if (counter.textContent !== count) counter.textContent = count;
  heroPrevious.disabled = index === 0;
  heroNext.disabled = index === heroSlides.length - 1;
}
function showHeroSlide(index, behavior = reducedMotion.matches ? 'auto' : 'smooth') {
  const position = Math.max(0, Math.min(heroSlides.length - 1, index));
  heroTrack.scrollTo({left: heroTrack.clientWidth * position, behavior});
}
heroPrevious.addEventListener('click', () => showHeroSlide(heroIndex - 1));
heroNext.addEventListener('click', () => showHeroSlide(heroIndex + 1));
heroTrack.addEventListener('scroll', updateHeroPosition, {passive:true});
heroTrack.addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  showHeroSlide(heroIndex + (event.key === 'ArrowRight' ? 1 : -1));
});
window.addEventListener('resize', () => showHeroSlide(heroIndex, 'auto'));
updateHeroPosition();
// Signature cards show a visible next card and explicit browsing controls.
const signatureTrack = document.getElementById('signature-track');
const signatureCards = [...signatureTrack.querySelectorAll('.signature-card')];
const signaturePrevious = document.getElementById('signature-prev');
const signatureNext = document.getElementById('signature-next');
let signatureIndex = 0;
function updateSignaturePosition() {
  const stride = signatureCards[1].offsetLeft - signatureCards[0].offsetLeft;
  const end = signatureTrack.scrollWidth - signatureTrack.clientWidth;
  const atEnd = end > 0 && signatureTrack.scrollLeft >= end - 2;
  signatureIndex = atEnd ? signatureCards.length - 1 : Math.min(signatureCards.length - 1, Math.round(signatureTrack.scrollLeft / stride));
  document.getElementById('signature-count').textContent = (signatureIndex + 1) + ' / ' + signatureCards.length;
  signaturePrevious.disabled = signatureIndex === 0;
  signatureNext.disabled = signatureIndex === signatureCards.length - 1;
}
function showSignature(index) {
  const card = signatureCards[Math.max(0, Math.min(signatureCards.length - 1, index))];
  signatureTrack.scrollTo({left:card.offsetLeft - signatureCards[0].offsetLeft,behavior:reducedMotion.matches ? 'auto' : 'smooth'});
}
signaturePrevious.addEventListener('click', () => showSignature(signatureIndex - 1));
signatureNext.addEventListener('click', () => showSignature(signatureIndex + 1));
signatureTrack.addEventListener('scroll', updateSignaturePosition, {passive:true});
signatureTrack.addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  showSignature(signatureIndex + (event.key === 'ArrowRight' ? 1 : -1));
});
updateSignaturePosition();
window.addEventListener('resize', updateSignaturePosition);
