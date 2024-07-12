/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 动态方程
  // f(N - 1) = max(f(N - 2), f(N - 3) + nums[N - 1])
  // f(x) = max(f(x - 1), f(x - 2) + nums(x))
  let dp = new Array(nums).fill(0)
  dp[0] = nums[0]
  if (nums[1] !== undefined) {
    dp[1] = Math.max(nums[0], nums[1])
  }
  if (nums.length > 2) {
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
  }
  return dp[dp.length - 1]
}
// @lc code=end
