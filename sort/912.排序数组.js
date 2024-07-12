/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 二分
  if (nums.length <= 1) {
    return nums
  }
  let left = []
  let right = []
  let index = Math.floor(nums.length / 2)
  let current = nums.splice(index, 1)
  nums.forEach((v) => {
    if (v > current[0]) {
      right.push(v)
    } else {
      left.push(v)
    }
  })
  return sortArray(left).concat(current, sortArray(right))
}
// @lc code=end
