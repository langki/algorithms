/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // if (!head || !head.next) {
  //   return false
  // }
  // let arr = []
  // let h = head
  // while (h) {
  //   if (arr.includes(h)) {
  //     return true
  //   } else {
  //     arr.push(h)
  //   }
  //   h = h.next
  // }
  // return false
  // 跑圈  如果是环形则终会相遇
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
// @lc code=end
