// Setting up the array

let array1 = []

function populateArray(x, arr){
    for(i = 0; i < x; i++) {
        arr.push(i + 1)
    }
}

populateArray(5000, array1)

// Function to be time tested

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
  }
  return arr;
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
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}, reverseArrayInPlace(array1))
