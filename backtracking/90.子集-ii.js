/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let ans = []
  nums.sort()
  let len = nums.length
  let setAns = (start, box) => {
    ans.push([...box])
    if (start >= len) {
      return
    }
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      box.push(nums[i])
      ;[nums[start], nums[i]] = [nums[i], nums[start]]
      setAns(i + 1, box)
      ;[nums[start], nums[i]] = [nums[i], nums[start]]
      box.pop()
    }
  }
  setAns(0, [])
  return ans
}
// @lc code=end
