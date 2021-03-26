const generate = require('../../problems/array/0118_pascals_triangle')

test('0118 generate test 01', () => {
  const result = generate(1)
  expect(result).toEqual([[1]])
})

test('0118 generate test 02', () => {
  const result = generate(2)
  expect(result).toEqual([[1], [1, 1]])
})

test('0118 generate test 03', () => {
  const result = generate(5)
  expect(result).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ])
})
