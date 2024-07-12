/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // (i,j)位置的最小路径数字和为dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1])
  let m = grid.length
  n = grid[0].length
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  dp[0] = new Array(n + 1).fill(Infinity)
  dp.forEach((v) => {
    v[0] = Infinity
  })
  dp[1][1] = grid[0][0]
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == 1 && j == 1) {
        continue
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + grid[i - 1][j - 1],
          dp[i][j - 1] + grid[i - 1][j - 1]
        )
      }
    }
  }
  return dp[m][n]
}
// @lc code=end
