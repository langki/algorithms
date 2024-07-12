/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  // 解法一
  // if (root === null) {
  //   return 0
  // }
  // let num = 0
  // // 求最大深度
  // let getMaxDeep = (root) => {
  //   if (root === null) {
  //     return 0
  //   }
  //   let n = 0
  //   let setN = (list) => {
  //     n++
  //     let l = list.reduce((t, v) => {
  //       v.left && t.push(v.left)
  //       v.right && t.push(v.right)
  //       return t
  //     }, [])
  //     l.length && setN(l)
  //   }
  //   setN([root])
  //   return n
  // }
  // // 经过某节点的最大路径
  // let setNum = (root) => {
  //   let n = getMaxDeep(root.left) + getMaxDeep(root.right) + 1
  //   if (n > num) {
  //     num = n
  //   }
  //   root.left && setNum(root.left)
  //   root.right && setNum(root.right)
  // }
  // setNum(root)
  // return num - 1
  // 解法二: 递归
  let len = 0
  function dfs(root) {
    if (root === null) {
      return 0
    }
    let left = dfs(root.left)
    let right = dfs(root.right)
    len = Math.max(len, left + right)

    return Math.max(left, right) + 1
  }
  dfs(root)
  return len
}
// @lc code=end
