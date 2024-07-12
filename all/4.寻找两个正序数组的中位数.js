/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 暴力解法
  //   let len = nums1.length + nums2.length;
  //   let mid = (nums1.length + nums2.length) / 2;
  //   let arr = [];
  //   let i = 0;
  //   let fun = () => {
  //     if (nums1[0] == undefined) {
  //       arr.push(nums2[0]);
  //       nums2.shift();
  //     } else if (nums2[0] == undefined) {
  //       arr.push(nums1[0]);
  //       nums1.shift();
  //     } else if (nums1[0] > nums2[0]) {
  //       arr.push(nums2[0]);
  //       nums2.shift();
  //     } else {
  //       arr.push(nums1[0]);
  //       nums1.shift();
  //     }
  //     i++;
  //   };
  //   if (len % 2) {
  //     while (i < mid) {
  //       fun();
  //     }
  //     return arr[arr.length - 1];
  //   } else {
  //     while (i <= mid) {
  //       fun();
  //     }
  //     return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
  //   }

  // 二分查找法
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;
  while (low <= high) {
    const i = low + Math.floor((high - low) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
    const minRightA = i === m ? Infinity : nums1[i];
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
    const minRightB = j === n ? Infinity : nums2[j];

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
      return (m + n) % 2 === 1
        ? Math.max(maxLeftA, maxLeftB)
        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
    } else if (maxLeftA > minRightB) {
      high = i - 1;
    } else {
      low = low + 1;
    }
  }
};
// @lc code=end
