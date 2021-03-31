/*
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
 

提示：你可以假定该字符串只包含小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const firstUniqChar = (s) => {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (c in obj) {
      obj[c] = -1
    } else {
      obj[c] = i
    }
  }

  let indexs = Object.values(obj).filter((i) => i >= 0)
  let result = indexs.length === 0 ? -1 : Math.min(...indexs)
  return result
}

// the fastest
const fastest = (s) => {
  let i = 96
  let min = Infinity
  let t
  while (++i < 97 + 26) {
    // 常量运算浏览器会自动优化
    let a = String.fromCharCode(i)
    let j = s.indexOf(a)
    if (j > -1 && j === s.lastIndexOf(a) && j < min) {
      min = j
    }
  }
  return min === Infinity ? -1 : min
}

module.exports = firstUniqChar
