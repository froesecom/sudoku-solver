import { traverse } from './utils'
import { defaultCell } from './config'

describe('traverse()', () => {
  describe("when direction is 'row'", () => {
    const grid = [new Array(9).fill({ ...defaultCell })]

    test('it triggers the callback for each row cell', () => {
      const callback = jest.fn()
      traverse('row', {
        grid: grid,
        coordinate: [0, 0],
        callback
      })
      expect(callback.mock.calls.length).toBe(9)
    })
  })
})
