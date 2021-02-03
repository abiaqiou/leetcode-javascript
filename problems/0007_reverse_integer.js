/*
给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0
 

提示：

-231 <= x <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// my solution
const reversedStrFromNum = (num) => {
    const s = String(num)
    let r = ''
    for (let i = 0; i < s.length; i++) {
        const char = s[s.length - i - 1];
        r += char
    }
    return r
}

const reverse = (x) => {
    const max = Math.pow(2, 31)
    let s = ''
    if (x < 0) {
        s = `-${reversedStrFromNum(-x)}`
    } else {
        s = reversedStrFromNum(x)
    }
    let n = Number(s)
    if (n < -max || n > max - 1 || n === 0) {
        return 0
    } else {
        return n
    }
}

module.exports = reverse