/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n
  }
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}
// @lc code=end
