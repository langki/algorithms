/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length || strs[0] == '') {
    return ''
  }
  if (strs.length == 1) {
    return strs[0]
  }
  let str = strs.splice(0, 1)[0]
  let n = 0
  let arr = []
  while (n < str.length && str.slice(n, n + 1)) {
    let s = str.slice(n, n + 1)
    for (let v of strs) {
      if (v.slice(n, n + 1) !== s) {
        return arr.join('')
      }
    }
    arr.push(s)
    n++
  }
  return arr.join('')
}
// @lc code=end
