/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = (slow = head)
  let arr = []
  while (fast.next && fast.next.next) {
    arr.push(slow.val)
    fast = fast.next.next
    slow = slow.next
  }
  if (fast.next) {
    arr.push(slow.val)
  }
  while (slow.next) {
    if (slow.next.val !== arr.pop()) {
      return false
    }
    slow = slow.next
  }
  return true
}
// @lc code=end
