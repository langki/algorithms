/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length
  if (n === 0) return 0 //长度为0直接返回
  let res = 0
  let arr = new Array(n).fill(1) //设定初始值
  for (let i = 0; i < n; i++) {
    //确定以nums[i]为结尾的递增序列长度
    for (let j = 0; j < i; j++) {
      //遍历i前的下标
      //如果nums[j] < nums[i]，那么可以将nums[j]当作以nums[i]为结尾的递增序列的倒数第二个数
      //以nums[i]为结尾的递增序列长度等于以nums[j]为结尾的递增序列长度 + 1
      //找出所有可能中最长的长度
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
    //更新最大值，arr[i]最长，比如[5,6,7,8,9,4,3,2,1],最大值出现在前面部分
    res = Math.max(res, arr[i])
  }
  return res
}
// @lc code=end
