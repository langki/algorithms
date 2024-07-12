/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  let symmetric = function (p, q) {
    if (p === null && q === null) {
      return true
    } else if (p === null || q === null) {
      return false
    } else if (p.val !== q.val) {
      return false
    }
    return symmetric(p.left, q.right) && symmetric(p.right, q.left)
  }
  return symmetric(root.left, root.right)
}
// @lc code=end
