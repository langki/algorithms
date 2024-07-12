/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  //动态规划解法
  //
  if (p.startsWith('.')) {
    p = p.slice(1)
    s = s.slice(1)
  }
  if (s === p) {
    return true
  }

  let strArr = p.split(/\.\*|\.|\*/).filter((v) => {
    return v
  })
  let regArr = p.split(/[a-z]+/).filter((v) => {
    return v
  })
}
// @lc code=end
