const reverseArray = (arr) => {
    let newArray = [], len = arr.length, i

    for(i = 0; i < len; i++) {
        newArray.push(arr.pop())
    }
}

module.exports = reverseArray
