const maxSubArray = require('../../problems/array/0053_maximum_subarray')

test('0053 maxSubArray test 01', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  const result = maxSubArray(nums)
  expect(result).toBe(6)
})

test('0053 maxSubArray test 02', () => {
  const nums = [1]
  const result = maxSubArray(nums)
  expect(result).toBe(1)
})

test('0053 maxSubArray test 03', () => {
  const nums = [0]
  const result = maxSubArray(nums)
  expect(result).toBe(0)
})

test('0053 maxSubArray test 04', () => {
  const nums = [-1]
  const result = maxSubArray(nums)
  expect(result).toBe(-1)
})

test('0053 maxSubArray test 05', () => {
  const nums = [-100000]
  const result = maxSubArray(nums)
  expect(result).toBe(-100000)
})
