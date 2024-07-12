/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = nums.map((v, i) => {
    return {
      index: i,
      value: v,
    }
  })

  arr.sort((a, b) => {
    return a.value - b.value
  })
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    if (arr[l].value + arr[r].value > target) {
      r--
    } else if (arr[l].value + arr[r].value < target) {
      l++
    }
    if (arr[l].value + arr[r].value == target) {
      return [arr[l].index, arr[r].index]
    }
  }
}
// @lc code=end
