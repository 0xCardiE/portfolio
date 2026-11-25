const dialog = document.querySelector("#lightbox");
const dialogImg = dialog.querySelector("img");

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    dialogImg.src = img.currentSrc || img.src;
    dialogImg.alt = img.alt || "";
    dialog.showModal();
  });
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll("[data-switcher]").forEach((switcher) => {
  const img = switcher.querySelector(".stage img");
  const cap = switcher.querySelector("figcaption");
  const original = { src: img.getAttribute("src"), alt: img.alt, cap: cap.textContent };
  const thumbs = [...switcher.querySelectorAll(".thumb")];
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      img.src = thumb.dataset.src || original.src;
      img.alt = thumb.dataset.alt || original.alt;
      cap.textContent = thumb.dataset.cap || original.cap;
      thumbs.forEach((item) => item.setAttribute("aria-pressed", "false"));
      thumb.setAttribute("aria-pressed", "true");
    });
  });
});

const links = [...document.querySelectorAll(".index a")];

function markCurrent() {
  const id = (location.hash || "#beeport").slice(1);
  links.forEach((link) => {
    if (link.getAttribute("href") === "#" + id) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("hashchange", markCurrent);
markCurrent();
