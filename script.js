const sixteenBysixteen = document.querySelector(".sixteenBysixteen");
const sixyfourBysixtyfour = document.querySelector(".sixyfourBysixtyfour");
const thirtyTwoBythirtyTwo = document.querySelector(".thirtyTwoBythirtyTwo");
const erase = document.querySelector(".erase");
const paint = document.querySelector(".paint");

let eraser = false;
let clicked = true;

paint.addEventListener("click", () => {
  eraser = false;
});

erase.addEventListener("click", (e) => {
  eraser = true;
  console.log(e.target);
  console.log(eraser);
});
sixteenBysixteen.addEventListener("click", () => {
  if (clicked) {
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
      console.log(container);
      const cell = document.createElement("div");
      cell.className = `square${num}`;
      container.appendChild(cell);

      cell.addEventListener("mouseover", () => {
        // cell.setAttribute("style", "background-color:black"   `${num}`);
        /*
        cell.setAttribute(
          `style`,
          `background-color:${(eraser = true)}?black:white`
        );
        */
        if (eraser) {
          cell.style.backgroundColor = "white";
          //cell.setAttribute("style", "background-color:white");
        } else if (!eraser) {
          //cell.setAttribute("style", "background-color:black");
          cell.style.backgroundColor = "black";
        }
        clicked = false;
      });
    }
  }
}
