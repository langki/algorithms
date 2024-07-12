/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = undefined
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i]
    let l = i === 0 ? 1 : 0
    let r = i === nums.length - 1 ? nums.length - 2 : nums.length - 1
    while (l < r) {
      let sum = nums[l] + nums[r]
      let sums = nums[i] + nums[l] + nums[r]
      if (
        res === undefined ||
        Math.abs(target - res) > Math.abs(target - sums)
      ) {
        res = sums
      }
      if (sum == temp) {
        return sums
      }
      if (sum > temp) {
        r--
        if (r === i) {
          r--
        }
      }
      if (sum < temp) {
        l++
        if (l === i) {
          l++
        }
      }
    }
  }
  return res
}
// @lc code=end
