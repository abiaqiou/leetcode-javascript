const isValid = require('../../problems/string/0020_valid_parentheses')

test('0020 isValid test 01', () => {
  const result = isValid('()')
  expect(result).toBe(true)
})

test('0020 isValid test 02', () => {
  const result = isValid('()[]{}')
  expect(result).toBe(true)
})

test('0020 isValid test 03', () => {
  const result = isValid('(]')
  expect(result).toBe(false)
})

test('0020 isValid test 04', () => {
  const result = isValid('([)]')
  expect(result).toBe(false)
})

test('0020 isValid test 05', () => {
  const result = isValid('{[]}')
  expect(result).toBe(true)
})
