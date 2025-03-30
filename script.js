document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".emoji-container img").forEach((emoji) => {
    emoji.addEventListener("click", () => emoji.classList.toggle("clicked"));
  });
});
