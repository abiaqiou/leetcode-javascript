const addBinary = require('../problems/0067_add_binary')

test('0067 addBinary test 01', () => {
  const result = addBinary('11', '1')
  expect(result).toBe('100')
})

test('0067 addBinary test 02', () => {
  const result = addBinary('1010', '1011')
  expect(result).toBe('10101')
})
