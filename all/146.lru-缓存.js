/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */
// 1.map.keys() 是一个链表的数据结构
// 2.Map数据结构set添加的数据会放到map.keys()链表数据结构的最后
// 3.map.keys().next().value能拿到map最先添加的数据项

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map()
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let v = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, v)
    return v
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key, value)
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
