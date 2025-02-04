/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 原地 双指针
var sortedSquares = function (nums) {
  // return nums.map((v) => v * v).sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let arr = Array(nums.length)
  let k = nums.length - 1
  while (right >= left) {
    let l = nums[left] * nums[left]
    let r = nums[right] * nums[right]
    if (r > l) {
      arr[k] = r
      right--
    } else {
      arr[k] = l
      left++
    }
    k--
  }
  return arr
}
// @lc code=end
