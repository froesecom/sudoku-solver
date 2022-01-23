import { Grid, Cell } from './types'

// required for 'square' traverse option
import { SQUARE_WIDTH, GRID_SIZE } from './config'

type TraverseDirection = 'row' | 'column' | 'square'

interface BaseTraverseOptions {
  grid: Grid
  callback: (cell: Cell) => any
  coordinate: [number, number]
}

interface LinearTraverseOptions extends BaseTraverseOptions {
  gridSize?: typeof GRID_SIZE
}

interface SquareTraverseOptions extends BaseTraverseOptions {
  squareWidth?: typeof SQUARE_WIDTH
}

type TraverseOptions = LinearTraverseOptions & SquareTraverseOptions

const traverseRow = ({
  grid,
  callback,
  coordinate,
  gridSize
}: LinearTraverseOptions): any => {
  // TODO: implement traverseRow
}

export const traverse = (
  direction: TraverseDirection,
  {
    grid,
    callback,
    coordinate,
    gridSize = GRID_SIZE,
    squareWidth = SQUARE_WIDTH
  }: TraverseOptions
): any => {
  switch (direction) {
    case 'row':
      traverseRow({ grid, callback, coordinate, gridSize })
  }
}
