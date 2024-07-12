/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  if (root === null) {
    return []
  }
  // 先层序遍历 打平成二维数组
  let arr = []
  let setArr = (list) => {
    arr.push(
      list.reduce((t, v) => {
        t.push(v.val)
        return t
      }, [])
    )
    let l = list.reduce((t, v) => {
      v.left && t.push(v.left)
      v.right && t.push(v.right)
      return t
    }, [])
    l.length && setArr(l)
  }
  setArr([root])

  // 返回二维数组的最后一个值组成的数组
  return arr.reduce((t, v) => {
    t.push(v.pop())
    return t
  }, [])
}
// @lc code=end
