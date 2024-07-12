/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set()
  for (const v of nums) {
    if (set.has(v)) {
      return true
    } else {
      set.add(v)
    }
  }
  return false
}
// @lc code=end
