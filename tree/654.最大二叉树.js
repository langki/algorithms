/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) {
    return null
  }
  let n = Math.max.apply(null, nums)
  let index = nums.indexOf(n)
  let tree = new TreeNode(n)
  tree.left = constructMaximumBinaryTree(nums.slice(0, index))
  tree.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return tree
}
// @lc code=end
