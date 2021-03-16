const plusOne = require('../problems/0066_plus_one')

test('0066 plusOne test 01', () => {
  let a = [1, 2, 3]
  const result = plusOne(a)
  expect(result).toEqual([1, 2, 4])
})

test('0066 plusOne test 02', () => {
  let a = [4, 3, 2, 1]
  const result = plusOne(a)
  expect(result).toEqual([4, 3, 2, 2])
})

test('0066 plusOne test 03', () => {
  let a = [0]
  const result = plusOne(a)
  expect(result).toEqual([1])
})

test('0066 plusOne test 04', () => {
  let a = [9]
  const result = plusOne(a)
  expect(result).toEqual([1, 0])
})
