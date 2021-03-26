const reverse = require('../../problems/math/0007_reverse_integer')

test('0007 reverse test 01', () => {
  const result = reverse(123)
  expect(result).toBe(321)
})

test('0007 reverse test 02', () => {
  const result = reverse(-123)
  expect(result).toBe(-321)
})

test('0007 reverse test 03', () => {
  const result = reverse(120)
  expect(result).toBe(21)
})

test('0007 reverse test 04', () => {
  const result = reverse(0)
  expect(result).toBe(0)
})

test('0007 reverse test 05', () => {
  const result = reverse(2147483639)
  expect(result).toBe(0)
})

test('0007 reverse test 06', () => {
  const result = reverse(-2147483639)
  expect(result).toBe(0)
})
