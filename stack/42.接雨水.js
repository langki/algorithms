/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) {
    return 0
  }

  let res = 0
  let stack = []
  for (let i = 0; i < height.length; i++) {
    let v = height[i]
    if (!stack.length) {
      if (v === 0) {
        continue
      } else {
        stack.push(i)
      }
    } else if (v < height[stack[0]]) {
      stack.push(i)
    } else if (v >= height[stack[0]]) {
      if (i - stack[0] > 1) {
        let l = stack.shift()
        res =
          res +
          (i - l - 1) * height[l] -
          stack.reduce((t, cv) => t + height[cv], 0)
      } else {
        stack.pop()
      }
      stack = [i]
    }
  }

  stack.reverse()
  let newStack = []
  if (stack.length > 2) {
    for (let i = 0; i < stack.length; i++) {
      let v = stack[i]
      if (!newStack.length) {
        if (height[v] === 0) {
          continue
        } else {
          newStack.push(v)
        }
      } else if (height[v] < height[newStack[0]]) {
        newStack.push(v)
      } else if (height[v] >= height[newStack[0]]) {
        if (newStack[0] - v > 1) {
          let l = newStack.shift()
          res =
            res +
            (l - v - 1) * height[l] -
            newStack.reduce((t, cv) => t + height[cv], 0)
          newStack = [v]
        } else {
          newStack.pop()
        }
        newStack = [v]
      }
    }
  }

  return res
}
// @lc code=end
