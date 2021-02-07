const removeDuplicates = require('../problems/0026_remove_duplicates_from_sorted_array')

test('0026 removeDuplicates test 01', () => {
    let nums = [1, 1, 2]
    const result = removeDuplicates(nums)
    expect(result).toBe(2)
    expect(nums).toStrictEqual([1, 2, 2])
})

test('0026 removeDuplicates test 02', () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const result = removeDuplicates(nums)
    expect(result).toBe(5)
    expect(nums).toStrictEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4])
})