window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const video = document.querySelector(".hero-video");
  if (!video) return;

  video.style.transform = `scale(1.08) translateY(${scrolled * 0.15}px)`;
});

window.addEventListener("load", () => {
  document.querySelectorAll(".reveal-text").forEach(el => {
    el.classList.add("show");
  });
});

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
  document.querySelector(".hero-video")?.setAttribute("playsinline", "");
}