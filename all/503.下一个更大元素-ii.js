/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let res = new Array(nums.length).fill(-1)
  let stack = []
  nums.forEach((v, i) => {
    while (stack.length && stack[stack.length - 1].v < v) {
      res[stack.pop().i] = v
    }
    stack.push({
      v: v,
      i: i,
    })
  })

  for (const v of nums) {
    if (stack.length) {
      while (stack.length && stack[stack.length - 1].v < v) {
        res[stack.pop().i] = v
      }
    } else {
      break
    }
  }

  return res
}
// @lc code=end
