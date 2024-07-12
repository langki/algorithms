/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  nums.sort((a, b) => a - b)
  let maxL = 1
  let dp = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] - nums[i - 1] === 1) {
      dp++
    } else {
      dp = 1
    }
    maxL = dp > maxL ? dp : maxL
  }
  return maxL
}
// @lc code=end
