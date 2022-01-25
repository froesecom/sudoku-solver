import { Grid, Cell } from './types'
import { SQUARE_WIDTH, GRID_SIZE } from './config'
import { GridSize } from './types'

type TraverseDirection = 'row' | 'column' | 'square'

interface BaseTraverseOptions {
  grid: Grid
  callback: (cell: Cell) => any
  coordinate: [number, number]
}

interface LinearTraverseOptions extends BaseTraverseOptions {
  gridSize: GridSize
}

interface SquareTraverseOptions extends BaseTraverseOptions {
  squareWidth: typeof SQUARE_WIDTH
}

type TraverseOptions = LinearTraverseOptions & SquareTraverseOptions

const traverseRow = ({
  grid,
  callback,
  coordinate,
  gridSize
}: LinearTraverseOptions): any => {
  const [x, y] = coordinate
  const row = grid[y]
  for (let i = x; i < gridSize[0]; i++) {
    callback(row[i])
  }
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
