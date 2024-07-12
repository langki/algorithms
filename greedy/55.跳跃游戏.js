/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) {
    return true
  }
  // 在（base ~ curmaxlenIndex]区间找到一个元素（位置是i）使得 i + nums[i]最大，如果该最大值大于等于nums - 1那么可以跳到最后一个下标
  // 当前能够跳跃的最远位置，当前位置是curmaxlenIndex = nums[0]
  let curmaxlenIndex = nums[0]
  // 上一跳的最远位置
  let base = 0
  // while终止条件 i + nums[i]的最大值不大于curmaxlenIndex
  while (curmaxlenIndex > base) {
    let maxStepindex = 0
    for (let i = base + 1; i <= curmaxlenIndex; i++) {
      maxStepindex = i + nums[i] > maxStepindex ? i + nums[i] : maxStepindex
    }
    if (maxStepindex >= nums.length - 1) {
      return true
    }
    base = curmaxlenIndex
    curmaxlenIndex = maxStepindex
  }

  return false
}
// @lc code=end
