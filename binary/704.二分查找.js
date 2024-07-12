/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let getNum = (start, end) => {
    if (start > end) {
      return -1
    }
    let index = Math.floor((start + end) / 2)
    let flag = nums[index]
    if (flag === target) {
      return index
    } else if (flag > target) {
      return getNum(start, index - 1)
    } else {
      return getNum(index + 1, end)
    }
  }
  return getNum(0, nums.length - 1)
}
// @lc code=end
