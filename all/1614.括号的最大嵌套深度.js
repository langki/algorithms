/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0
    let cur = 0
    for (const v of s) {
        if (v === '(') {
            cur++
            max = Math.max(max, cur)
        } else if (v === ')') {
            cur--
        }    
    }
    return max
};
// @lc code=end

