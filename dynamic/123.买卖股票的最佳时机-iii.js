/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 区间动态规划
  // 因为最多两笔交易 所以先将数组分为两段分别计算收益 最后利用缓存优化
  let dp1 = Array(prices.length).fill(0)
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    dp1[i] = prices[i] - min > dp1[i - 1] ? prices[i] - min : dp1[i - 1]
  }

  let dp2 = Array(prices.length).fill(0)
  let max = prices[prices.length - 1]
  for (let i = prices.length - 2; i >= 0; i--) {
    max = Math.max(max, prices[i])
    dp2[i] = max - prices[i] > dp2[i + 1] ? max - prices[i] : dp2[i + 1]
  }

  let ret = 0
  for (let i = 1; i < prices.length; i++) {
    let max = dp1[i] + dp2[i]
    ret = max > ret ? max : ret
  }
  return ret
}

// @lc code=end
