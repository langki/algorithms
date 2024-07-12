/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  let dp = new Array()
  dp[0] = 1
  let max = 1
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
      max = Math.max(dp[i], max)
    } else {
      dp[i] = 1
    }
  }
  return max
}
// @lc code=end
