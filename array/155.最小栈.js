/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.arr = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr.slice(-1)[0]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return [...this.arr].sort((a, b) => a - b)[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
