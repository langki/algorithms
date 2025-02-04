/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => a - b)
  return nums.slice(-k, -k + 1 < 0 ? -k + 1 : undefined)
}
// @lc code=end
