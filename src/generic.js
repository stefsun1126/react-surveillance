
// 共用函數
const hasClass = (origin, add) => {
    let reg = new RegExp(`\\b${add}\\b`)
    return reg.test(origin)
}

export const addClass = (origin, add) => {
    if (!hasClass(origin, add)) {
        return `${origin} ${add}`
    }
}

export const removeClass = (origin, add) => {
    let reg = new RegExp(`\\b${add}\\b`)
    return origin.replace(reg, "")

}


export const isUndefined = (value) => {
    if (typeof (value) == "undefined") {
        return true
    } else {
        return false
    }
}


// 共用常數
export const ON_DROP = "拖曳釋放"

export const ON_DOUBLE_ONCLICK = "連續點擊兩下"

