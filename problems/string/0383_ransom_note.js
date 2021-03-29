/*
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)

 

示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true
 

提示：

你可以假设两个字符串均只含有小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ransom-note
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const canConstruct = (ransomNote, magazine) => {
  let len1 = ransomNote.length
  let len2 = magazine.length

  if (len1 > len2) {
    return false
  }

  let a = ransomNote.split('').sort()
  let b = magazine.split('').sort()
  for (let c of a) {
    let i = b.indexOf(c)
    if (i === -1) {
      return false
    } else {
      b[i] = undefined
    }
  }
  return true
}

// the fastest
const fastest = (ransomNote, magazine) => {
  let map = new Array(26).fill(0)
  for (let i of magazine) {
    map[i.charCodeAt() - 'a'.charCodeAt()]++
  }
  for (let i of ransomNote) {
    map[i.charCodeAt() - 'a'.charCodeAt()]--
    if (map[i.charCodeAt() - 'a'.charCodeAt()] < 0) return false
  }
  return true
}

module.exports = canConstruct
