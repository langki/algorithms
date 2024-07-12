/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let ans = []
  let len = nums.length
  nums.sort()
  console.log(nums)
  let setAns = (i) => {
    if (i === len) {
      ans.push([...nums])
      return
    }
    // let set = new Set()
    for (let j = i; j < len; j++) {
      if (!nums.slice(i, j).includes(nums[j])) {
        // set.add(nums[j])
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        setAns(i + 1)
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  setAns(0)
  return ans
}
// @lc code=end
