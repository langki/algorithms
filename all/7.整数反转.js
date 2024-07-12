/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let r = Number(new String(Math.abs(x)).split("").reverse().join(""))
  if (x < 0 && r > Math.pow(2, 31)) {
    return 0
  } else if (x > 0 && r > Math.pow(2, 31) - 1) {
    return 0
  }
  return x < 0 ? -r : r
}
// @lc code=end
