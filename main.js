const APPLICATION_ENDPOINT = "";

const programData = {
  shoot: {
    label: "Spatial photo & video tips",
    heading: "공간감은 거리와 움직임에서 시작됩니다.",
    copy:
      "촬영 전에 피사체와의 거리, 사람의 움직임, 앞뒤 레이어를 확인합니다. 짧은 체크인으로 참가자 간 기본 감각을 맞춥니다.",
    image: "public/assets/vision-pro-workshop-placeholder.svg",
    alt: "Vision Pro 촬영 워크숍 장면 플레이스홀더",
  },
  walk: {
    label: "Capture the Yangdong moment",
    heading: "양동마을다운 순간을 각자의 시선으로 찾습니다.",
    copy:
      "경사와 골목, 기와의 반복, 담장 너머 풍경을 따라 걸으며 오늘의 챌린지 장면을 수집합니다.",
    image: "public/assets/spatial-walk-placeholder.svg",
    alt: "양동마을 공간 산책 장면 플레이스홀더",
  },
  share: {
    label: "Review and collect scenes",
    heading: "서로의 장면을 보며 몰입의 단서를 언어로 바꿉니다.",
    copy:
      "결과물을 함께 보며 거리, 깊이, 움직임, 사람의 위치가 어떤 공간감을 만들었는지 이야기합니다.",
    image: "public/assets/shared-gallery-placeholder.svg",
    alt: "공유 갤러리 결과물 플레이스홀더",
  },
  talk: {
    label: "Three-minute recommendations",
    heading: "다음 실험을 만들 앱과 아이디어를 공유합니다.",
    copy:
      "참가자마다 가장 잘 활용하는 앱 하나를 소개하고 다음 커뮤니티 프로젝트의 씨앗을 모읍니다.",
    image: "public/assets/lightning-talks-placeholder.svg",
    alt: "라이트닝 토크 장면 플레이스홀더",
  },
};

const galleryData = {
  album: {
    copy:
      "첫 결과물은 공유 앨범으로 시작하고, 다음 회차에는 간단한 웹앱 또는 공간 콘텐츠 아카이브로 확장할 수 있습니다.",
    image: "public/assets/shared-gallery-placeholder.svg",
    alt: "공유 앨범 플레이스홀더",
  },
  app: {
    copy:
      "참가자가 고른 장면, 촬영 팁, 앱 추천을 모아 작은 인터랙티브 웹앱으로 남길 수 있습니다.",
    image: "public/assets/mini-app-placeholder.svg",
    alt: "미니 앱 결과물 플레이스홀더",
  },
  archive: {
    copy:
      "장소별 장면, 촬영 메모, 회차별 챌린지를 연결하면 VisionOS 커뮤니티의 지속 가능한 아카이브가 됩니다.",
    image: "public/assets/spatial-archive-placeholder.svg",
    alt: "스페이셜 아카이브 플레이스홀더",
  },
};

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
  { threshold: 0.16 },
);
revealTargets.forEach((target) => revealObserver.observe(target));

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
    programLabel.textContent = detail.label;
    programHeading.textContent = detail.heading;
    programCopy.textContent = detail.copy;
    programImage.src = detail.image;
    programImage.alt = detail.alt;
  });
});

const moodInputs = document.querySelectorAll("[data-mood]");
const missionText = document.querySelector("#mission-text");

function updateMission() {
  const values = [...moodInputs].reduce((result, input) => {
    result[input.dataset.mood] = Number(input.value);
    return result;
  }, {});

  if (values.depth >= 4 && values.motion >= 4) {
    missionText.textContent = "사람이 골목을 통과하는 순간, 앞뒤 레이어가 겹치는 위치에서 촬영해보세요.";
  } else if (values.heritage >= 5 && values.depth >= 4) {
    missionText.textContent = "기와, 담장, 산세가 한 프레임 안에서 단계적으로 깊어지는 장면을 찾아보세요.";
  } else if (values.motion <= 2) {
    missionText.textContent = "정적인 고택과 마당의 여백을 중심에 두고 천천히 시선을 이동해보세요.";
  } else {
    missionText.textContent = "골목의 깊이와 처마선 사이로 사람이 지나가는 순간을 담아보세요.";
  }
}

moodInputs.forEach((input) => input.addEventListener("input", updateMission));
updateMission();

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
    galleryCopy.textContent = detail.copy;
    galleryImage.src = detail.image;
    galleryImage.alt = detail.alt;
  });
});

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

const form = document.querySelector("#application-form");
const formStatus = document.querySelector("#form-status");

function setInvalidState(formElement) {
  formElement.querySelectorAll(".is-invalid").forEach((item) => item.classList.remove("is-invalid"));
  const invalidControls = formElement.querySelectorAll(":invalid");
  invalidControls.forEach((control) => {
    const row = control.closest(".form-row, .consent");
    row?.classList.add("is-invalid");
  });
  return invalidControls.length === 0;
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!setInvalidState(form)) {
    formStatus.textContent = "필수 항목을 확인해주세요.";
    return;
  }

  const payload = Object.fromEntries(new FormData(form).entries());
  payload.createdAt = new Date().toISOString();

  try {
    if (APPLICATION_ENDPOINT) {
      const response = await fetch(APPLICATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      formStatus.textContent = "신청이 접수되었습니다.";
    } else {
      const saved = JSON.parse(localStorage.getItem("yangdong-applications") || "[]");
      saved.push(payload);
      localStorage.setItem("yangdong-applications", JSON.stringify(saved));
      formStatus.textContent = "신청서가 이 브라우저에 임시 저장되었습니다.";
    }
    form.reset();
  } catch {
    formStatus.textContent = "제출 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
});

const canvas = document.querySelector("#spatial-field");
const context = canvas.getContext("2d");
let width = 0;
let height = 0;
let points = [];
let raf = 0;

function resetCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
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
  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;

  points.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < -20) point.x = width + 20;
    if (point.x > width + 20) point.x = -20;
    if (point.y < -20) point.y = height + 20;
    if (point.y > height + 20) point.y = -20;

    context.beginPath();
    context.fillStyle = `rgba(${point.hue}, 0.5)`;
    context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
    context.fill();

    for (let next = index + 1; next < points.length; next += 1) {
      const other = points[next];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance > 130) continue;
      context.beginPath();
      context.strokeStyle = `rgba(246, 240, 230, ${0.12 * (1 - distance / 130)})`;
      context.moveTo(point.x, point.y);
      context.lineTo(other.x, other.y);
      context.stroke();
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
