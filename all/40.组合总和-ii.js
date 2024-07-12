/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let ans = []
  let len = candidates.length
  candidates = candidates.sort()
  let setAns = (start, num, box) => {
    if (num === target) {
      ans.push([...box])
      return
    }
    if (num >= target) {
      return
    }
    for (let i = start; i < len; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      }
      box.push(candidates[i])
      num = num + candidates[i]
      // ;[candidates[i], candidates[start]] = [candidates[start], candidates[i]]
      setAns(i + 1, num, box)
      // ;[candidates[i], candidates[start]] = [candidates[start], candidates[i]]
      num = num - candidates[i]
      box.pop()
    }
  }
  setAns(0, 0, [])
  return ans
}
// @lc code=end
