/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //   let str = ",," + nums.join(",,") + ",,";
  //   let reg = new RegExp("," + val + ",", "g");
  //   let arrStr = str.replaceAll(reg, ",");
  //   let num = arrStr
  //     .replace(/^,+|,+$/g, "")
  //     .replace(/,+/g, ",")
  //     .split(",");
  //   console.log(num, num.length);
  //   console.log(nums, val);
  //   return num.length;
  // 以上方法使用了额外的数组空间,不符合题目要求
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === val) {
      nums.splice(index, 1);
      index--;
    }
  }
  return nums.length;
};
// @lc code=end
