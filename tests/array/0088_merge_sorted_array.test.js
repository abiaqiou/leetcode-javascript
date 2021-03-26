const merge = require('../../problems/array/0088_merge_sorted_array')

test('0088 merge test 01', () => {
  let nums1 = [1, 2, 3, 0, 0, 0]
  let m = 3
  let nums2 = [2, 5, 6]
  let n = 3

  merge(nums1, m, nums2, n)
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})

test('0088 merge test 02', () => {
  let nums1 = [1]
  let m = 1
  let nums2 = []
  let n = 0

  merge(nums1, m, nums2, n)
  expect(nums1).toEqual([1])
})
