/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums?.length <= 1) {
    return false
  }
  let s = nums.reduce((t, v) => {
    return t + v
  }, 0)
  if (s % 2 == 1) {
    return false
  }
  let v = s >> 1
  console.log(v)

  // 暴力解法  没有使用中间缓存结果
  // let dp = new Set([0])
  // nums.forEach((v) => {
  //   let temp = new Set(dp)
  //   dp.forEach((d) => {
  //     temp.add(d + v)
  //   })
  //   dp = temp
  // })
  // return dp.has(v)

  // 动态规划
  let dp = new Array(v + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    for (let node = v; node - x >= 0; node--) {
      let oldNode = node - x
      if (dp[oldNode]) {
        dp[node] = true
      }
    }
  }
  return dp[v]
}
// @lc code=end
