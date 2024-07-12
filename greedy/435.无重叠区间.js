/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let count = 0
  intervals.sort((a, b) => {
    return a[1] - b[1]
  })
  let temp = -Infinity
  console.log(intervals)
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= temp) {
      temp = intervals[i][1]
      count++
    }
  }
  return intervals.length - count
}
// @lc code=end
