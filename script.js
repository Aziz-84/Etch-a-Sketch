const sixteenBysixteen = document.querySelector(".sixteenBysixteen");
const sixyfourBysixtyfour = document.querySelector(".sixyfourBysixtyfour");
const thirtyTwoBythirtyTwo = document.querySelector(".thirtyTwoBythirtyTwo");
const erase = document.querySelector(".erase");
const paint = document.querySelector(".paint");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");
let eraser = false;
let clicked = true;
let cleared = false;
let randomBtn = false;

rainbow.addEventListener("click", () => {
  randomBtn = true;
});
paint.addEventListener("click", () => {
  randomBtn = false;
  eraser = false;
});

erase.addEventListener("click", () => {
  randomBtn = false;
  eraser = true;
});
sixteenBysixteen.addEventListener("click", () => {
  randomBtn = false;
  if (clicked || cleared) {
    grid(16);
  }
});

thirtyTwoBythirtyTwo.addEventListener("click", () => {
  randomBtn = false;
  if (clicked || cleared) {
    grid(32);
  }
});

sixyfourBysixtyfour.addEventListener("click", () => {
  randomBtn = false;
  if (clicked || cleared) {
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
        } else if (randomBtn) {
        }
        clicked = false;
      });

      cell.addEventListener("mouseover", changeColor);
      function changeColor() {
        if (randomBtn) {
          let randomCol = Math.floor(Math.random() * 16777215).toString(16);
          console.log("random");
          randomBtn = true;
          cell.style.backgroundColor = `#${randomCol}`;
        }
      }
    }
  }
}
