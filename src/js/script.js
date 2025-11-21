// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel)
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -343, behavior: "smooth" });
  });

if (carousel)
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +343, behavior: "smooth" });
  });
