/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = s.split('')
  let stackArr = []
  let left = ['(', '[', '{']
  let right = [')', ']', '}']
  arr.forEach((v) => {
    if (
      right.indexOf(v) !== -1 &&
      stackArr.slice(-1)[0] == left[right.indexOf(v)]
    ) {
      if (stackArr.length) {
        stackArr.pop()
      }
    } else {
      stackArr.push(v)
    }
  })
  return !stackArr.length
}
// @lc code=end
