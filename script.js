const gridContainer = document.querySelector('.grid-container');
const brushButton = document.querySelector('.brush');
const randomColorsButton = document.querySelector('.randomColors');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const gridSizeButton = document.querySelector('.gridSize');
const allButtons = document.querySelectorAll('button');

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


const toggleThemeButton = document.querySelector('.toggleThemeButton');
let isDarkMode = false;
toggleThemeButton.textContent = '🌙';

toggleThemeButton.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        toggleThemeButton.textContent = '🌙';
        allButtons.forEach(button => {
            button.style.backgroundColor = '#11B5E4';
            button.style.color = '#000';
        });
        gridContainer.style.border = '1px solid #000';
        gridContainer.style.transition = 'all 0.2s';
        allButtons.forEach(button => {
            button.style.transition = 'all 0.2s';
        });
        document.body.style.transition = 'all 0.2s';
    } else {
        document.body.style.backgroundColor = '#001021';
        document.body.style.color = '#fff';
        toggleThemeButton.textContent = '☀️';

        gridContainer.style.border = '1px solid #FFF';

        allButtons.forEach(button => {
            button.style.backgroundColor = '#034748';
            button.style.color = '#fff';
        });
        gridContainer.style.transition = 'all 0.2s';
        allButtons.forEach(button => {
            button.style.transition = 'all 0.2s';
        });
        

        document.body.style.transition = 'all 0.2s';
    }
    isDarkMode = !isDarkMode;
});

eraserButton.addEventListener('click', () => {

    gridBlocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            if(isDarkMode) {
                block.style.backgroundColor = '#001021';
            }
            else {
                block.style.backgroundColor = 'white';
            }
        });
    });
});

resetButton.addEventListener('click', () => {
    const gridBlocks = document.querySelectorAll('.gridblock');
    gridBlocks.forEach(block => {
        if(isDarkMode) {
            block.style.backgroundColor = '#001021';
        } else {
            block.style.backgroundColor = 'white';
        }
    });
});

brushButton.addEventListener('click', () => {
    const gridBlocks = document.querySelectorAll('.gridblock');
    gridBlocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'black';
        });
    });
});
randomColorsButton.addEventListener('click', () => {
    const gridBlocks = document.querySelectorAll('.gridblock');
    gridBlocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        });
    });
});


