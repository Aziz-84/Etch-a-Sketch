const sixteenBysixteen = document.querySelector(".sixteenBysixteen");
const sixyfourBysixtyfour = document.querySelector(".sixyfourBysixtyfour");
const thirtyTwoBythirtyTwo = document.querySelector(".thirtyTwoBythirtyTwo");

sixteenBysixteen.addEventListener("click", () => {
  grid(16);
});

thirtyTwoBythirtyTwo.addEventListener("click", () => {
  grid(32);
});

sixyfourBysixtyfour.addEventListener("click", () => {
  grid(64);
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
        cell.setAttribute("style", "background-color:black");
      });
    }
  }
}
