// csv automation

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'arraysize', title: 'Array Size'},
    {id: 'time', title: 'Time'}
  ]
});

let data = []

// populate array

const populateArray = (x, arr) => {
    for(i = 0; i < x; i++) {
        arr.push(i + 1)
    }
}

// function to test

const reverseArray = (arr) => {
    var newArray = []
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}

// const reverseArray = (arr) => {
//     return arr.reverse()
// }

// timing code

const timer = (func, input) => {

    let medianArray = []
    /* any boilerplate code you want to have happen before the timer starts, perhaps copying a variable so it isn't mutated */

    for (let i = 0; i <= 100; i++) {
      let start = process.hrtime()
          func(input)
          end = process.hrtime(start)
          medianArray.push(end)
    }
    let sort = medianArray.sort()
    return sort[50]
}

// warmup code

const warmup = () => {

    for(let i = 5000; i <= 100000; i += 5000) {

        let result = 0
        let warmupArray = []

        populateArray(i, warmupArray)

        timer(reverseArray, warmupArray)
    }
}

// the main attraction

const arrayTimer = () => {

    // warmup()

    for(let i = 5000; i <= 100000; i += 5000) {

        let result = 0
        let testArray = []

        populateArray(i, testArray)

        result = timer(reverseArray, testArray)

        console.log(testArray.length);
        console.info('%d%d', result[0], result[1])

        data.push({
          arraysize: testArray.length,
          time: (result[0], result[1])
        })
    }
}

// call function

arrayTimer()

// write csv file
csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
