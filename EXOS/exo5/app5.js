const container = document.querySelector("#container");
const btn = document.querySelector(".mybtn");
const slide = document.querySelector(".slide");
const tableSlide = ["move1", "move2", "move3"];
let index = 0;

if (!slide.classList.contains("index")) {
  slide.setAttribute("index", "0");
}
if (btn && container) {
  btn.addEventListener("click", (element) => {
    container.classList.remove("invisible");
  });
}

document.body.addEventListener("click", (element) => {
  if (element.target == document.body) {
    if (!container.classList.contains("invisible")) {
      if (
        parseInt(element.pageX) >
        parseInt(getComputedStyle(container).left + 300)
      ) {
        index = parseInt(slide.getAttribute("index"));
        if (index < 1) slide.setAttribute("index", `${index + 1}`);
        slide.classList.add(tableSlide[index]);
      }
      if (
        parseInt(element.pageX) < parseInt(getComputedStyle(container).left)
      ) {
        index = parseInt(slide.getAttribute("index"));
        if (index > -1) {
          slide.setAttribute("index", `${index - 1}`);
          slide.classList.remove(tableSlide[index]);
        }
      }

      {
        // DEBUG
        console.log(move);
        console.log(getComputedStyle(slide).left);
        console.log(`position x de la souris ${element.pageX}`);
      }
    }
  }
});
