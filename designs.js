// Select color input
const cell_color = document.querySelector('#colorPicker')
let c_color = cell_color.value;
cell_color.onchange = () => {
  c_color = cell_color.value;
}
// Targeting the table cell for color fill
const color_click = (cc) => {
  if(cc.target.nodeName.toLowerCase() === 'td') {
    cc.target.style.backgroundColor = c_color;
  }
}

// Select size input
const width = document.querySelector('#inputWidth');
const height = document.querySelector('#inputHeight');

let grid_width = width.value
let grid_height = height.value

width.addEventListener("input", () => {
  grid_width = document.querySelector('#inputWidth').value;
})

height.addEventListener("input", () => {
  grid_height = document.querySelector('#inputHeight').value;
})

let grid_table = document.querySelector('#pixelCanvas')
grid_table.addEventListener("click", color_click);

// When size is submitted by the user, call makeGrid
const grid_form = document.querySelector('#sizePicker')
grid_form.addEventListener('submit', makeGrid);

// makeGrid();
function makeGrid(occurrence) {
  occurrence.preventDefault();
  grid_table.innerHTML = '';

  // get the reference for the body
  let body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < Number(grid_width); i++) {
    // creates a table row
    const row = document.createElement("tr");
    for (let j = 0; j < Number(grid_height); j++) {
      // the end of the table row
      const cell = document.createElement("td");
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    grid_table.appendChild(row);
  }
}
