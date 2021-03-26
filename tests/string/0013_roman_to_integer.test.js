const romanToInt = require('../../problems/string/0013_roman_to_integer')

test('0013 romanToInt test 01', () => {
  const result = romanToInt('III')
  expect(result).toBe(3)
})

test('0013 romanToInt test 02', () => {
  const result = romanToInt('IV')
  expect(result).toBe(4)
})

test('0013 romanToInt test 03', () => {
  const result = romanToInt('IX')
  expect(result).toBe(9)
})

test('0013 romanToInt test 04', () => {
  const result = romanToInt('LVIII')
  expect(result).toBe(58)
})

test('0013 romanToInt test 05', () => {
  const result = romanToInt('MCMXCIV')
  expect(result).toBe(1994)
})
