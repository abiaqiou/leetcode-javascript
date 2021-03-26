/*
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const isPalindrome = (s) => {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  let nums = '0123456789'
  let all = abc + abc.toUpperCase() + nums

  let i = 0
  let j = s.length - 1
  while (true) {
    if (i >= j) {
      return true
    }
    if (all.indexOf(s[i]) === -1) {
      i += 1
      continue
    }
    if (all.indexOf(s[j]) === -1) {
      j -= 1
      continue
    }
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i += 1
      j -= 1
    } else {
      return false
    }
  }
}

// the fastest
const fastest = (s) => {
  if (!s.trim()) {
    return true
  }

  const arr = s.match(/[A-Za-z0-9]/g)

  if (!arr) {
    return true
  }

  return (
    arr.join('').toLowerCase() === [...arr].reverse().join('').toLowerCase()
  )
}

module.exports = isPalindrome
