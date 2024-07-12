const arr = require('./arr')
let arrary = require('./arr')
// arr.sort((a, b) => a - b)
// console.log(arrary)

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let s = 0; s < arr.length - i - 2; s++) {
      if (arr[s] > arr[s + 1]) {
        ;[arr[s], arr[s + 1]] = [arr[s + 1], arr[s]]
      }
    }
  }

  return arr
}
// console.log('冒泡排序: ', bubbleSort(arr))

// 快速排序（二分排序）
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let left = []
  let cur = arr.splice(Math.floor(arr.length / 2), 1)[0]
  let right = []
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    if (cur > v) {
      left.push(v)
    } else {
      right.push(v)
    }
  }
  return quickSort(left).concat(cur, quickSort(right))
}
// console.log('快速排序: ', quickSort(arr))

// 原地排序
function quick1(arr, start, end) {
  // 双指针
  let init = start
  let flag = arr[init]
  start++
  while (start <= end) {
    while (arr[end] > flag) {
      end--
    }
    while (arr[start] <= flag) {
      start++
    }
    if (start < end) {
      ;[arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  ;[arr[init], arr[start - 1]] = [arr[start - 1], arr[init]]
  return start
}
function quickSort1(arr, start, end) {
  if (start < end) {
    let index = quick1(arr, start, end) //标志位的值
    quickSort1(arr, start, index - 1)
    quickSort1(arr, index, end)
  }
  return arr
}

console.log('原地快速排序', quickSort1(arrary, 0, arrary.length - 1))
