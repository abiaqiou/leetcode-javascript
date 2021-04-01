/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

 

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const addStrings = (num1, num2) => {
  let result = ''
  let extra = 0
  let length = Math.max(num1.length, num2.length)
  for (let i = 0; i < length; i++) {
    let n1 = num1[num1.length - 1 - i] || '0'
    let n2 = num2[num2.length - 1 - i] || '0'
    let sum = Number(n1) + Number(n2) + extra
    extra = 0
    if (sum > 9) {
      result = String(sum - 10) + result
      extra = 1
    } else {
      result = String(sum) + result
    }
  }

  if (extra === 1) {
    result = '1' + result
  }

  return result
}

// the fastest
const fastest = (num1, num2) => {
  const len1 = num1.length
  const len2 = num2.length
  const max = Math.max(len1, len2)
  let res
  let pos = -1
  let sum = ''
  let more = 0
  while (++pos < max) {
    const sNum1 = pos < len1 ? num1.charCodeAt(len1 - 1 - pos) - 48 : 0
    const sNum2 = pos < len2 ? num2.charCodeAt(len2 - 1 - pos) - 48 : 0
    res = sNum1 + sNum2 + more
    sum = (res % 10) + sum
    more = (res / 10) >> 0
  }
  return more ? more + sum : sum
}

module.exports = addStrings
