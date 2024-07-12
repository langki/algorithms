/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let slow = 0
  let fast = nums.length - 1
  while (slow < fast) {
    let mid = Math.floor((slow + fast) / 2)
    // let mid = slow + ((fast - slow) >> 1)
    if (nums[mid] > nums[fast]) {
      slow = mid + 1
    } else if (nums[mid] < nums[fast]) {
      fast = mid
    }
  }
  return nums[slow]
}
// @lc code=end
