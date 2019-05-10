const reverseArray = (arr) => {
    let newArray = []
    let i
    let len = arr.length - 1
    
    for (i = len ; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}

module.exports = reverseArray
