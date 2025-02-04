/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // if (root === null) {
  //   return new TreeNode(val)
  // }
  // let setV = (root) => {
  //   if (root.val > val) {
  //     if (root.left) {
  //       setV(root.left)
  //     } else {
  //       root.left = new TreeNode(val)
  //       return
  //     }
  //   }
  //   if (root.val < val) {
  //     if (root.right) {
  //       setV(root.right)
  //     } else {
  //       root.right = new TreeNode(val)
  //       return
  //     }
  //   }
  // }
  // setV(root)
  // return root

  if (root === null) {
    return new TreeNode(val)
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val)
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val)
  }
  return root
}
// @lc code=end
