// CONFIGURAÇÃO: substitua pelos dados oficiais de Sidney.
const SITE_CONFIG = {
  whatsappNumber: "558388719979", // Número informado para Sidney
  instagramUrl: ""    // Ex.: "https://www.instagram.com/usuario/"
};

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuToggle && nav) menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
if (nav && menuToggle) nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}));

const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink && SITE_CONFIG.whatsappNumber) {
  const message = encodeURIComponent("Olá, Sidney! Gostaria de conversar sobre um filme de casamento ou projeto audiovisual.");
  whatsappLink.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
} else if (whatsappLink) {
  whatsappLink.href = "https://wa.me/";
  whatsappLink.addEventListener("click", event => {
    event.preventDefault();
    alert("Para ativar o WhatsApp, informe o número oficial de Sidney no arquivo js/script.js.");
  });
}
const instagramLink = document.getElementById("instagram-link");
if (instagramLink && SITE_CONFIG.instagramUrl) instagramLink.href = SITE_CONFIG.instagramUrl;
else if (instagramLink) instagramLink.addEventListener("click", event => {
  event.preventDefault();
  alert("Adicione o perfil oficial do Instagram no arquivo js/script.js.");
});

const modal = document.getElementById("video-modal");
const modalClose = document.getElementById("modal-close");
const modalMessage = document.getElementById("modal-message");
const videoFrame = document.getElementById("video-frame");
const player = document.getElementById("youtube-player");
let lastFocusedElement = null;

function openVideo(card) {
  lastFocusedElement = card;
  const videoId = card.dataset.video;
  const instagramReel = card.dataset.instagramReel;
  modal.setAttribute("aria-label", card.dataset.title || "Filme");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (instagramReel) {
    modalMessage.hidden = true;
    videoFrame.hidden = false;
    videoFrame.classList.add("instagram-frame");
    player.title = "Reels do Instagram";
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.src = `${instagramReel.replace(/\/$/, "")}/embed`;
  } else if (!videoId || videoId.startsWith("SUBSTITUA_")) {
    videoFrame.classList.remove("instagram-frame");
    modalMessage.hidden = false;
    videoFrame.hidden = true;
    player.src = "";
  } else {
    videoFrame.classList.remove("instagram-frame");
    player.title = card.dataset.title || "Filme de Sidney Felinto";
    modalMessage.hidden = true;
    videoFrame.hidden = false;
    const playerOrigin = window.location.origin;
    player.referrerPolicy = "origin";
    player.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&playsinline=1&origin=${encodeURIComponent(playerOrigin)}`;
  }
  modalClose.focus();
}
function closeVideo() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  player.src = "";
  window.setTimeout(() => { modalMessage.hidden = true; videoFrame.hidden = true; }, 250);
  if (lastFocusedElement) lastFocusedElement.focus();
}
if (modal && modalClose && modalMessage && videoFrame && player) {
  document.querySelectorAll(".film-card").forEach(card => card.addEventListener("click", () => {
    openVideo(card);
  }));
  modalClose.addEventListener("click", closeVideo);
  modal.addEventListener("click", event => { if (event.target === modal) closeVideo(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("is-open")) closeVideo(); });
}
