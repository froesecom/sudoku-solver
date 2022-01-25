export interface Cell {
  possibilities: Number[]
  actual: null | Number
}

export type Grid = Cell[][]
export type GridSize = [number, number]
export type Puzzle = (Number | null)[][]
