console.log("ARTWORKS =", window.ARTWORKS);

const STEP = 4;
const shownCount = {};

/* create card */
function createCard(data) {
  return `
    <div class="art-card ${data.size}" data-img="${data.img}" data-title="${data.title}" data-desc="${data.desc}">
      <img src="${data.img}" alt="${data.title}" loading="lazy">
      <div class="art-info">
        <div class="art-title">${data.title}</div>
      </div>
    </div>
  `;
}

/* initial load */
function loadInitial() {
  if (!window.ARTWORKS) {
    console.error("ARTWORKS not loaded");
    return;
  }

  document.querySelectorAll(".category").forEach(cat => {
    const key = cat.dataset.category;
    const track = cat.querySelector(".gallery-track");

    if (!window.ARTWORKS[key]) {
      console.warn("Category not found:", key);
      return;
    }

    shownCount[key] = STEP;

    const items = window.ARTWORKS[key].slice(0, STEP);
    track.innerHTML = items.map(createCard).join("");
  });
}

/* modal */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

/* =========================
   OPEN MODAL
========================= */
document.addEventListener("click", e => {
  const card = e.target.closest(".art-card");
  if (!card) return;

  const img = card.dataset.img;
  const title = card.dataset.title;
  const desc = card.dataset.desc;

  modal.classList.add("show");
  modalImg.src = img;

  // inject info
  let info = modal.querySelector(".modal-info");
  if (!info) {
    info = document.createElement("div");
    info.className = "modal-info";
    modal.appendChild(info);
  }

  info.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
  `;
});

/* =========================
   CLOSE MODAL
========================= */
modal.addEventListener("click", () => {
  modal.classList.remove("show");
  modalImg.src = "";
});