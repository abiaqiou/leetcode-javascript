const isPalindrome = require('../problems/0009_palindrome_number')

test('0009 isPalindrome test 01', () => {
    const result = isPalindrome(121)
    expect(result).toBe(true)
})

test('0009 isPalindrome test 02', () => {
    const result = isPalindrome(-121)
    expect(result).toBe(false)
})

test('0009 isPalindrome test 03', () => {
    const result = isPalindrome(10)
    expect(result).toBe(false)
})

test('0009 isPalindrome test 04', () => {
    const result = isPalindrome(-101)
    expect(result).toBe(false)
})

test('0009 isPalindrome test 05', () => {
    const result = isPalindrome(3)
    expect(result).toBe(true)
})