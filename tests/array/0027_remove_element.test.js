const removeElement = require('../../problems/array/0027_remove_element')

test('0027 removeElement test 01', () => {
  let nums = [3, 2, 2, 3]
  const result = removeElement(nums, 3)
  expect(result).toBe(2)
  // expect(nums).toStrictEqual([2, 2])
})

test('0027 removeElement test 02', () => {
  let nums = [0, 1, 2, 2, 3, 0, 4, 2]
  const result = removeElement(nums, 2)
  expect(result).toBe(5)
  // expect(nums).toStrictEqual([0, 1, 3, 0, 4])
})
