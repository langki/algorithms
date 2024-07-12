/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let ans = new Array(nums1.length).fill(-1)

  let obj = {}
  nums1.forEach((v, i) => {
    obj[v] = i
  })

  let stack = []
  for (const v of nums2) {
    if (stack.length) {
      while (stack[stack.length - 1] < v) {
        let t = stack.pop()
        if (obj[t] !== undefined) {
          ans[obj[t]] = v
        }
      }
    }
    stack.push(v)
  }

  return ans
}
// @lc code=end
