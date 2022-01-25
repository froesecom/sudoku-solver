import { traverse } from './utils'
import { defaultCell } from './config'
import { GridSize } from './types'

describe('traverse()', () => {
  describe("when direction is 'row'", () => {
    const gridSize: GridSize = [9, 9]
    const squareWidth = 3
    const grid = [new Array(9).fill({ ...defaultCell })]
    const callback = jest.fn()

    beforeEach(() => {
      callback.mockClear()
    })

    test('it triggers the callback for each row cell', () => {
      traverse('row', {
        grid: grid,
        coordinate: [0, 0],
        callback,
        gridSize,
        squareWidth
      })
      expect(callback.mock.calls.length).toBe(9)
    })

    test('it starts the traverse from the given coordinate', () => {
      traverse('row', {
        grid: grid,
        coordinate: [2, 0],
        callback,
        gridSize,
        squareWidth
      })
      expect(callback.mock.calls.length).toBe(7)
    })
  })
})
