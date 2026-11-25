const dialog = document.querySelector("#lightbox");
const dialogImg = dialog.querySelector("img");
const dialogCap = dialog.querySelector("figcaption");

function openLightbox(src, alt) {
  dialogImg.src = src;
  dialogImg.alt = alt || "";
  dialogCap.textContent = alt || "";
  dialog.showModal();
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    openLightbox(img.currentSrc || img.src, img.alt);
  });
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll("[data-switcher]").forEach((switcher) => {
  const stage = switcher.querySelector(".stage img");
  const thumbs = [...switcher.querySelectorAll(".thumb")];
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const img = thumb.querySelector("img");
      stage.src = img.currentSrc || img.src;
      stage.alt = img.alt;
      thumbs.forEach((item) => item.setAttribute("aria-pressed", "false"));
      thumb.setAttribute("aria-pressed", "true");
    });
  });
});
