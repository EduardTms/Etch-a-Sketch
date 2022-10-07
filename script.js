const sizeDisplay = document.querySelector('.size');
let color = 'black';

function createGrid(size) {
    // Set the gridContainer
    const gridContainer = document.querySelector('.sketch');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // In case of size change in Grid, this removes all the previous squares 
    let squares = document.querySelectorAll('.square');
    squares.forEach((div) => div.remove());
    // Creates new squares
for(let i=0; i<size*size; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', squareColor);
    gridContainer.appendChild(square);
    }
}

// Generated gird before user input
createGrid(16);
sizeDisplay.textContent = `16x16`;

// user input is max 50 otherwise site lags
function changeSize(input) {
    createGrid(input);
    sizeDisplay.textContent = `${input}x${input}`; 
}

// function used in createGrid to change the color of the squares
function squareColor() {
    if(color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

// this just changes the color to the one that the user inputs
function changeColor(input) {
    color = input;
}

