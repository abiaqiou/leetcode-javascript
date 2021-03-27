const reverseString = require('../../problems/string/0344_reverse_string')

test('0344 reverseString test 01', () => {
  let s = ['h', 'e', 'l', 'l', 'o']
  reverseString(s)
  expect(s).toEqual(['o', 'l', 'l', 'e', 'h'])
})

test('0344 reverseString test 02', () => {
  let s = ['H', 'a', 'n', 'n', 'a', 'h']
  reverseString(s)
  expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
})
