/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (root === null) {
    return []
  }
  let arr = []
  let setArr = (root) => {
    let ns = root.reduce((t, v) => {
      return t + v.val
    }, 0)
    arr.push(Number(ns / root.length).toFixed(5))
    let l = root.reduce((t, v) => {
      v.left && t.push(v.left)
      v.right && t.push(v.right)
      return t
    }, [])
    l.length && setArr(l)
  }
  setArr([root])
  return arr
}
// @lc code=end
