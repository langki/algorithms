/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (!n || !k) {
    return []
  }
  let answers = []

  let setAns = (i, start, box) => {
    if (box.length === k) {
      answers.push([...box])
      return
    }
    if (i >= k) {
      return
    }
    for (let j = start; j <= n; j++) {
      box.push(j)
      setAns(i + 1, j + 1, box)
      box.pop()
    }
  }
  setAns(0, 1, [])

  return answers
}
// @lc code=end
