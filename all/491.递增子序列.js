/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  // 回溯
  if (nums.length <= 1) {
    return []
  }
  let res = new Set()
  const setRes = (start, box) => {
    if (box.length >= 2) {
      res.add(box.join(','))
    }
    if (start > nums.length - 1) {
      return
    }
    for (let i = start; i < nums.length; i++) {
      if (nums[i] >= (box.length ? box[box.length - 1] : -Infinity)) {
        box.push(nums[i])
        setRes(i + 1, box)
        box.pop()
      }
    }
  }
  setRes(0, [])
  return [...res].map((v) => v.split(','))
}
// @lc code=end
