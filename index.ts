import { Cell, Puzzle, Grid } from './src/types'

const defaultCell: Cell = {
  possibilities: [1, 2, 3, 4, 5, 6, 7, 8, 9], // TODO: this needs to be built off GRID_SIZE
  actual: null
}

const PUZZLE: Puzzle = [
  [null, null, 6, null, null, 5, null, null, null],
  [null, null, null, 9, null, 2, 4, 5, null],
  [null, 9, null, 3, null, null, 7, null, 8],
  [null, null, null, 7, null, null, null, 8, null],
  [6, null, 3, null, null, null, 2, null, 5],
  [8, 5, null, null, null, 3, null, null, null],
  [null, null, 2, null, 4, 7, null, null, null],
  [9, 6, 7, null, 8, 1, 5, 3, null],
  [null, 5, 6, null, null, null, 1, 3, 2]
]

// TODO: pass in puzzle as a file path
const buildGrid = (puzzle: Puzzle): Grid => {
  return [...puzzle].map((row) => {
    return row.map((cell) => {
      return { ...defaultCell, actual: cell }
    })
  })
}

console.log(buildGrid(PUZZLE))
