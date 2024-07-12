/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

import { values } from 'lodash'

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let treeStack = []
  let treeToStack = (tree) => {
    if (tree !== null) {
      treeStack.push(tree)
      if (tree.left !== null) {
        treeToStack(tree.left)
      }
      if (tree.right !== null) {
        treeToStack(tree.right)
      }
    }
  }
  treeToStack(root)

  for (let i = 0; i < treeStack.length; i++) {
    let cur = treeStack[i]
    let prev = treeStack[i - 1]
    if (prev) {
      prev.right = cur
      prev.left = null
    }
  }
}
// @lc code=end
