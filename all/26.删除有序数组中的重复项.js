/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力解法
// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0
//   }
//   let rn = undefined
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === rn) {
//       nums.splice(i, 1)
//       i--
//     } else {
//       rn = nums[i]
//     }
//   }
//   return nums.length
// }

// 双指针
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}
// @lc code=end
