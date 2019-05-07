// Setting up the array

let array1 = []

function populateArray(x, arr){
    for(i = 0; i < x; i++) {
        arr.push(i + 1)
    }
}

populateArray(100000, array1)

// Function to be time tested

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Logging array size

console.log(array1.length)

// Timer and timing

let hrstart = process.hrtime()

setTimeout(function() {
    // execution time simulated with setTimeout function
    hrend = process.hrtime(hrstart)

    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}, shuffle(array1))
