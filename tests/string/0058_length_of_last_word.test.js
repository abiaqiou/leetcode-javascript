const lengthOfLastWord = require('../../problems/string/0058_length_of_last_word')

test('0058 lengthOfLastWord test 01', () => {
  const s = 'Hello World'
  const result = lengthOfLastWord(s)
  expect(result).toBe(5)
})

test('0058 lengthOfLastWord test 02', () => {
  const s = ' '
  const result = lengthOfLastWord(s)
  expect(result).toBe(0)
})
