/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 方法一：条件判断
  // let pathArr = []
  // let temp = []
  // let arr = path.split('')
  // for (let i = 0; i < arr.length; i++) {
  //   const v = arr[i]
  //   if (v === '.') {
  //     if (arr.slice(i, i + 2).join('') === './') {
  //       i++
  //     } else if (arr.slice(i, i + 3).join('') === '../') {
  //       i = i + 1
  //       pathArr.pop()
  //       pathArr.pop()
  //     } else if (
  //       arr.slice(i, i + 2).join('') === '..' &&
  //       arr[i + 2] === undefined
  //     ) {
  //       i++
  //       pathArr.pop()
  //       pathArr.pop()
  //     } else if (arr[i + 1] === undefined) {
  //       continue
  //     } else {
  //       while (i < arr.length && arr[i] !== '/') {
  //         temp.push(arr[i])
  //         i++
  //       }
  //       pathArr.push(temp.join(''))
  //       temp = []
  //       i--
  //     }
  //   } else if (v === '/') {
  //     if (pathArr.slice(-1)[0] !== '/') {
  //       pathArr.push(v)
  //     }
  //   } else {
  //     while (i < arr.length && arr[i] !== '/') {
  //       temp.push(arr[i])
  //       i++
  //     }
  //     pathArr.push(temp.join(''))
  //     temp = []
  //     i--
  //   }
  // }
  // if (pathArr[pathArr.length - 1] === '/') {
  //   pathArr.pop()
  // }
  // if (pathArr[0] !== '/') {
  //   pathArr.unshift('/')
  // }
  // return pathArr.join('')

  // 方法二：分割法
  let stack = []
  let paths = path.split('/')
  for (let i = 0; i < paths.length; i++) {
    const v = paths[i]
    if (v === '..') {
      stack.pop()
    } else if (v && v !== '.') {
      stack.push(v)
    }
  }
  return '/' + stack.join('/')
}
// @lc code=end
