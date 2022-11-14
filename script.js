function grid16() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const container = document.querySelector(".container16");
      const cell = document.createElement("div");
      cell.className = "square";
      container.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color:black");
      });
    }
  }
}

function grid32() {
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
      const container32 = document.querySelector(".container32");
      const cell = document.createElement("div");
      cell.className = "square32";
      container32.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color:black");
      });
    }
  }
}

grid32();
