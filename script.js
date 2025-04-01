document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".emoji-container img").forEach((emoji) => {
    emoji.addEventListener("click", () => emoji.classList.toggle("clicked"));
  });

  const carousel = document.querySelector(".informations_block");
  const dots = document.querySelectorAll(".dot");
  const articles = document.querySelectorAll(".information_block");

  function getSlideWidth() {
    const slide = articles[0];
    const style = window.getComputedStyle(slide);
    return slide.offsetWidth + parseInt(style.marginRight);
  }

  function updateDots() {
    const scrollPosition = carousel.scrollLeft;
    const slideWidth = getSlideWidth();
    const activeIndex = Math.round(scrollPosition / slideWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
    });
  }

  carousel.addEventListener("scroll", updateDots);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const slideWidth = getSlideWidth();
      carousel.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("resize", () => {
    carousel.scrollLeft = 0;
    updateDots();
  });
});
