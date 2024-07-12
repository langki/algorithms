/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 1.循环
  //   let len = 0
  //   let header = head
  //   while (header != null) {
  //     len++
  //     header = header.next
  //   }
  //   let last = len - n
  //   if (last == 0) {
  //     return head.next
  //   }
  //   let pre = head
  //   for (let i = 0; i < last - 1; i++) {
  //     pre = pre.next
  //   }
  //   pre.next = pre.next.next
  //   return head
  // 2.双指针
  let fast = head
  let slow = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (fast == null) {
    return head.next
  }

  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next
  return head
}
// @lc code=end
