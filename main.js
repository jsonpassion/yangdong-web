
/* JS 로드 확인 — reveal 애니메이션 활성화 */
document.documentElement.classList.add('js');

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
      "양동마을의 골목, 처마, 사람을 Vision Pro로 기록하는 하루. 배움에서 산책, 감상, 라이트닝 토크까지 하나의 커뮤니티 프로젝트로 이어집니다.",
    "btn-apply": "신청하기",
    "btn-flow": "흐름 보기",

    /* hero facts */
    "fact-topic-label": "주제",
    "fact-topic-value": "Explore Spatial Together",
    "fact-place-label": "장소",
    "fact-place-value": "경주 양동마을",
    "fact-output-label": "결과물",
    "fact-output-value": "Shared album 또는 간단한 앱",
    "fact-date-label": "날짜",
    "fact-date-value": "미정",

    /* context */
    "context-kicker": "계획 배경",
    "context-h2": "오래된 마을을 새 공간 경험의 출발점으로",
    "context-p1":
      "양동마을은 하회마을과 함께 UNESCO 세계유산 한국의 역사마을: 하회와 양동으로 등재된 역사마을입니다. 산세, 물길, 농경지, 정자, 고택이 이어지는 풍경은 공간을 보고 기록하는 커뮤니티 데이에 적합한 장면을 제공합니다.",
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
      "공간 사진과 비디오 촬영의 기본을 빠르게 맞춥니다. 피사체와의 거리, 움직임, 사람을 담는 방식, 깊이감을 짚고 바로 현장으로 나갑니다.",
    "flow-step2-copy":
      "오늘의 챌린지는 "가장 양동마을다운 순간". 골목의 깊이, 기와의 반복, 나무와 담장의 거리감을 각자의 시선으로 기록합니다.",
    "flow-step3-copy":
      "서로의 작품을 감상하며 어떤 공간 단서가 몰입감을 만들었는지 이야기합니다. 결과물은 공유 앨범 또는 간단한 앱의 형태로 남깁니다.",
    "flow-step4-copy":
      "가장 잘 활용하는 앱 하나씩을 소개하고, 다음 커뮤니티 프로젝트로 확장할 아이디어를 모읍니다.",

    /* program */
    "program-kicker": "프로그램",
    "program-h2": "배우고, 걷고, 남기는 프로그램",
    "program-lead": "각 활동은 다음 활동의 재료가 되도록 설계했습니다.",
    "prog-shoot-title": "촬영 감각 맞추기",
    "prog-shoot-sub": "Spatial photo & video tips",
    "prog-walk-title": "마을 산책 챌린지",
    "prog-walk-sub": "Capture the Yangdong moment",
    "prog-share-title": "공유 갤러리",
    "prog-share-sub": "Review and collect scenes",
    "prog-talk-title": "앱 라이트닝 토크",
    "prog-talk-sub": "Three-minute recommendations",

    /* challenge */
    "challenge-kicker": "현장 챌린지",
    "challenge-h2": ""가장 양동마을다운 순간"을 고르는 기준",
    "challenge-lead":
      "좋은 공간 콘텐츠는 멋진 피사체 하나보다 장면 사이의 관계를 잘 드러냅니다. 참가자는 아래 감각을 조합해 자신의 산책 미션을 정합니다.",
    "mood-depth": "깊이감",
    "mood-heritage": "마을성",
    "mood-motion": "사람의 움직임",
    "mission-label": "추천 미션",

    /* gallery */
    "gallery-kicker": "결과물",
    "gallery-h2": "행사 이후에도 남는 하나의 커뮤니티 프로젝트",
    "gallery-copy-album":
      "첫 결과물은 공유 앨범으로 시작하고, 다음 회차에는 간단한 웹앱 또는 공간 콘텐츠 아카이브로 확장할 수 있습니다.",
    "tab-album": "Shared album",
    "tab-app": "Mini app",
    "tab-archive": "Spatial archive",

    /* apply */
    "apply-kicker": "참가 신청",
    "apply-h2": "지금 신청하세요.",
    "apply-lead":
      "VisionOS에 관심이 있고 기본 사용법을 알고 있다면 참여할 수 있습니다. 촬영 경험보다 공간을 관찰하고 공유하려는 태도를 우선합니다.",

    /* assets */
    "assets-kicker": "운영 가이드",
    "assets-h2": "실제 사진과 영상으로 교체할 자리",
    "assets-lead":
      "현재는 플레이스홀더로 구성했습니다. 아래 이름으로 파일을 추가하면 페이지 맥락을 유지한 채 실제 행사 톤으로 바꿀 수 있습니다.",

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
      "One day in a UNESCO heritage village — shooting spatial photos and video with Vision Pro. Learn, walk, share, and talk. One community project, start to finish.",
    "btn-apply": "Apply Now",
    "btn-flow": "See the Flow",

    /* hero facts */
    "fact-topic-label": "Theme",
    "fact-topic-value": "Explore Spatial Together",
    "fact-place-label": "Location",
    "fact-place-value": "Yangdong Village, Gyeongju",
    "fact-output-label": "Output",
    "fact-output-value": "Shared album or mini app",
    "fact-date-label": "Date",
    "fact-date-value": "TBD",

    /* context */
    "context-kicker": "Background",
    "context-h2": "An ancient village as the starting point for new spatial experiences",
    "context-p1":
      "Yangdong Village is a UNESCO World Heritage Site — listed alongside Hahoe as Historic Villages of Korea. Rolling hills, waterways, pavilions, and traditional houses make it a perfect setting for a community day built around seeing and capturing space.",
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
      "Quick alignment on spatial photo and video fundamentals. Distance, motion, layering, depth — get the basics synced before heading out.",
    "flow-step2-copy":
      "Today's challenge: the most Yangdong moment. Alley depth, repeating roof tiles, distance through gates — find it through your own lens.",
    "flow-step3-copy":
      "Review each other's work and talk through what spatial cues created immersion. Output lives as a shared album or small app.",
    "flow-step4-copy":
      "Each person recommends one app they use best. Gather the seeds for the next community project.",

    /* program */
    "program-kicker": "Program",
    "program-h2": "Learn, walk, and leave something behind",
    "program-lead": "Each activity feeds directly into the next.",
    "prog-shoot-title": "Shoot Calibration",
    "prog-shoot-sub": "Spatial photo & video tips",
    "prog-walk-title": "Village Walk Challenge",
    "prog-walk-sub": "Capture the Yangdong moment",
    "prog-share-title": "Shared Gallery",
    "prog-share-sub": "Review and collect scenes",
    "prog-talk-title": "App Lightning Talks",
    "prog-talk-sub": "Three-minute recommendations",

    /* challenge */
    "challenge-kicker": "Field Challenge",
    "challenge-h2": "How to find the most Yangdong moment",
    "challenge-lead":
      "Great spatial content reveals relationships between elements — not just a beautiful subject. Mix the sliders below to define your personal walk mission.",
    "mood-depth": "Depth",
    "mood-heritage": "Village feel",
    "mood-motion": "Human movement",
    "mission-label": "Recommended mission",

    /* gallery */
    "gallery-kicker": "Output",
    "gallery-h2": "One community project that outlasts the day",
    "gallery-copy-album":
      "Start with a shared album, then expand to a small interactive web app or spatial content archive in a future session.",
    "tab-album": "Shared album",
    "tab-app": "Mini app",
    "tab-archive": "Spatial archive",

    /* apply */
    "apply-kicker": "Apply",
    "apply-h2": "Apply now.",
    "apply-lead":
      "If you own a Vision Pro and know the basics, you're in. We care more about curiosity and willingness to share than shooting experience.",

    /* assets */
    "assets-kicker": "Operations Guide",
    "assets-h2": "Placeholder slots for real photos and video",
    "assets-lead":
      "Currently built with placeholders. Drop files at the paths below and the page updates to match actual event tone — no code changes needed.",

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

  /* context-p1 has a child <strong> — use innerHTML for reliable switching */
  const p1 = document.querySelector("[data-i18n='context-p1']");
  if (p1) {
    if (lang === "ko") {
      p1.innerHTML =
        "양동마을은 하회마을과 함께 UNESCO 세계유산\u00a0<strong>한국의 역사마을: 하회와 양동</strong>으로 등재된 역사마을입니다. 산세, 물길, 농경지, 정자, 고택이 이어지는 풍경은 공간을 보고 기록하는 커뮤니티 데이에 적합한 장면을 제공합니다.";
    } else {
      p1.textContent = t["context-p1"];
    }
  }

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
  { threshold: 0.12 },
);
revealTargets.forEach((target) => revealObserver.observe(target));

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
