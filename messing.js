// Setting up the array
function populateArray(x, arr){
    for(i = 0; i < x; i++) {
        arr.push(i + 1)
    }
}

// Function to be time tested

const reverseArray = function(arr) {
    var newArray = []
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}

let i


function y() {

    for(i = 5000; i <= 100000; i += 5000) {

        let array1 = []

        populateArray(i, array1)

        let hrstart = process.hrtime()

        setTimeout(function() {
            // execution time simulated with setTimeout function
            hrend = process.hrtime(hrstart)

            console.info('%d%d', hrend[0], hrend[1])
        }, reverseArray(array1))
    }
}

y()
