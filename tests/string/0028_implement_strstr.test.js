const strStr = require('../../problems/string/0028_implement_strstr')

test('0028 strStr test 01', () => {
  const result = strStr('hello', 'll')
  expect(result).toBe(2)
})

test('0028 strStr test 02', () => {
  const result = strStr('aaaaa', 'bba')
  expect(result).toBe(-1)
})
