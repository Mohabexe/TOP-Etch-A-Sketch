const gridContainer = document.querySelector('.grid-container');
const brushButton = document.querySelector('.brush');
const randomColorsButton = document.querySelector('.randomColors');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const gridSizeButton = document.querySelector('.gridSize');
const allButtons = document.querySelectorAll('button');

let isDrawing = false;
let currentMode = 'brush';


gridSizeButton.addEventListener('click', () => {
    const gridSize = prompt('Enter the size of the grid (1-100):');
    if (gridSize < 1 || gridSize > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    gridContainer.innerHTML = '';
    gridContainer.style.width = '600px';
    gridContainer.style.height = '600px';
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gap = '0';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.className = 'gridblock';
        gridContainer.appendChild(div);
    }
});

eraserButton.addEventListener('click', () => {
    currentMode = 'eraser';
});

brushButton.addEventListener('click', () => {
    currentMode = 'brush';
});
randomColorsButton.addEventListener('click', () =>{
    currentMode = 'random'
})

gridContainer.addEventListener('mousedown', () => {
    isDrawing = true;
});

gridContainer.addEventListener('mouseup', () => {
    isDrawing = false;
});

gridContainer.addEventListener('mouseleave', () => {
    isDrawing = false;
});

gridContainer.addEventListener('mousemove', (e) => {
    if (isDrawing && e.target.classList.contains('gridblock')) {
        if (currentMode === 'brush') {
            e.target.style.backgroundColor = 'black';
        } else if (currentMode === 'eraser') {
            e.target.style.backgroundColor = 'white';
        } else if (currentMode === 'random') {
            e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        }
    }
});

gridContainer.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('gridblock')) {
        if (currentMode === 'brush') {
            e.target.style.backgroundColor = 'black';
        } else if (currentMode === 'eraser') {
            e.target.style.backgroundColor = 'white';
        }else if (currentMode === 'random') {
            e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        }
    }
});

resetButton.addEventListener('click', () => {
    const gridBlocks = document.querySelectorAll('.gridblock');
    gridBlocks.forEach(block => {
        block.style.backgroundColor = 'white';
    });
});

// randomColorsButton.addEventListener('click', () => {
//     const gridBlocks = document.querySelectorAll('.gridblock');
//     gridBlocks.forEach(block => {
//         block.addEventListener('mouseover', () => {
//             block.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//         });
//     });
// });


