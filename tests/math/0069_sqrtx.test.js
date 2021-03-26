const mySqrt = require('../../problems/math/0069_sqrtx')

test('0069 mySqrt test 01', () => {
  const result = mySqrt(4)
  expect(result).toBe(2)
})

test('0069 mySqrt test 02', () => {
  const result = mySqrt(8)
  expect(result).toBe(2)
})

test('0069 mySqrt test 03', () => {
  const result = mySqrt(2501)
  expect(result).toBe(50)
})
