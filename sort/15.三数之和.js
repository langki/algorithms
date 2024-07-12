/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = []
  let len = nums.length
  if (nums == null || len < 3) return arr
  nums.sort((v1, v2) => {
    return v1 - v2
  })
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i > 0 && nums[i] == nums[i - 1]) continue // 去重
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let first = Math.abs(nums[i])
      let sum = nums[left] + nums[right]
      if (first == sum) {
        arr.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[right] == nums[right - 1]) {
          right--
        }
        while (left < right && nums[left] == nums[left + 1]) {
          left++
        }
        right--
        left++
      } else if (first < sum) {
        right--
      } else {
        left++
      }
    }
  }
  return arr
}
// @lc code=end
