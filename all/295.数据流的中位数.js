/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

var MedianFinder = function () {
  this.arr = []
  this.isOdd = false
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.isOdd = !this.isOdd
  if (this.arr.length) {
    for (const [i, v] of this.arr.entries()) {
      if (v > num) {
        this.arr.unshift(num)
        break
      }
      if (
        v <= num &&
        (this.arr[i + 1] === undefined || this.arr[i + 1] >= num)
      ) {
        this.arr.splice(i + 1, 0, num)
        console.log(this.arr)
        break
      }
    }
  } else {
    this.arr.push(num)
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let mid = this.arr.length >> 1
  if (this.isOdd) {
    return this.arr[mid]
  } else {
    return (this.arr[mid] + this.arr[mid - 1]) / 2
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
