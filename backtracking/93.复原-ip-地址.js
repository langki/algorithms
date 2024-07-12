/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ans = []
  let len = s.length
  let setAns = (i, start, box) => {
    if (box.length === 4 && start >= len) {
      ans.push(box.join('.'))
      return
    }
    if (i >= 4) {
      return
    }
    for (let j = start; j < len; j++) {
      let v = s.slice(start, j + 1)
      if ((v.length > 1 && v.startsWith('0')) || v > 255) {
        continue
      }
      box.push(v)
      setAns(i + 1, j + 1, box)
      box.pop()
    }
  }
  setAns(0, 0, [])
  return ans
}
// @lc code=end
