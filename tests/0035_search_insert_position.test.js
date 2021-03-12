const searchInsert = require('../problems/0035_search_insert_position')

test('0035 searchInsert test 01', () => {
  const result = searchInsert([1, 3, 5, 6], 5)
  expect(result).toBe(2)
})

test('0035 searchInsert test 02', () => {
  const result = searchInsert([1, 3, 5, 6], 2)
  expect(result).toBe(1)
})

test('0035 searchInsert test 03', () => {
  const result = searchInsert([1, 3, 5, 6], 7)
  expect(result).toBe(4)
})

test('0035 searchInsert test 04', () => {
  const result = searchInsert([1, 3, 5, 6], 0)
  expect(result).toBe(0)
})
