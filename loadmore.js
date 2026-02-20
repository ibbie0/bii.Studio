/* load more */
document.addEventListener("click", e => {
  const btn = e.target.closest(".load-more");
  if (!btn) return;

  const trackId = btn.dataset.target;
  const track = document.getElementById(trackId);
  const category = trackId.replace("-track", "");

  // reset kategori lain
  document.querySelectorAll(".gallery-track").forEach(t => {
    if (t !== track) t.scrollTo({ left: 0, behavior: "smooth" });
  });

  const current = shownCount[category] || 0;
  const next = window.ARTWORKS[category].slice(current, current + STEP);

  if (next.length) {
    track.insertAdjacentHTML(
      "beforeend",
      next.map(createCard).join("")
    );
    shownCount[category] = current + STEP;
  }

  track.scrollBy({ left: 600, behavior: "smooth" });
});