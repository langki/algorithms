/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  if (root === null) {
    return 0
  }
  let nums = 0
  let setArr = (root) => {
    if (root.left && root.left.left === null && root.left.right === null) {
      nums += root.left.val
    }
    root.left && setArr(root.left)
    root.right && setArr(root.right)
  }
  setArr(root)

  return nums
}
// @lc code=end
