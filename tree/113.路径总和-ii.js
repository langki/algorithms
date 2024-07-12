/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return []
  }

  // 求出所有种路径和
  let arr = []
  let countSum = (root, num) => {
    if (root.left === null && root.right === null) {
      arr.push([...num, root.val])
    }
    if (root.left !== null) {
      countSum(root.left, [...num, root.val])
    }
    if (root.right !== null) {
      countSum(root.right, [...num, root.val])
    }
  }
  countSum(root, [])

  return arr.filter((v) => {
    return (
      targetSum ===
      v.reduce((t, n) => {
        t = t + n
        return t
      }, 0)
    )
  })
}
// @lc code=end
