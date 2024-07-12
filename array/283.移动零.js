/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针解法一
// var moveZeroes = function (nums) {
//   if (nums.length <= 1) {
//     return nums
//   }
//   let left = 0
//   for (let right = 1; right < nums.length; right++) {
//     if (nums[left] !== 0) {
//       left++
//     }
//     if (nums[right] !== 0) {
//       nums[left] = nums[right]
//       nums[right] = 0
//       left++
//     }
//   }
//   return nums
// }

// 双指针解法二
var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      if (slow !== fast) {
        ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      }
      slow++
    }
    fast++
  }
  return nums
}
// @lc code=end
