/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 倒推的话 最后一跳的最大就能保证所用步数最小 倒推到起点(index = 0)所用的步数就是最小步数
  let finalStepIndex = nums.length - 1 // 没倒退一步的终点位置
  let steps = 0 // 倒跳的步数

  // 遍历查找最大的一跳的起点位置就是下一跳的终点位置 同时记录步数加1
  while (finalStepIndex > 0) {
    steps++
    let i = 0
    for (; i < finalStepIndex; i++) {
      if (nums[i] >= finalStepIndex - i) {
        break
      }
    }
    finalStepIndex = i
  }

  return steps
}
// @lc code=end
