function gridtwoBytwo() {
  for (let i = 0; i < 64; i++) {
    for (let j = 0; j < 64; j++) {
      const container = document.querySelector(".container");
      const cell = document.createElement("div");
      cell.className = "square";
      container.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color:black");
      });
    }
  }
}
gridtwoBytwo();
