/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let slow = 0
  let fast = numbers.length - 1
  while (slow < fast && numbers[slow] + numbers[fast] !== target) {
    if (numbers[slow] + numbers[fast] > target) {
      fast--
    } else {
      slow++
    }
  }
  return [slow + 1, fast + 1]
}
// @lc code=end
