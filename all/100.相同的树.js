/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  } else if (p.val !== q.val) {
    return false
  }

  // let bol = true
  // const f = (p, q) => {
  //   if (q.val !== p.val) {
  //     bol = false
  //   }
  //   if (p.left && q.left) {
  //     if (p.left.val === q.left.val) {
  //       f(p.left, q.left)
  //     } else {
  //       bol = false
  //     }
  //   } else if (p.left || q.left) {
  //     bol = false
  //   }
  //   if (p.right && q.right) {
  //     if (p.right.val === q.right.val) {
  //       f(p.right, q.right)
  //     } else {
  //       bol = false
  //     }
  //   } else if (p.right || q.right) {
  //     bol = false
  //   }
  // }
  // f(p, q)
  // return bol

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end
