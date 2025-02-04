/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) {
    return 0
  }

  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  } else if (root.left) {
    return minDepth(root.left) + 1
  } else if (root.right) {
    return minDepth(root.right) + 1
  } else {
    return 1
  }
}
// @lc code=end
