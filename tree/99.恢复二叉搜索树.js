/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // 拉平成数组
  let arr = []
  let first
  let second
  let buildArr = (root) => {
    if (root) {
      buildArr(root.left)
      arr.push(root)
      buildArr(root.right)
    }
  }
  buildArr(root)
  // 判断数组是非递增
  for (let i = 0; i < arr.length - 1; i++) {
    const v = arr[i]
    const w = arr[i + 1]
    if (v.val > w.val) {
      // 1 3 2 4 5
      // 1 5 3 4 2
      if (!first) {
        first = v
      }
      second = w
    }
  }
  let temp = first.val
  first.val = second.val
  second.val = temp
}
// @lc code=end
