/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var i = 0,
    j = height.length - 1,
    max = 0
  while (i < j) {
    max = Math.max(
      max,
      (j - i) * (height[i] > height[j] ? height[j--] : height[i++])
    )
  }
  return max
}
// @lc code=end
