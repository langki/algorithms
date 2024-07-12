/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // let stack = []
  // let arr = s.split('')
  // for (let i = 0; i < arr.length; i++) {
  //   const v = arr[i]
  //   if (v === stack[stack.length - 1]) {
  //     stack.pop()
  //   } else {
  //     stack.push(v)
  //   }
  // }
  // return stack.join('')
  let stack = []
  for (const v of s) {
    if (v === stack[stack.length - 1]) {
      stack.pop()
      continue
    }
    stack.push(v)
  }
  return stack.join('')
}
// @lc code=end
