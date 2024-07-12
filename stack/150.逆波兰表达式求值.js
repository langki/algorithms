/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    const v = tokens[i]
    if (v === '+') {
      let a = Number(stack.pop())
      let b = Number(stack.pop())
      stack.push(a + b)
    } else if (v === '-') {
      let a = Number(stack.pop())
      let b = Number(stack.pop())
      stack.push(b - a)
    } else if (v === '*') {
      let a = Number(stack.pop())
      let b = Number(stack.pop())
      stack.push(a * b)
    } else if (v === '/') {
      let a = Number(stack.pop())
      let b = Number(stack.pop())
      let c = b / a
      if (c >= 0) {
        stack.push(Math.floor(c))
      } else {
        stack.push(-Math.floor(Math.abs(c)))
      }
    } else {
      stack.push(v)
    }
  }
  return stack[0]
}
// @lc code=end
