/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // return [...new Set(nums1.filter((v) => nums2.includes(v)))]
  nums1 = [...new Set(nums1)]
  let arr = []
  nums1.forEach((v) => {
    if (nums2.includes(v)) {
      arr.push(v)
    }
  })
  return arr
}
// @lc code=end
