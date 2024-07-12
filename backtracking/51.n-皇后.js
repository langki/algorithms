/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let ans = []
  let setAns = (row, box) => {
    // 满足条件 记录结果
    if (box.length === n) {
      ans.push(
        box.map((v) => {
          let arr = new Array(n).fill('.')
          arr[v] = 'Q'
          return arr.join('')
        })
      )
      return
    }
    if (row >= n) {
      return
    }
    for (let col = 0; col < n; col++) {
      let canNotSet = box.some((c, r) => {
        return c === col || Math.abs(r - row) === Math.abs(c - col)
      })
      if (canNotSet) {
        continue
      }
      box.push(col)
      setAns(row + 1, box)
      box.pop()
    }
  }
  setAns(0, [])
  return ans
}
// @lc code=end
