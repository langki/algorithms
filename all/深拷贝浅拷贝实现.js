// 学习深拷贝，浅拷贝
const shallowClone = (target) => {
    if (typeof target == 'object' && target !== null) {
        let cloneObj = Array.isArray(target) ? [] : {}
        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {
                cloneObj[key] = target[key]
            }
        }
        return cloneObj
    } else {
        return target
    }
}

const simpleDeepClone = obj => {
    let cloneObj = {}
    for (const key in obj) {
        if (typeof obj[key] == 'object') {
            cloneObj[key] = simpleDeepClone(obj[key])
        } else {
            cloneObj[key] = obj[key]
        }
    }
}

const isComplexDateType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = (obj, hash = new WeakMap()) => {
    if (obj.constructor === Date) 
    return new Date(obj) // 日期对象直接返回一个新的日期对象
    
    if (obj instanceof RegExp)
    return new RegExp(obj) // 正则对象直接返回一个新的正则对象

    // 如果循环引用就用WeakMap解决
    if (hash.has(obj)) return hash.get(obj)
    // 遍历传入参数所有键的特性
    let allDes = Object.getOwnPropertyDescriptors(obj)
    // 继承原型链
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDes)

    hash.set(obj, cloneObj)

    for (const key of Reflect.ownKeys(obj)) {
        cloneObj[key] = (isComplexDateType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]
    }

    return cloneObj
}

