const firstUniqChar = require('../../problems/string/0387_first_unique_character_in_a_string')

test('0387 firstUniqChar test 01', () => {
  const result = firstUniqChar('leetcode')
  expect(result).toBe(0)
})

test('0387 firstUniqChar test 02', () => {
  const result = firstUniqChar('loveleetcode')
  expect(result).toBe(2)
})
