/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var dp = new Array(100 + 1).fill([])
var uniquePaths = function (m, n) {
  // 动态规划 空间优化
  let dp = new Array(m).fill([1])
  dp[0] = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
  // 递归 可能会超时
  // if (m === 1 || n === 1) {
  //   return 1
  // } else {
  //   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  // }
  // 记忆化递归 （备忘录）
  // if (dp[m][n]) {
  //   return dp[m][n]
  // }
  // let recursive = (m, n) => {
  //   if (m == 1 || n == 1) {
  //     dp[m][n] = 1
  //   } else {
  //     dp[m][n] = recursive(m - 1, n) + recursive(m, n - 1)
  //   }
  //   return dp[m][n]
  // }
  // recursive(m, n)
  // return dp[m][n]
  // 动态规划 打表
}
// @lc code=end
