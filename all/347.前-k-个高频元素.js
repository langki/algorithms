/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {}
  nums.forEach((v) => {
    if (map[v]) {
      map[v]++
    } else {
      map[v] = 1
    }
  })

  let arr = []
  for (const [i, v] of Object.entries(map)) {
    if (Array.isArray(arr[v])) {
      arr[v].push(Number(i))
    } else if (arr[v] === undefined) {
      arr[v] = [Number(i)]
    }
  }

  let res = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] && arr[i].length) {
      for (let j = 0; j < arr[i].length; j++) {
        const e = arr[i][j]
        if (res.length >= k) {
          return res
        } else if (e !== undefined) {
          res.push(e)
        }
      }
    }
  }
  return res
}
// @lc code=end
