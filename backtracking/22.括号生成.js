/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = []
  let setAns = (left, right, str) => {
    if (str.length === n * 2) {
      ans.push(str)
      return
    }
    if (left < n) {
      setAns(left + 1, right, str + '(')
    }
    if (right < left) {
      setAns(left, right + 1, str + ')')
    }
  }
  setAns(0, 0, '')
  return ans
}
// @lc code=end
