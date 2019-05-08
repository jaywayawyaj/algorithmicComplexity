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

// timing code

const bench = (func, input) => {

    let medianArray = []
    /* any boilerplate code you want to have happen before the timer starts, perhaps copying a variable so it isn't mutated */

    for (let i = 0; i <= 100; i++) {
      let start = process.hrtime()
        func(input)
        end = process.hrtime(start)
        medianArray.push(end)
    }
    console.log(medianArray.sort(), medianArray.length);
    return medianArray.sort()[50]

}

// warmup code

const warmup = () => {

    for(let i = 5000; i <= 100000; i += 5000) {

        let result = 0
        let warmupArray = []

        populateArray(i, warmupArray)

        bench(reverseArray, warmupArray)
    }
}

const timer = () => {

    warmup()

    for(let i = 5000; i <= 5000; i += 5000) {

        let result = 0
        let testArray = []

        populateArray(i, testArray)

        result = bench(reverseArray, testArray)

        console.log(testArray.length);

        console.info('%d%d', result[0], result[1])

    }
}

timer()
