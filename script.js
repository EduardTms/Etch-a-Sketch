const gridContainer = document.querySelector('.grid');
const smallBtn = document.querySelector('.small'); 
const mediumBtn = document.querySelector('.medium'); 
const largeBtn = document.querySelector('.large'); 
const newDiv = document.createElement("div");
newDiv.className = "square";

// creating x by x layout
const grid = (size) => {
    gridSize(size);
    for(i=0; i< size*size; i++) {
        gridContainer.appendChild(newDiv.cloneNode(true));
    }
}

// giving the little squares a predefined size based on layout size
const gridSize = (size) => {
    if(size === 10) {
        newDiv.style.width = '45px';
        newDiv.style.height = '45px';
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 45px)`;
    }
    if (size === 20) {
        newDiv.style.width = '22.5px';
        newDiv.style.height = '22.5px';
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 22.5px)`;
    } 
    if (size === 30) {
        newDiv.style.width = '15px';
        newDiv.style.height = '15px';
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 15px)`;
    }  
};

grid(10);

// user input on the size of the grid
smallBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    grid(10);
});

mediumBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    grid(20);
});

largeBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    grid(30);
});