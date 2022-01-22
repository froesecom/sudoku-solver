export interface Cell {
  possibilities: Number[]
  actual: null | Number
}

export type Grid = Cell[][]
export type Puzzle = (Number | null)[][]
