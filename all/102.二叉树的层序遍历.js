/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  let arr = []
  arr.push([root.val])
  let setArr = (list) => {
    arr.push(
      list.reduce((t, v) => {
        if (v) {
          t.push(v.val)
        }
        return t
      }, [])
    )
    let brr = list.reduce((t, v) => {
      if (v.left) {
        t.push(v.left)
      }
      if (v.right) {
        t.push(v.right)
      }
      return t
    }, [])
    if (brr.length) {
      setArr(brr)
    }
  }
  if (root.left && root.right) {
    setArr([root.left, root.right])
  } else if (root.right) {
    setArr([root.right])
  } else if (root.left) {
    setArr([root.left])
  }
  return arr
}
// @lc code=end
