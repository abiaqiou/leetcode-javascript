const countAndSay = require('../problems/0038_count_and_say')

test('0038 countAndSay test 01', () => {
  const result = countAndSay(1)
  expect(result).toBe('1')
})

test('0038 countAndSay test 01', () => {
  const result = countAndSay(2)
  expect(result).toBe('11')
})

test('0038 countAndSay test 01', () => {
  const result = countAndSay(3)
  expect(result).toBe('21')
})

test('0038 countAndSay test 01', () => {
  const result = countAndSay(4)
  expect(result).toBe('1211')
})

test('0038 countAndSay test 01', () => {
  const result = countAndSay(5)
  expect(result).toBe('111221')
})
