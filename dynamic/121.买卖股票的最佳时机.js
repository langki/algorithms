/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = Array(prices.length).fill(0)
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    dp[i] = prices[i] - min > dp[i - 1] ? prices[i] - min : dp[i - 1]
  }
  return dp[dp.length - 1]
}
// @lc code=end
