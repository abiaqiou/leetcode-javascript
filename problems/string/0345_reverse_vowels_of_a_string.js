/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

 

示例 1：

输入："hello"
输出："holle"
示例 2：

输入："leetcode"
输出："leotcede"
 

提示：

元音字母不包含字母 "y" 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const reverseVowels = (s) => {
  let a = s.split('')
  let aeiouIndex = []
  for (let i = 0; i < a.length; i++) {
    let c = a[i]
    if ('aeiouAEIOU'.includes(c)) {
      aeiouIndex.push(i)
    }
  }

  while (aeiouIndex.length > 1) {
    let left = aeiouIndex.shift()
    let right = aeiouIndex.pop()
    let temp = a[left]
    a[left] = a[right]
    a[right] = temp
  }

  return a.join('')
}

// the fastest
const fastest = (s) => {
  let taget = 'aoeiuAOEIU'
  s = s.split('')
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (taget.indexOf(s[left]) == -1) {
      left++
      continue
    }
    if (taget.indexOf(s[right]) == -1) {
      right--
      continue
    }
    ;[s[right], s[left]] = [s[left], s[right]]
    left++
    right--
  }
  return s.join('')
}

module.exports = reverseVowels
