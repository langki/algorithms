/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) {
    return 1
  }
  let slow = 0
  let fast = x
  while (slow <= fast) {
    let mid = Math.floor((slow + fast) / 2)
    console.log(mid)
    let m = mid * mid
    if (m === x) {
      return mid
    } else if (m > x) {
      if (mid === fast) {
        return fast
      }
      fast = mid
    } else {
      if (mid === slow) {
        return slow
      }
      slow = mid
    }
  }
  return slow
}
// @lc code=end
