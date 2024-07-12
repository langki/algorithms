/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 贪心  用最小的饼干尽可能满足胃口更大的孩子
  g.sort((a, b) => b - a)
  console.log(g)
  s.sort()
  let nums = 0
  for (let i = 0; i < s.length; i++) {
    if (g.length) {
      for (let j = 0; j < g.length; j++) {
        if (s[i] >= g[j]) {
          nums++
          g.splice(j, 1)
          break
        }
      }
    } else {
      break
    }
  }
  return nums

  // 方法二：贪心 用最大的饼干满足最大的孩子，如果无法满足说明这个该小孩无法得到满足
}
// @lc code=end
