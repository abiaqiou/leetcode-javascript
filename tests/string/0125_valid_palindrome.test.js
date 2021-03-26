const isPalindrome = require('../../problems/string/0125_valid_palindrome')

test('0125 isPalindrome test 01', () => {
  const result = isPalindrome('A man, a plan, a canal: Panama')
  expect(result).toBe(true)
})

test('0125 isPalindrome test 02', () => {
  const result = isPalindrome('race a car')
  expect(result).toBe(false)
})
