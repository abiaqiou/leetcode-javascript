/*
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
 

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const merge = (nums1, m, nums2, n) => {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m]
  }
  nums1.sort((a, b) => a - b)
}

// the fastest
const fastest = (nums1, m, nums2, n) => {
  let len = m + n
  while (n > 0) {
    if (m <= 0) {
      nums1[--len] = nums2[--n]
      continue
    }
    nums1[--len] = nums1[m - 1] >= nums2[n - 1] ? nums1[--m] : nums2[--n]
  }
}

module.exports = merge
