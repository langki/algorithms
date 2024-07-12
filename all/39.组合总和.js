/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ans = []
  let len = candidates.length
  let setAns = (start, num, box) => {
    if (num === target) {
      ans.push([...box])
      return
    }
    if (num >= target) {
      return
    }
    for (let i = start; i < len; i++) {
      box.push(candidates[i])
      num = num + candidates[i]
      setAns(i, num, box)
      box.pop()
      num = num - candidates[i]
    }
  }
  setAns(0, 0, [])
  return ans
}
// @lc code=end
