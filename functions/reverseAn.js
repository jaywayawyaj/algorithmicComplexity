const reverseArray = (arr)=> {
    let tempArr = arr.slice(), arrLength = arr.length

    for(let i=0; i< arrLength; i++){
        arr[i] = tempArr.pop()
    }
}

module.exports = reverseArray
