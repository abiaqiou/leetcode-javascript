const longestCommonPrefix = require('../../problems/string/0014_longest_common_prefix')

test('0014 longestCommonPrefix test 01', () => {
  const result = longestCommonPrefix(['flower', 'flow', 'flight'])
  expect(result).toBe('fl')
})

test('0014 longestCommonPrefix test 02', () => {
  const result = longestCommonPrefix(['dog', 'racecar', 'car'])
  expect(result).toBe('')
})

test('0014 longestCommonPrefix test 03', () => {
  const result = longestCommonPrefix([])
  expect(result).toBe('')
})

test('0014 longestCommonPrefix test 04', () => {
  const result = longestCommonPrefix(['dog'])
  expect(result).toBe('dog')
})
