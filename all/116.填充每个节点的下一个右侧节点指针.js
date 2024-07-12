/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root
  }
  let arr = []
  let setArr = (list) => {
    arr.push(list)
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

  arr.forEach((v) => {
    if (v.length > 1) {
      let i = 0
      while (i < v.length) {
        v[i].next = v[i + 1] ? v[i + 1] : null
        i++
      }
    }
  })
  return root
}
// @lc code=end
