import { Cell } from './types'
export const SQUARE_WIDTH = 3
export const GRID_SIZE = [SQUARE_WIDTH * 3, SQUARE_WIDTH * 3]
export const defaultCell: Cell = {
  possibilities: [1, 2, 3, 4, 5, 6, 7, 8, 9], // TODO: this needs to be built off GRID_SIZE
  actual: null
}
