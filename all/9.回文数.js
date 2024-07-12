/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  let s = Number(new String(x).split('').reverse().join(''))
  return s === x
}
// @lc code=end
