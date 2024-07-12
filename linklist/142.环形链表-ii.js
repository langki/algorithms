/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  //     a     --b--*--
  // ---------|        |
  //           --------
  // 1.第一次相遇，slow = nb
  // 2.a+nb = 入口点
  // 3.slow再走a = 入口 = head走到入口 = a
  // 4.由3得出，起始距离入口 = 第一次相遇位置 + a
  if (!head || !head.next) {
    return null
  }
  let slow = (fast = head)
  let isO = false
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      isO = true
      break
    }
  }
  if (!isO) {
    return null
  }
  let prev = head
  while (prev !== slow) {
    prev = prev.next
    slow = slow.next
  }
  return prev
}
// @lc code=end
