/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 从‘所有’二字，以及子集可以确定使用回溯算法
  // 1个重点： 第i个人怎么选
  // 3个条件： 什么样的条件是想要的 后面的人还有选项吗  第一个人的宝石是什么样的
  // 去重问题：不能包含重复子集
  let answers = []
  let setAns = (i, start, box) => {
    answers.push([...box])
    if (i >= nums.length) {
      return
    }
    for (let j = start; j < nums.length; j++) {
      if (!box.includes(nums[j])) {
        box.push(nums[j])
        setAns(i + 1, j + 1, box)
        box.pop()
      }
    }
  }
  setAns(0, 0, [])

  return answers
}
// @lc code=end
