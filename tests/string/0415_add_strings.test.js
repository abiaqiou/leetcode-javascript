const addStrings = require('../../problems/string/0415_add_strings')

test('0415 addStrings test 01', () => {
  let num1 = '12345678'
  let num2 = '87654321'
  const result = addStrings(num1, num2)
  expect(result).toBe('99999999')
})

test('0415 addStrings test 02', () => {
  let num1 = '99999999'
  let num2 = '99999999'
  const result = addStrings(num1, num2)
  expect(result).toBe('199999998')
})
