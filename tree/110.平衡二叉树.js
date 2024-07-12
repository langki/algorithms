/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (root === null) {
    return true
  }

  // 计算二叉树最大深度
  let maxDepth = function (root) {
    if (root == null) {
      return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  }

  // 左右两个子树的高度差的绝对值不超过 1
  let num = Math.abs(maxDepth(root.left) - maxDepth(root.right))
  if (num > 1) {
    return false
  }

  // 每个节点都要做判断
  return isBalanced(root.left) && isBalanced(root.right)
}
// @lc code=end
