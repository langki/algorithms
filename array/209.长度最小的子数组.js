/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 双指针 slow fast
// >=target slow++
// <target fast ++
var minSubArrayLen = function (target, nums) {
  let sum = 0
  let result = nums.length + 1
  let len = nums.length
  let slow = 0
  let fast = 0
  while (fast < len) {
    sum += nums[fast++]
    while (sum >= target) {
      let slen = fast - slow
      result = slen > result ? result : slen
      sum -= nums[slow++]
    }
  }
  return result > len ? 0 : result
}
// @lc code=end
