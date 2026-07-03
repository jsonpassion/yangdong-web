
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
    "nav-context": "맥락",
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
    "context-kicker": "계획 배경",
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
    "nav-context": "Context",
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
    "context-kicker": "Background",
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
   BILINGUAL PROGRAM DATA
   ============================================================ */

const programData = {
  shoot: {
    ko: {
      label: "Spatial photo & video tips",
      heading: "공간감은 거리와 움직임에서 시작됩니다.",
      copy: "촬영 전에 피사체와의 거리, 사람의 움직임, 앞뒤 레이어를 확인합니다. 짧은 체크인으로 참가자 간 기본 감각을 맞춥니다.",
      alt: "Vision Pro 촬영 워크숍 장면 플레이스홀더",
    },
    en: {
      label: "Spatial photo & video tips",
      heading: "Depth starts with distance and motion.",
      copy: "Before shooting: check subject distance, human movement, and front-to-back layering. A short sync session aligns everyone before heading out.",
      alt: "Vision Pro workshop scene placeholder",
    },
    image: "public/assets/vision-pro-workshop-placeholder.svg",
  },
  walk: {
    ko: {
      label: "Capture the Yangdong moment",
      heading: "양동마을다운 순간을 각자의 시선으로 찾습니다.",
      copy: "경사와 골목, 기와의 반복, 담장 너머 풍경을 따라 걸으며 오늘의 챌린지 장면을 수집합니다.",
      alt: "양동마을 공간 산책 장면 플레이스홀더",
    },
    en: {
      label: "Capture the Yangdong moment",
      heading: "Find your version of the most Yangdong moment.",
      copy: "Walk the slope and alleys. Follow repeating roof tiles, look past walls. Collect scenes that answer today's challenge through your own eye.",
      alt: "Spatial walk in Yangdong Village placeholder",
    },
    image: "public/assets/spatial-walk-placeholder.svg",
  },
  share: {
    ko: {
      label: "Review and collect scenes",
      heading: "서로의 장면을 보며 몰입의 단서를 언어로 바꿉니다.",
      copy: "결과물을 함께 보며 거리, 깊이, 움직임, 사람의 위치가 어떤 공간감을 만들었는지 이야기합니다.",
      alt: "공유 갤러리 결과물 플레이스홀더",
    },
    en: {
      label: "Review and collect scenes",
      heading: "Put immersion into words by watching each other's work.",
      copy: "Watch the shots together and talk through how distance, depth, movement, and framing combined to create spatial feel.",
      alt: "Shared gallery output placeholder",
    },
    image: "public/assets/shared-gallery-placeholder.svg",
  },
  talk: {
    ko: {
      label: "Three-minute recommendations",
      heading: "다음 실험을 만들 앱과 아이디어를 공유합니다.",
      copy: "참가자마다 가장 잘 활용하는 앱 하나를 소개하고 다음 커뮤니티 프로젝트의 씨앗을 모읍니다.",
      alt: "라이트닝 토크 장면 플레이스홀더",
    },
    en: {
      label: "Three-minute recommendations",
      heading: "Share the apps and ideas that fuel the next experiment.",
      copy: "One app per person — the one you use best. Collect the seeds for the next community project before leaving.",
      alt: "Lightning talks scene placeholder",
    },
    image: "public/assets/lightning-talks-placeholder.svg",
  },
};

/* ============================================================
   BILINGUAL GALLERY DATA
   ============================================================ */

const galleryData = {
  album: {
    ko: {
      copy: "첫 결과물은 공유 앨범으로 시작하고, 다음 회차에는 간단한 웹앱 또는 공간 콘텐츠 아카이브로 확장할 수 있습니다.",
      alt: "공유 앨범 플레이스홀더",
    },
    en: {
      copy: "Start with a shared album. Next session can grow into a small interactive web app or spatial archive.",
      alt: "Shared album placeholder",
    },
    image: "public/assets/shared-gallery-placeholder.svg",
  },
  app: {
    ko: {
      copy: "참가자가 고른 장면, 촬영 팁, 앱 추천을 모아 작은 인터랙티브 웹앱으로 남길 수 있습니다.",
      alt: "미니 앱 결과물 플레이스홀더",
    },
    en: {
      copy: "Gather curated scenes, shooting tips, and app picks into a small interactive web app that lives on past the day.",
      alt: "Mini app output placeholder",
    },
    image: "public/assets/mini-app-placeholder.svg",
  },
  archive: {
    ko: {
      copy: "장소별 장면, 촬영 메모, 회차별 챌린지를 연결하면 VisionOS 커뮤니티의 지속 가능한 아카이브가 됩니다.",
      alt: "스페이셜 아카이브 플레이스홀더",
    },
    en: {
      copy: "Link scenes by location, shooting notes, and session challenges to build a living archive for the VisionOS community.",
      alt: "Spatial archive placeholder",
    },
    image: "public/assets/spatial-archive-placeholder.svg",
  },
};

/* ============================================================
   BILINGUAL MISSION TEXT
   ============================================================ */

const missionTexts = {
  ko: {
    depthAndMotion: "사람이 골목을 통과하는 순간, 앞뒤 레이어가 겹치는 위치에서 촬영해보세요.",
    heritageAndDepth: "기와, 담장, 산세가 한 프레임 안에서 단계적으로 깊어지는 장면을 찾아보세요.",
    lowMotion: "정적인 고택과 마당의 여백을 중심에 두고 천천히 시선을 이동해보세요.",
    default: "골목의 깊이와 처마선 사이로 사람이 지나가는 순간을 담아보세요.",
  },
  en: {
    depthAndMotion: "Shoot the moment a person moves through the alley where the front and back layers overlap.",
    heritageAndDepth: "Find a frame where roof tiles, walls, and hillside deepen in clear stages.",
    lowMotion: "Center on the stillness of a traditional house and its courtyard — let your gaze move slowly.",
    default: "Capture someone passing between the alley depth and the roofline.",
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

  /* update active program card detail */
  const selectedCard = document.querySelector(".program-card.is-selected");
  if (selectedCard && programLabel) {
    const key = selectedCard.dataset.program;
    const detail = programData[key];
    if (detail) {
      const d = detail[lang];
      programLabel.textContent = d.label;
      programHeading.textContent = d.heading;
      programCopy.textContent = d.copy;
      programImage.alt = d.alt;
    }
  }

  /* update active gallery tab copy */
  const activeTab = document.querySelector(".gallery-tabs button.is-active");
  if (activeTab && galleryCopy) {
    const key = activeTab.dataset.gallery;
    const detail = galleryData[key];
    if (detail) {
      galleryCopy.textContent = detail[lang].copy;
      galleryImage.alt = detail[lang].alt;
    }
  }

  /* update mission text */
  updateMission();
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
   PROGRAM CARDS
   ============================================================ */

const programButtons = document.querySelectorAll(".program-card");
const programLabel = document.querySelector("#program-label");
const programHeading = document.querySelector("#program-heading");
const programCopy = document.querySelector("#program-copy");
const programImage = document.querySelector("#program-image");

programButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const detail = programData[button.dataset.program];
    if (!detail) return;

    programButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");

    const d = detail[currentLang];
    programLabel.textContent = d.label;
    programHeading.textContent = d.heading;
    programCopy.textContent = d.copy;
    programImage.src = detail.image;
    programImage.alt = d.alt;
  });
});

/* ============================================================
   CHALLENGE SLIDERS & MISSION TEXT
   ============================================================ */

const moodInputs = document.querySelectorAll("[data-mood]");
const missionText = document.querySelector("#mission-text");

function updateMission() {
  const values = [...moodInputs].reduce((result, input) => {
    result[input.dataset.mood] = Number(input.value);
    return result;
  }, {});

  const mt = missionTexts[currentLang];
  if (values.depth >= 4 && values.motion >= 4) {
    missionText.textContent = mt.depthAndMotion;
  } else if (values.heritage >= 5 && values.depth >= 4) {
    missionText.textContent = mt.heritageAndDepth;
  } else if (values.motion <= 2) {
    missionText.textContent = mt.lowMotion;
  } else {
    missionText.textContent = mt.default;
  }
}

moodInputs.forEach((input) => input.addEventListener("input", updateMission));

/* ============================================================
   GALLERY TABS
   ============================================================ */

const galleryTabs = document.querySelectorAll(".gallery-tabs button");
const galleryCopy = document.querySelector("#gallery-copy");
const galleryImage = document.querySelector("#gallery-image");

galleryTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const detail = galleryData[button.dataset.gallery];
    if (!detail) return;

    galleryTabs.forEach((tab) => {
      tab.classList.remove("is-active");
      tab.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    galleryCopy.textContent = detail[currentLang].copy;
    galleryImage.src = detail.image;
    galleryImage.alt = detail[currentLang].alt;
  });
});

/* ============================================================
   ASSET COPY BUTTONS
   ============================================================ */

const assetButtons = document.querySelectorAll("[data-copy]");
assetButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      button.classList.add("copied");
      button.textContent = "copied";
      window.setTimeout(() => {
        button.classList.remove("copied");
        button.textContent = value.split("/").at(-1);
      }, 1200);
    } catch {
      button.textContent = value;
    }
  });
});

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
