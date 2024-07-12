/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0])
  let temp = [points[0][0], points[0][1]]
  let count = 1
  for (let i = 1; i < points.length; i++) {
    let p = points[i]
    if (p[0] > temp[1]) {
      temp = [p[0], p[1]]
      count++
    } else {
      if (p[1] < temp[1]) {
        temp[1] = p[1]
      }
    }
  }
  return count
}
// @lc code=end
