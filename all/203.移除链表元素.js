/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next
  }
  if (!head) {
    return head
  }
  let fast = head
  while (fast.next) {
    if (fast.next.val == val) {
      fast.next = fast.next.next
    } else {
      fast = fast.next
    }
  }
  return head
}
// @lc code=end
