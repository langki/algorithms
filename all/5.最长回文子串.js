/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 动态规划解法  dp[i][j] = s[i] === s[j] && (dp[i + 1][j - 1] ||  j - i < 3)
  // 空间换时间
  let len = s.length
  if (len < 2) {
    return s
  }
  let dp = Array.from(new Array(len), () => new Array(len).fill(undefined))
  let begin = 0
  let maxLen = 1

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      let j = i + L - 1
      if (j >= len) {
        break
      }
      dp[i][j] = s[i] === s[j] && (dp[i + 1][j - 1] || j - i < 3)
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.substring(begin, begin + maxLen)
}
// @lc code=end
