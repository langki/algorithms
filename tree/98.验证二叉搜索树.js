/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  // 拉平成数组
  let arr = []
  let buildArr = (root) => {
    if (root) {
      buildArr(root.left)
      arr.push(root.val)
      buildArr(root.right)
    }
  }
  buildArr(root)
  // 判断数组是非递增
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    const w = arr[i + 1]
    if (w !== undefined && v >= w) {
      return false
    }
  }
  return true
}
// @lc code=end
