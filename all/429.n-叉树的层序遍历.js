/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  let arr = []
  let setArr = (list) => {
    arr.push(list.map((v) => v.val))
    let l = list.reduce((t, v) => {
      return [...t, ...(v.children || [])]
    }, [])
    l.length && setArr(l)
  }
  setArr([root])

  return arr
}
// @lc code=end
