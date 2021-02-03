const twoSum = require('../problems/0001_two_sum')

test('0001 twoSum test 01', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    expect(result).toStrictEqual([0, 1])
})

test('0001 twoSum test 02', () => {
    const result = twoSum([3, 2, 4], 6)
    expect(result).toStrictEqual([1, 2])
})

test('0001 twoSum test 03', () => {
    const result = twoSum([3, 3], 6)
    expect(result).toStrictEqual([0, 1])
})