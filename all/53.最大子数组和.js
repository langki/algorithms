/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 解法一 分段解法
  // let ret = -Infinity
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   count += nums[i]
  //   if (count > ret) {
  //     ret = count
  //   }
  //   if (count < 0) {
  //     count = 0
  //   }
  // }
  // return ret

  // 解法二 动态规划
  // dp[i】i之前以nums[i结尾的数组，最大连续和是dp[i]
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let ret = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    ret = Math.max(dp[i], ret)
  }
  return ret
  // 解法三： 回溯  超时了  相当于暴力解
  // if (nums.length == 1) {
  //   return nums[0]
  // }
  // let max = -Infinity
  // let setMax = (start, count, box) => {
  //   if (box.length) {
  //     max = count > max ? count : max
  //   }
  //   if (start >= nums.length) {
  //     return
  //   }
  //   if (box.length) {
  //     count = count + nums[start]
  //     box.push(nums[start])
  //     setMax(start + 1, count, box)
  //     count = count - nums[start]
  //     box.pop()
  //   } else {
  //     for (let i = 0; i < nums.length; i++) {
  //       count = count + nums[i]
  //       box.push(nums[i])
  //       setMax(i + 1, count, box)
  //       count = count - nums[i]
  //       box.pop()
  //     }
  //   }
  // }
  // setMax(0, 0, [])
  // return max
}
// @lc code=end
