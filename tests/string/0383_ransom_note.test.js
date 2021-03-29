const canConstruct = require('../../problems/string/0383_ransom_note')

test('0383 canConstruct test 01', () => {
  let ransomNote = 'a'
  let magazine = 'b'
  const result = canConstruct(ransomNote, magazine)
  expect(result).toBe(false)
})

test('0383 canConstruct test 02', () => {
  let ransomNote = 'aa'
  let magazine = 'ab'
  const result = canConstruct(ransomNote, magazine)
  expect(result).toBe(false)
})

test('0383 canConstruct test 03', () => {
  let ransomNote = 'aa'
  let magazine = 'aab'
  const result = canConstruct(ransomNote, magazine)
  expect(result).toBe(true)
})
