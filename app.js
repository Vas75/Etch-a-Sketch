const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");



//run on page load
buildGrid();

//builds 16x16 grid on page load, also allows user to specify diff grid size.
function buildGrid(num = 16) {
  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  const square = num * num;

  for (let i = 1; i <= square; i++) {
    container.appendChild(makeGridBox());
  }
} 

function makeGridBox() {
  const div = document.createElement("div");
  div.classList.add("grid-box");
  return div;
}

function applyColor(e) {
    e.target.backgroundColor = 
}

//event handlers
container.addEventListener("mouseover", applyColor);

button.addEventListener("click", () => {
  const userNum = prompt("Please enter a number between 2 and 50. ");
  buildGrid(userNum);
});
