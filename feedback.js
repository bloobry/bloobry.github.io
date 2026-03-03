document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-feedback");
  const buttonsHtml = Array.from(items, () => {
    return `<span class='carousel-btn'></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel-nav">
            ${buttonsHtml.join("")}
        </div>
    `
  );

  const buttons = carousel.querySelectorAll(".carousel-btn");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      //unselect items
      items.forEach((item) =>
        item.classList.remove("carousel-feedback-selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel-btn-selected")
      );

      items[i].classList.add("carousel-feedback-selected");
      button.classList.add("carousel-btn-selected");
    });
  });

  //Show on page load 
  items[0].classList.add("carousel-feedback-selected");
  button[0].classList.add("carousel-btn-selected");
});
