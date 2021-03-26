// Select color input
const colorSelect = document.querySelector("#colorPicker");

// Assigns submit to the submitBtn allowing it to be called during makeGrid()
let submit = document.getElementById("submitBtn");

function makeGrid() {
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        pixelCanvas.innerHTML = ""; // Clears the old grid on click of submitBtn
        for (let i = 0; i < inputHeight.value; i++) {
            let row = pixelCanvas.insertRow();
            for (let j = 0; j < inputWidth.value; j++) {
                row.insertCell();
            }
        }
        addClick();
        addMouseover();
    })
};

// Simple click function added to each cell.
function addClick() {
    const cells = document.querySelectorAll('td') // Selects all cells and assigns them to 'cells'
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function(event) {
            if (event.target.hasAttribute('style')) { // Checks if already has 'style'
                event.target.removeAttribute('style'); // If has style removes it on click.
                console.log('gaylord')
            } else {
                event.target.style.backgroundColor = colorSelect.value; // Adds color if no color.
            }
        })
    }
};

// Ctrl + Mouseover added to each cell allowing the user to 'paint' rather than click.
function addMouseover() {
    const cells = document.querySelectorAll('td')
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function(event) {
            if (window.event.ctrlKey) { // Checks for the user's CtrlKey clicked.
                event.target.style.backgroundColor = colorSelect.value;
            }
        })
    }
};

makeGrid()