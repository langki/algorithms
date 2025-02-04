/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // let arr = []
  // while (head) {
  //   arr.push(head.val)
  //   head = head.next
  // }

  // let sortedArrayToBST = function (nums) {
  //   if (!nums.length) {
  //     return null
  //   }
  //   const mid = Math.floor(nums.length / 2)
  //   const root = new TreeNode(nums[mid])
  //   root.left = sortedArrayToBST(nums.slice(0, mid))
  //   root.right = sortedArrayToBST(nums.slice(mid + 1))
  //   return root
  // }
  // return sortedArrayToBST(arr)

  // 快慢指针
  function travese(head, tail) {
    if (head === tail) {
      return null
    }
    let slow = (fast = head)
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next
      fast = fast.next.next
    }
    let root = new TreeNode(slow.val)
    root.left = travese(head, slow)
    root.right = travese(slow.next, tail)
    return root
  }
  return travese(head, null)
}
// @lc code=end
