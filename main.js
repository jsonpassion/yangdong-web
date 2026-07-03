
/* JS 로드 확인 — reveal 애니메이션 활성화 */
document.documentElement.classList.add('js');

/* 뷰포트 내 요소는 즉시 표시 (JS 추가 후 첫 페인트 전에 동기 실행) */
document.querySelectorAll('[data-reveal]').forEach((el) => {
  const { top, bottom } = el.getBoundingClientRect();
  if (top < window.innerHeight && bottom > 0) {
    el.classList.add('is-visible');
  }
});

/* ============================================================
   TRANSLATIONS
   ============================================================ */

const translations = {
  ko: {
    /* header */
    "nav-context": "배경",
    "nav-program": "프로그램",
    "nav-apply": "신청",
    "header-cta": "참가 신청",
    "lang-toggle": "EN",

    /* hero */
    "hero-h1-line1": "Dive into",
    "hero-h1-line2": "Experiences:",
    "hero-h1-place": "Yangdong Village",
    "hero-lead":
      "양동마을의 골목, 처마, 사람을 공간 콘텐츠로 기록하는 하루. 배움에서 산책, 감상, 라이트닝 토크까지 하나의 커뮤니티 프로젝트로 이어집니다.",
    "btn-apply": "신청하기",
    "btn-flow": "흐름 보기",

    /* hero facts */
    "fact-topic-label": "주제",
    "fact-topic-value": "Explore Spatial Together",
    "fact-place-label": "장소",
    "fact-place-value": "경주 양동마을",
    "fact-output-label": "결과물",
    "fact-output-value": "Spatial Video, Spatial Photo, Panorama, etc",
    "fact-date-label": "날짜",
    "fact-date-value": "7.11 Sat",

    /* context */
    "context-kicker": "기획 배경",
    "context-h2": "오래된 마을을 새 공간 경험의 출발점으로",
    "context-p1":
      "양동마을은 하회마을과 함께 UNESCO에 등재된 세계유산입니다. 산세, 물길, 농경지, 정자, 고택이 이어지는 풍경은 공간을 보고 기록하는 커뮤니티 데이에 적합한 장면들을 제공합니다.",
    "context-p1-strong": "한국의 역사마을: 하회와 양동",
    "context-p2":
      "국내 Vision Pro 생태계는 아직 함께 배우고, 실험하고, 결과물을 남기는 커뮤니티 경험이 충분하지 않습니다. 이 행사는 사용법을 넘어 각자가 본 장면을 공유 가능한 공간 콘텐츠로 남기는 것을 목표로 합니다.",
    "heritage-caption-label": "Spatial walk route",
    "heritage-caption-desc": "마을의 경사, 골목, 처마선을 따라 장면을 수집합니다.",

    /* flow */
    "flow-kicker": "하루의 흐름",
    "flow-h2": "스크롤처럼 끊기지 않는 네 개의 경험",
    "flow-lead":
      "참가자는 짧게 익히고, 현장에서 걸으며 촬영하고, 함께 감상한 뒤, 각자가 잘 쓰는 앱과 아이디어를 나눕니다.",
    "flow-step1-copy":
      "공간 사진과 비디오 촬영, 파노라마 촬영 방법을 익힙니다.",
    "flow-step2-copy":
      "오늘의 챌린지가 제공됩니다.",
    "flow-step3-copy":
      "서로의 작품을 감상하며 어떤 공간 단서가 몰입감을 만들었는지 이야기합니다.",
    "flow-step4-copy":
      "가장 잘 활용하는 앱 하나씩을 소개하고, 다음 커뮤니티 프로젝트로 확장할 아이디어를 모읍니다.",

    /* guide (03) */
    "guide-kicker": "운영 가이드",
    "guide-h2": "당일을 준비하는 체크리스트",
    "guide-item1-title": "집합",
    "guide-item1-body": "행사 당일 집합 장소와 시간은 신청 완료 후 초대되는 오픈 카카오톡 방에서 안내됩니다.",
    "guide-item2-title": "지참",
    "guide-item2-body": "야외 활동을 위한 준비(편한 신발, 선글라스 등)",
    "guide-item3-title": "마을 예절",
    "guide-item3-body": "양동마을은 주민이 실거주하는 세계유산 마을입니다. 사유지와 주거 공간은 조용히 존중해주세요.",

    /* apply */
    "apply-kicker": "참가 신청",
    "apply-h2": "지금 신청하세요.",
    "apply-lead":
      "visionOS, 비전 프로, 공간 콘텐츠에 관심이 있다면 참여할 수 있습니다",

    /* footer */
    "footer-title": "Dive into Spatial Experiences: Yangdong Village",
    "footer-top": "맨 위로",
  },

  en: {
    /* header */
    "nav-context": "Background",
    "nav-program": "Program",
    "nav-apply": "Apply",
    "header-cta": "Apply Now",
    "lang-toggle": "한국어",

    /* hero */
    "hero-h1-line1": "Dive into",
    "hero-h1-line2": "Experiences:",
    "hero-h1-place": "Yangdong Village",
    "hero-lead":
      "A day of capturing the alleyways, eaves, and people of Yangdong Village as spatial content. From learning and strolling to viewing and lightning talks — all connected as one community project.",
    "btn-apply": "Apply Now",
    "btn-flow": "See the Flow",

    /* hero facts */
    "fact-topic-label": "Theme",
    "fact-topic-value": "Explore Spatial Together",
    "fact-place-label": "Location",
    "fact-place-value": "Yangdong Village, Gyeongju",
    "fact-output-label": "Output",
    "fact-output-value": "Spatial Video, Spatial Photo, Panorama, etc",
    "fact-date-label": "Date",
    "fact-date-value": "7.11 Sat",

    /* context */
    "context-kicker": "Project Background",
    "context-h2": "An ancient village as the starting point for new spatial experiences",
    "context-p1":
      "Yangdong Village is a UNESCO World Heritage Site, designated alongside Hahoe Village. The landscape — where mountains, waterways, farmland, pavilions, and historic houses flow together — offers scenes perfectly suited for a community day of seeing and capturing space.",
    "context-p1-strong": "Historic Villages of Korea: Hahoe and Yangdong",
    "context-p2":
      "Korea's Vision Pro ecosystem still lacks enough shared community experiences — spaces to learn together, experiment, and leave something behind. This event goes beyond tutorials: we want everyone to turn what they see into spatial content worth sharing.",
    "heritage-caption-label": "Spatial walk route",
    "heritage-caption-desc": "Collecting scenes along the village slope, alleys, and rooflines.",

    /* flow */
    "flow-kicker": "Day Flow",
    "flow-h2": "Four experiences — no gaps between them",
    "flow-lead":
      "Learn fast, shoot on the move, review together, then share the apps and ideas that could power the next project.",
    "flow-step1-copy":
      "Learn how to capture spatial photos and videos, and take panoramic shots.",
    "flow-step2-copy":
      "You'll receive today's challenge.",
    "flow-step3-copy":
      "View each other's work and discuss what spatial cues created a sense of immersion.",
    "flow-step4-copy":
      "Each person recommends one app they use best. Gather the seeds for the next community project.",

    /* guide */
    "guide-kicker": "Operations Guide",
    "guide-h2": "Day-of checklist",
    "guide-item1-title": "Meetup",
    "guide-item1-body": "The meeting point and time on the day of the event will be announced in the open KakaoTalk group chat you'll be invited to after completing your registration.",
    "guide-item2-title": "What to bring",
    "guide-item2-body": "Prepare for outdoor activities (comfortable shoes, sunglasses, etc.)",
    "guide-item3-title": "Village etiquette",
    "guide-item3-body": "Yangdong is a UNESCO World Heritage village with residents living there. Please respect private land and residential areas quietly.",

    /* apply */
    "apply-kicker": "Apply",
    "apply-h2": "Apply now.",
    "apply-lead":
      "If you're interested in visionOS, Vision Pro, or spatial content, you're welcome to join.",

    /* footer */
    "footer-title": "Dive into Spatial Experiences: Yangdong Village",
    "footer-top": "Back to top",
  },
};

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */

let currentLang = "ko";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;

  const t = translations[lang];

  /* swap all static data-i18n elements */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key in t) {
      /* skip elements that contain child elements — handle them specifically */
      if (el.children.length === 0) {
        el.textContent = t[key];
      }
    }
  });

  /* context-p1 — plain text (strong 제거됨) */
  const p1 = document.querySelector("[data-i18n='context-p1']");
  if (p1) p1.textContent = t["context-p1"];
}

/* ============================================================
   REVEAL OBSERVER
   ============================================================ */

const revealTargets = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.06 },
);
/* 아직 보이지 않는 요소만 관찰 (뷰포트 내 요소는 이미 처리됨) */
revealTargets.forEach((target) => {
  if (!target.classList.contains('is-visible')) {
    revealObserver.observe(target);
  }
});

/* ============================================================
   SCROLL PROGRESS & NAV STATE
   ============================================================ */

const progressBar = document.querySelector(".scroll-progress span");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateScrollState() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

  const current = sections
    .map((section) => ({
      id: section.id,
      distance: Math.abs(section.getBoundingClientRect().top - 120),
    }))
    .sort((a, b) => a.distance - b.distance)[0];

  navLinks.forEach((link) => {
    link.classList.toggle("is-current", link.getAttribute("href") === `#${current?.id}`);
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

/* ============================================================
   HERO PARALLAX
   ============================================================ */

const heroMedia = document.querySelector(".hero-media");
window.addEventListener(
  "pointermove",
  (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    heroMedia?.style.setProperty("--mx", `${x}%`);
    heroMedia?.style.setProperty("--my", `${y}%`);
  },
  { passive: true },
);

/* ============================================================
   FLOW SCROLL OBSERVER
   ============================================================ */

const flowSteps = document.querySelectorAll(".flow-step");
const flowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      flowSteps.forEach((step) => step.classList.remove("is-active"));
      entry.target.classList.add("is-active");
      document.body.dataset.flowAccent = entry.target.dataset.accent;
    });
  },
  { rootMargin: "-35% 0px -45% 0px", threshold: 0.08 },
);
flowSteps.forEach((step) => flowObserver.observe(step));

/* ============================================================
   LANGUAGE TOGGLE BUTTON
   ============================================================ */

const langToggleBtn = document.querySelector("#lang-toggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    setLanguage(currentLang === "ko" ? "en" : "ko");
  });
}

/* ============================================================
   CANVAS PARTICLE FIELD
   ============================================================ */

const canvas = document.querySelector("#spatial-field");
const ctx2d = canvas ? canvas.getContext("2d") : null;
let width = 0;
let height = 0;
let points = [];
let raf = 0;

function resetCanvas() {
  if (!canvas || !ctx2d) return;
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx2d.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: Math.min(80, Math.floor(width / 18)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.5,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    hue: Math.random() > 0.5 ? "120, 214, 244" : "216, 173, 91",
  }));
}

function drawField() {
  if (!ctx2d) return;
  ctx2d.clearRect(0, 0, width, height);
  ctx2d.lineWidth = 1;

  points.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < -20) point.x = width + 20;
    if (point.x > width + 20) point.x = -20;
    if (point.y < -20) point.y = height + 20;
    if (point.y > height + 20) point.y = -20;

    ctx2d.beginPath();
    ctx2d.fillStyle = `rgba(${point.hue}, 0.5)`;
    ctx2d.arc(point.x, point.y, point.r, 0, Math.PI * 2);
    ctx2d.fill();

    for (let next = index + 1; next < points.length; next += 1) {
      const other = points[next];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance > 130) continue;
      ctx2d.beginPath();
      ctx2d.strokeStyle = `rgba(246, 240, 230, ${0.12 * (1 - distance / 130)})`;
      ctx2d.moveTo(point.x, point.y);
      ctx2d.lineTo(other.x, other.y);
      ctx2d.stroke();
    }
  });

  raf = window.requestAnimationFrame(drawField);
}

window.addEventListener("resize", resetCanvas);
resetCanvas();
drawField();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.cancelAnimationFrame(raf);
  } else {
    drawField();
  }
});

/* ============================================================
   INIT
   ============================================================ */

setLanguage("ko");
