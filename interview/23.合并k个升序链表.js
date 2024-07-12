/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // @todo 堆
  if (lists.length === 0) {
    return null
  }
  return mergeLists(lists, 0, lists.length - 1)
}
//归并排序的思路 二分的思路
function mergeLists(lists, start, end) {
  if (start === end) {
    return lists[start]
  }
  // 通过位运算计算中间值
  const mid = start + ((end - start) >> 1)

  // 通过二分可以减少合并次数
  const leftList = mergeLists(lists, start, mid)
  const rightList = mergeLists(lists, mid + 1, end)
  return merge(leftList, rightList)
}

// 合并两个升序链表
function merge(head1, head2) {
  let flag = new ListNode(0)
  let p = flag
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      p.next = head1
      head1 = head1.next
    } else {
      p.next = head2
      head2 = head2.next
    }
    p = p.next
  }
  p.next = head1 ? head1 : head2
  return flag.next
}
// @lc code=end
