/*
 * @lc app=leetcode.cn id=1472 lang=javascript
 *
 * [1472] 设计浏览器历史记录
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.stack = [homepage]
  this.curIndex = 0
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.stack = [...this.stack.slice(0, this.curIndex + 1), url]
  this.curIndex = this.stack.length - 1
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (steps >= this.curIndex) {
    this.curIndex = 0
  } else {
    this.curIndex = this.curIndex - steps
  }
  return this.stack[this.curIndex]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (steps <= this.stack.length - 1 - this.curIndex) {
    this.curIndex = this.curIndex + steps
  } else {
    this.curIndex = this.stack.length - 1
  }
  return this.stack[this.curIndex]
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
