const reverseVowels = require('../../problems/string/0345_reverse_vowels_of_a_string')

test('0345 reverseVowels test 01', () => {
  const result = reverseVowels('hello')
  expect(result).toBe('holle')
})

test('0345 reverseVowels test 02', () => {
  const result = reverseVowels('leetcode')
  expect(result).toBe('leotcede')
})
