/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  // 方案一：迭代
  // let prev = null
  // let curr = head
  // while (curr) {
  //     const temp = curr.next
  //     curr.next = prev
  //     prev = curr
  //     curr = temp
  // }
  // return prev

  // 方案二：递归
  //   if (head == null || head.next == null) {
  //     return head
  //   }
  //   const newHead = reverseList(head.next)
  //   head.next.next = head
  //   head.next = null
  //   return newHead

  // 方案三：栈
  let arr = []
  while (head !== null) {
    arr.push(head)
    head = head.next
  }

  if (!arr.length) {
    return null
  }
  let first = arr.pop()
  let temp = first
  while (arr.length) {
    temp.next = arr.pop()
    temp = temp.next
  }
  temp.next = null
  return first
}
// @lc code=end
