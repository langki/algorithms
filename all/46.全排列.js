/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = []
  let len = nums.length
  let setAns = (i) => {
    if (i === len) {
      ans.push([...nums])
      return
    }
    for (let j = i; j < len; j++) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      setAns(i + 1)
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  setAns(0)
  return ans
}
// @lc code=end
