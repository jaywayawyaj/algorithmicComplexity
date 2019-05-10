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

// imported functions to test

// const reverseArray = require('./functions/reverseInBuilt')
// const reverseArray = require('./functions/reverseNewArray')
// const reverseArray = require('./functions/reversePop')
const reverseArray = require('./functions/reverseAn')


// timing code

const timer = (func, input) => {
  // console.log(input.length);

    /* any boilerplate code you want to have happen before the timer starts, perhaps copying a variable so it isn't mutated */
          let start = process.hrtime()
          func(input)
          let end = process.hrtime(start)
          return end
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

    warmup()

    for(let i = 5000; i <= 100000; i += 5000) {

    let testArray = []
    let medianArray = []

    for (let e = 0; e <= 100; e++) {
        populateArray(i, testArray)
        medianArray.push(timer(reverseArray, testArray))
    }

        let sort = medianArray.sort()
        let result = sort[50]

        console.log(i);
        console.info('%d%d', result[0], result[1])

        data.push({
            arraysize: i,
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
