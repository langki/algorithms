/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
var searchBST = function (root, val) {
  // let a = null
  // let findV = (root) => {
  //   if (root) {
  //     if (root.val === val) {
  //       a = root
  //       return
  //     }
  //     findV(root.left)
  //     findV(root.right)
  //   }
  // }
  // findV(root)
  // return a || null

  if (root === null) {
    return null
  }
  if (root.val === val) {
    return root
  } else if (root.val > val) {
    return searchBST(root.left, val)
  } else if (root.val < val) {
    return searchBST(root.right, val)
  }
}
// @lc code=end
