/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board?.length) {
    return false
  }
  let ans = false
  let r_len = board.length
  let c_len = board[0].length
  let w_len = word.length

  let setAns = (row, col, box) => {
    if (box.length === w_len) {
      let s = box
        .map((v) => {
          let arr_i = v.split(',')
          return board[arr_i[0]][arr_i[1]]
        })
        .join('')
      if (s === word) {
        ans = true
      }
      return
    }
    if (box.length >= w_len || box.length >= r_len * c_len) {
      return
    }
    if (row === undefined && col === undefined) {
      for (let ri = 0; ri < r_len; ri++) {
        for (let ci = 0; ci < c_len; ci++) {
          if (board[ri][ci] == word.slice(0, 1)) {
            box.push([ri, ci].join())
            setAns(ri, ci, box)
            box.pop()
          }
        }
      }
    } else {
      let r, c
      let cur = word.slice(box.length, box.length + 1)
      // 上
      r = row - 1
      c = col
      if (
        r >= 0 &&
        r < r_len &&
        !box.includes([r, c].join()) &&
        cur === board[r][c]
      ) {
        box.push([r, c].join())
        setAns(r, c, box)
        box.pop()
      }
      // 下
      r = row + 1
      c = col
      if (
        r >= 0 &&
        r < r_len &&
        !box.includes([r, c].join()) &&
        cur === board[r][c]
      ) {
        box.push([r, c].join())
        setAns(r, c, box)
        box.pop()
      }
      // 左
      r = row
      c = col - 1
      if (
        c >= 0 &&
        c < c_len &&
        !box.includes([r, c].join()) &&
        cur === board[r][c]
      ) {
        box.push([r, c].join())
        setAns(r, c, box)
        box.pop()
      }
      // 右
      r = row
      c = col + 1
      if (
        c >= 0 &&
        c < c_len &&
        !box.includes([r, c].join()) &&
        cur === board[r][c]
      ) {
        box.push([r, c].join())
        setAns(r, c, box)
        box.pop()
      }
    }
  }
  setAns(undefined, undefined, [])

  return ans
}
// @lc code=end
