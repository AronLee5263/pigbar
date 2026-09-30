const NAVER_URL = 'https://naver.me/5XJIY3Cf';
const GOOGLE_URL = 'https://maps.app.goo.gl/Ffdk7cAi9mKsqfgm6';

const copy = {
  ko: {
    skip: '본문 바로가기', navSignature: '시그니처', navStory: '피그바 이야기', navMenu: '전체 메뉴', navReviews: '리뷰', navVisit: '오시는 길', reserve: '예약하기',
    heroEyebrow: 'HAPJEONG · CHARCOAL PORK BBQ', heroLine1: '한 점의', heroLine2: '제대로 된', heroLine3: '돼지고기.',
    heroLead: '10일 이상 숙성한 한돈 삼겹살과 목살. 손질부터 굽기까지 피그바가 책임집니다.', seeMenu: '메뉴와 가격 보기', reserveNaver: '네이버에서 예약',
    factAge: '일 숙성', factPork: '삼겹살·목살', factStation: '합정역 3번 출구', heroPhotoTag: 'THE FIRST BITE', heroPhotoTitle: '피그삼겹살', beerPhotoTitle: '목살 × 생맥주', heroBottom: '숯불이 올라오면, 저녁이 시작됩니다.',
    signatureTitle: '고기 다음까지<br />기억나는 맛.', signatureIntro: '삼겹살로 시작해, 뜨끈한 찌개와 치즈 덮인 김치볶음밥으로 마무리하세요.',
    sigMain: '가장 먼저', sigSoup: '국물 한 숟갈', sigFinish: '마지막 한 판', bellyName: '피그삼겹살', bellyDesc: '10일 이상 숙성한 +1등급 한돈. 손질한 170g 한 접시.',
    stewName: '소고기 된장찌개', stewDesc: '스지와 우삼겹을 넣은 재래식 된장찌개.', riceName: '고기듬뿍 치즈이불 볶음밥', riceDesc: '돼지고기 김치볶음밥 위에 모짜렐라와 에멘탈 치즈.',
    beerStripTag: 'THE PERFECT PAIR', beerStripTitle: '숯불 한 점, 차가운 생맥주 한 모금.', beerStripPrice: '한맥 크리미 생맥주 · ₩4,500',
    storyTitle: '좋은 고기는<br />굽는 순간까지<br /><em>좋아야 하니까.</em>', storyLead: '고기를 고르고, 10일 넘게 숙성하고, 먹기 불편한 부분을 덜어냅니다. 숯불 앞에서는 직원이 맛있게 구워드립니다.',
    point1Title: '10일 이상 저온 숙성', point1Body: '선별한 +1등급 한돈의 맛을 끌어올립니다.', point2Title: '한 점까지 직접 손질', point2Body: '근막·오돌뼈 등 식감을 해치는 부위를 제거합니다.', point3Title: '숯불 그릴링 서비스', point3Body: '처음부터 끝까지 편하게 드실 수 있도록 구워드립니다.', videoCaption: 'THE SOUND OF DINNER',
    menuTitle: '오늘 먹을<br />모든 메뉴.', menuIntro: '네이버 플레이스 최신 등록 메뉴 16종과 메뉴판 사진 속 추가 항목. 돼지고기부터 무료 후식까지.', menuAll: '전체', menuGrill: '고기', menuSide: '식사·사이드', menuDrink: '음료', menuUpdated: '네이버 플레이스 등록 메뉴 업데이트: 2026.09.15', checkLatestMenu: '방문 전 최신 메뉴 확인 ↗', boardSummary:'메뉴판 사진 속 추가 메뉴·세트·주류 보기', boardCaution:'아래 항목은 네이버 메뉴판 사진(2026년 5–6월) 기준입니다. 현재 판매 여부와 가격은 방문 전 매장에 확인해 주세요.',
    reviewsTitle: '한 번 먹으면<br />남는 이야기.', reviewsIntro: '한국어는 네이버 방문자 리뷰를, 영어는 별점 5점의 Google 리뷰를 바탕으로 요약했습니다.', dessertTag: 'ONE LAST THING', dessertTitle: '마지막 한 입은 돼지바.', dessertBody: '식사하신 모든 분께 무료 후식으로 드립니다.', dessertFree: 'FREE DESSERT',
    visitTitle: '합정에서<br />만나요.', visitIntro: '합정역 3번 출구에서 도보 약 314m. 저녁 6시 이후에는 대기가 생길 수 있어요.', addressLabel: '주소 / ADDRESS', address: '서울 마포구 독막로3길 28-7 1층', station: '합정역 3번 출구에서 314m', naverMap: '네이버 지도', googleMap: 'Google Maps',
    hoursLabel: '영업시간 / HOURS', hoursTueThuSun: '화–목 · 일', hoursFriSat: '금 · 토', hoursMon: '월요일', lastOrder1: '라스트오더 21:30', lastOrder2: '라스트오더 22:00', closed: '정기휴무', specialClosure: '2026.10.06–10.07 임시 휴무',
    contactLabel: '예약·문의 / CONTACT', visitNote: '예약은 네이버 플레이스에서, 방문 전 변동 영업시간도 확인해 주세요.', visitReserve: '예약 및 최신 정보 확인 ↗', footerTag: '숯불, 돼지고기, 그리고 좋은 저녁.', footerSource: '메뉴·영업정보: 네이버 플레이스 (2026.09.29 확인)', footerMedia: '시안용 연출 이미지와 Pexels 스톡 영상 사용. 실제 매장 사진·영상으로 교체 권장.',
    reviewSource: '네이버 플레이스 방문자 리뷰', reviewLink: '원문 보기 ↗', pageTitle: '피그바 PIGBAR | 합정 숯불 돼지고기', pageDescription: '피그바 PIGBAR 합정·홍대. 10일 이상 숙성한 한돈 삼겹살과 목살, 숯불 그릴링, 치즈이불 김치볶음밥. 메뉴, 가격, 영업시간, 오시는 길을 확인하세요.'
  },
  en: {
    skip: 'Skip to content', navSignature: 'Highlights', navStory: 'Our story', navMenu: 'Full menu', navReviews: 'Reviews', navVisit: 'Visit', reserve: 'Book a table',
    heroEyebrow: 'HAPJEONG · CHARCOAL PORK BBQ', heroLine1: 'Come for', heroLine2: 'the pork.', heroLine3: 'Stay for more.',
    heroLead: 'Korean pork belly and neck, aged for over 10 days. We prepare it carefully and grill it at your table.', seeMenu: 'Explore the menu', reserveNaver: 'Reserve on Naver',
    factAge: 'days aged', factPork: 'pork belly & neck', factStation: 'from Hapjeong Exit 3', heroPhotoTag: 'THE FIRST BITE', heroPhotoTitle: 'Pork belly', beerPhotoTitle: 'Pork neck × draft beer', heroBottom: 'When the charcoal is ready, dinner begins.',
    signatureTitle: 'More to love<br />after the grill.', signatureIntro: 'Start with pork belly. Finish with a bubbling stew and cheesy pork kimchi fried rice.',
    sigMain: 'Start here', sigSoup: 'Something warm', sigFinish: 'The finale', bellyName: 'Pig Pork Belly', bellyDesc: '170g of carefully trimmed, aged Korean pork.',
    stewName: 'Beef Doenjang Stew', stewDesc: 'Traditional soybean stew with beef tendon and brisket.', riceName: 'Cheese Blanket Kimchi Fried Rice', riceDesc: 'Pork kimchi fried rice under mozzarella and emmental.',
    beerStripTag: 'THE PERFECT PAIR', beerStripTitle: 'Charcoal grilled pork. Ice cold draft beer.', beerStripPrice: 'Hanmac creamy draft beer · ₩4,500',
    storyTitle: 'Good pork<br />deserves a<br /><em>great finish.</em>', storyLead: 'We select our pork, age it for more than 10 days and trim each cut. Our team grills it over charcoal at your table.',
    point1Title: 'Aged for 10+ days', point1Body: 'Selected Korean pork, aged to deepen the flavor.', point2Title: 'Trimmed by hand', point2Body: 'Tough membranes and cartilage are removed.', point3Title: 'Grilled for you', point3Body: 'Our team helps cook your pork from start to finish.', videoCaption: 'THE SOUND OF DINNER',
    menuTitle: 'The full<br />menu.', menuIntro: 'The 16 current Naver Place listings plus extra items photographed on the in-store menu.', menuAll: 'All', menuGrill: 'Grill', menuSide: 'Meals & sides', menuDrink: 'Drinks', menuUpdated: 'Naver Place listed menu updated Sep 15, 2026', checkLatestMenu: 'Check the latest menu ↗', boardSummary:'See additional sets, sides and drinks on the menu board', boardCaution:'These items come from Naver menu-board photos dated May–June 2026. Confirm current availability and prices with the restaurant.',
    reviewsTitle: 'Worth<br />talking about.', reviewsIntro: 'English highlights below paraphrase selected five-star Google reviews. Korean highlights use Naver visitor reviews.', dessertTag: 'ONE LAST THING', dessertTitle: 'Ice cream is on us.', dessertBody: 'One Pig Bar ice cream for every guest after the meal.', dessertFree: 'FREE DESSERT',
    visitTitle: 'See you in<br />Hapjeong.', visitIntro: 'About 314m from Hapjeong Station Exit 3. There may be a wait after 6 pm.', addressLabel: 'ADDRESS', address: '1F, 28-7 Dongmak-ro 3-gil, Mapo-gu, Seoul', station: '314m from Hapjeong Station Exit 3', naverMap: 'Naver Map', googleMap: 'Google Maps',
    hoursLabel: 'OPENING HOURS', hoursTueThuSun: 'Tue–Thu · Sun', hoursFriSat: 'Fri · Sat', hoursMon: 'Monday', lastOrder1: 'Last order 21:30', lastOrder2: 'Last order 22:00', closed: 'Closed', specialClosure: 'Special closure Oct 6–7, 2026',
    contactLabel: 'BOOKING & CONTACT', visitNote: 'Book through Naver Place. Please check current hours before visiting.', visitReserve: 'Book and check updates ↗', footerTag: 'Charcoal, pork and a good evening.', footerSource: 'Menu and hours: Naver Place (checked Sep 29, 2026)', footerMedia: 'Concept food imagery and Pexels stock footage. Replace with actual restaurant media before official launch.',
    reviewSource: 'Selected five-star Google reviews', reviewLink: 'Read on Google ↗', pageTitle: 'PIGBAR | Korean Pork BBQ in Hapjeong, Seoul', pageDescription: 'Discover PIGBAR in Hapjeong, Seoul: aged Korean pork belly and neck, table-side charcoal grilling, kimchi fried rice, full menu, prices and directions.'
  }
};

const menu = [
  {category:'grill',ko:'피그삼겹살',en:'Pig Pork Belly',descKo:'+1등급 한돈 삼겹살, 10일 이상 숙성',descEn:'Aged Korean pork belly, carefully trimmed',price:17000,tag:'PORK'},
  {category:'grill',ko:'피그목살',en:'Pig Pork Neck',descKo:'+1등급 한돈 목살, 10일 이상 숙성',descEn:'Aged Korean pork neck, carefully trimmed',price:17000,tag:'PORK'},
  {category:'grill',ko:'망고 가브리살',en:'Mango Cut Pork Jowl',descKo:'한 마리에서 소량만 나오는 희귀부위',descEn:'A prized, tender pork cut',price:18000,tag:'PORK'},
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

const reviews = {
  ko: [
    {text:'삼겹살과 목살은 육즙이 좋고, 직원이 직접 구워줘 편하게 먹었다는 후기가 많아요.',meta:'네이버 방문자 리뷰 요약 · 고기와 그릴링'},
    {text:'치즈가 듬뿍 올라간 순두부찌개와 다양한 사이드메뉴도 재방문 이유로 꼽혔어요.',meta:'네이버 방문자 리뷰 요약 · 사이드메뉴'},
    {text:'친절한 응대, 숯불 향, 무료 돼지바 후식까지 저녁의 마무리가 좋았다는 평가예요.',meta:'네이버 방문자 리뷰 요약 · 서비스'}
  ],
  en: [
    {text:'Pork and sides are worth the detour; the meal ends with complimentary ice cream.',meta:'Rash C · 5★ Google review · Oct 2023'},
    {text:'The pork belly and neck are flavorful, and the team takes care of the grill.',meta:'Guillermo L · 5★ Google review · Sep 2025'},
    {text:'Tender pork, friendly staff and an easy walk from Hapjeong Station.',meta:'Erika C · 5★ Google review · Jan 2026'}
  ]
};

let currentLang = 'ko';
let currentCategory = 'all';
const menuList = document.getElementById('menu-list');
const reviewList = document.getElementById('review-list');

function renderMenu() {
  const shown = menu.filter(item => currentCategory === 'all' || item.category === currentCategory);
  menuList.innerHTML = shown.map(item => {
    const name = currentLang === 'ko' ? item.ko : item.en;
    const desc = currentLang === 'ko' ? item.descKo : item.descEn;
    const price = item.price ? `₩${item.price.toLocaleString('ko-KR')}` : (currentLang === 'ko' ? '무료' : 'FREE');
    const tag = item.tag ? `<span>${item.tag}</span>` : '';
    return `<article class="menu-item"><h3>${name}${tag}</h3><strong>${price}</strong><p>${desc}</p></article>`;
  }).join('');
}

function renderBoardMenu() {
  document.getElementById('board-menu-list').innerHTML = boardMenu.map(item => `<div class="board-menu-item"><span>${currentLang === 'ko' ? item.ko : item.en}</span><strong>₩${item.price.toLocaleString('ko-KR')}</strong></div>`).join('');
}

function renderReviews() {
  const list = reviews[currentLang];
  reviewList.innerHTML = list.map(item => `<article class="review-card">${currentLang === 'en' ? '<span class="stars" aria-label="5 stars">★★★★★</span>' : '<span class="review-label">NAVER VISITOR REVIEWS</span>'}<p>${item.text}</p><small>${item.meta}</small></article>`).join('');
  document.getElementById('review-source-title').textContent = copy[currentLang].reviewSource;
  const rating = document.querySelector('.review-source .stars');
  rating.textContent = currentLang === 'ko' ? '4.88 / 5' : '★★★★★';
  rating.setAttribute('aria-label', currentLang === 'ko' ? '네이버 별점 4.88점' : 'Selected five-star reviews');
  const link = document.getElementById('review-source-link');
  link.textContent = copy[currentLang].reviewLink;
  link.href = currentLang === 'ko' ? NAVER_URL : GOOGLE_URL;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-en', lang === 'en');
  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.innerHTML = copy[lang][element.dataset.i18n];
  }
  for (const button of document.querySelectorAll('.lang-button')) {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('is-active', selected);
    if (selected) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  }
  document.title = copy[lang].pageTitle;
  document.querySelector('meta[name="description"]').content = copy[lang].pageDescription;
  document.querySelector('.nav-toggle').setAttribute('aria-label',lang === 'ko' ? '메뉴 열기' : 'Open menu');
  renderMenu();
  renderBoardMenu();
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
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const video = document.getElementById('grill-video');
const videoToggle = document.getElementById('video-toggle');
videoToggle.addEventListener('click', () => {
  if (video.paused) {
    video.play().catch(() => {});
    videoToggle.textContent = 'Ⅱ';
    videoToggle.setAttribute('aria-label', currentLang === 'ko' ? '영상 일시정지' : 'Pause video');
  } else {
    video.pause();
    videoToggle.textContent = '▶';
    videoToggle.setAttribute('aria-label', currentLang === 'ko' ? '영상 재생' : 'Play video');
  }
});
video.querySelector('source').addEventListener('error', () => { videoToggle.hidden = true; });
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.removeAttribute('autoplay');
  video.pause();
  videoToggle.textContent = '▶';
}

const closure = document.getElementById('special-closure');
if (new Date() >= new Date('2026-10-08T00:00:00+09:00')) closure.hidden = true;

setLanguage(location.pathname.startsWith('/en/') ? 'en' : 'ko');
