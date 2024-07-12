/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (root === null) {
    return []
  }
  let arr = []
  let setCount = (list) => {
    arr.push(
      Math.max.apply(
        null,
        list.map((v) => v.val)
      )
    )
    let l = list.reduce((t, v) => {
      v.left && t.push(v.left)
      v.right && t.push(v.right)
      return t
    }, [])
    l.length && setCount(l)
  }
  setCount([root])

  return arr
}
// @lc code=end
