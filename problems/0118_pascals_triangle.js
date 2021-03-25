/*
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const nthRow = (n) => {
  if (n === 0) {
    return [1]
  } else {
    let result = []
    for (let i = 0; i < n + 1; i++) {
      let prev = nthRow(n - 1)
      let left = prev[i - 1] || 0
      let right = prev[i] || 0
      result.push(left + right)
    }
    return result
  }
}
const generate = (numRows) => {
  let result = []
  for (let i = 0; i < numRows; i++) {
    result.push(nthRow(i))
  }
  return result
}

// the fastest
const fastest = (numRows) => {
  let result = []
  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1)
    result[i][0] = 1
    result[i][i] = 1
    for (let j = 1; j <= i + 1 - 2; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
    }
  }
  return result
}

module.exports = generate
