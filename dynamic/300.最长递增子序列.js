/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 以nums[i]结尾的最长递增子序列的长度是dp[i]
  // dp[i] = Math.max(dp[j] + 1, dp[i])  其中 0<j<i && nums[j] < nums[i]
  if (nums.length <= 1) {
    return 1
  }
  let dp = new Array(nums.length).fill(1)
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1)
      }
    }
  }
  return Math.max(...dp)
}
// @lc code=end
