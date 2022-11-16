const sixteenBysixteen = document.querySelector(".sixteenBysixteen");
const sixyfourBysixtyfour = document.querySelector(".sixyfourBysixtyfour");
const thirtyTwoBythirtyTwo = document.querySelector(".thirtyTwoBythirtyTwo");
const erase = document.querySelector(".erase");
const paint = document.querySelector(".paint");
const clear = document.querySelector(".clear");
let eraser = false;
let clicked = true;
let cleared = false;

paint.addEventListener("click", () => {
  eraser = false;
});

erase.addEventListener("click", () => {
  eraser = true;
});
sixteenBysixteen.addEventListener("click", () => {
  if (clicked || cleared) {
    grid(16);
  }
});

thirtyTwoBythirtyTwo.addEventListener("click", () => {
  if (clicked) {
    grid(32);
  }
});

sixyfourBysixtyfour.addEventListener("click", () => {
  if (clicked) {
    grid(64);
  }
});

function grid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const container = document.querySelector(`.container${num}`);
      const cell = document.createElement("div");
      cell.className = `square${num}`;
      container.appendChild(cell);

      clear.addEventListener("click", () => {
        cell.classList.remove(`square${num}`);
        cleared = true;
      });

      cell.addEventListener("mouseover", () => {
        if (eraser) {
          cell.style.backgroundColor = "white";
        } else if (!eraser) {
          cell.style.backgroundColor = "black";
        }
        clicked = false;
      });
    }
  }
}
