/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return []
  }
  const ds = [
    '',
    '',
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ]
  let answer = []
  let len = digits ? digits.length : 0

  let setAns = (i, s) => {
    if (s.length === len) {
      answer.push(s.join(''))
    }
    if (i >= len) {
      return
    }
    ds[digits.charAt(i)].forEach((v) => {
      s.push(v)
      setAns(i + 1, s)
      s.pop()
    })
  }
  setAns(0, [])

  return answer
}
// @lc code=end
