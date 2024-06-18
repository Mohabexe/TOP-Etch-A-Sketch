const container = document.querySelector(".container")

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows)
  container.style.setProperty("--grid-cols", cols)
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div")
    container.appendChild(cell).className = "grid-item"
  }
}

createGrid(16, 16)
draw()

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    item.style.backgroundColor = "white"
  })
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

function draw() {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = randomColor()
    })
  })
}

const clearButton = document.querySelector(".clear")

clearButton.addEventListener("click", () => {
  clearGrid()
})

const randomButton = document.querySelector(".random")

randomButton.addEventListener("click", () => {
  draw()
})

const blackButton = document.querySelector(".black")

blackButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black"
    })
  })
})

const eraserButton = document.querySelector(".eraser")

eraserButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white"
    })
  })
})
