const SQUARE_WIDTH = 3
const GRID_SIZE = [SQUARE_WIDTH * 3, SQUARE_WIDTH * 3]

interface Cell {
  possibilities: Number[]
  actual: null | Number
}

const defaultCell: Cell = {
  possibilities: [1, 2, 3, 4, 5, 6, 7, 8, 9], // This needs to be build off GRID_SIZE
  actual: null
}
