// Setting up the array

let array1 = []

function populateArray(x, arr){
    for(i = 0; i < x; i++) {
        arr.push(i + 1)
    }
}

populateArray(1000, array1)

// Function to be time tested

let reverseArray = function(arr) {
    var newArray = []
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}

// Logging array size

console.log(array1.length)

// Timer and timing

let start = new Date()
let hrstart = process.hrtime()

setTimeout(function() {
    // execution time simulated with setTimeout function
    let end = new Date() - start,
    hrend = process.hrtime(hrstart)

    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %d%d', hrend[0], hrend[1])
}, reverseArray(array1))
