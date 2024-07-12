/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let arr = []
  let ln = head
  for (let i = 1; i < left; i++) {
    ln = ln.next
  }
  let start = ln
  for (let index = left - 1; index < right; index++) {
    arr.push(ln.val)
    ln = ln.next
  }
  for (let index = left - 1; index < right; index++) {
    start.val = arr.pop()
    start = start.next
  }
  return head
}
// @lc code=end
