/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 先算长度再找中点
  // let size = 0
  // let h = head
  // while (h) {
  //   size++
  //   h = h.next
  // }
  // let middle = Math.floor(size / 2) + 1
  // for (let i = 0; i < middle - 1; i++) {
  //   head = head.next
  // }
  // return head
  let slow = (fast = head)
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
// @lc code=end
