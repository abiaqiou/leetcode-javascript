/*
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const addBinary = (a, b) => {
  let result = ''
  let needPlus = false
  let len = a.length > b.length ? a.length : b.length
  for (let i = 0; i < len; i++) {
    let s1 = a[a.length - 1 - i] || '0'
    let s2 = b[b.length - 1 - i] || '0'
    if (needPlus) {
      if (s1 === '1' && s2 === '1') {
        result = '1' + result
      } else if (s1 === '0' && s2 === '0') {
        result = '1' + result
        needPlus = false
      } else {
        result = '0' + result
      }
    } else {
      if (s1 === '1' && s2 === '1') {
        result = '0' + result
        needPlus = true
      } else if (s1 === '0' && s2 === '0') {
        result = '0' + result
      } else {
        result = '1' + result
      }
    }
  }
  if (needPlus) {
    result = '1' + result
  }
  return result
}

// the fastest
const fastest = (a, b) => {
  // let res = parseInt(a, 2) + parseInt(b, 2)
  let res = BigInt('0B' + a) + BigInt('0B' + b)
  return res.toString(2)
}

module.exports = addBinary
