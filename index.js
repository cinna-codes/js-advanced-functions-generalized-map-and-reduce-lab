function map(sourceArray, fn) {
    let newArr = []
    for (const int of sourceArray) {
        newArr.push(fn(int))
    }
    return newArr
}

function reduce(sourceArray, fn, startingPoint) { 
    let total
    if (startingPoint) {
        total = startingPoint
        for (let i = 0; i < sourceArray.length; i++) {
            total = fn(sourceArray[i], total)
        }
        return total
    } else {
        total = sourceArray[0]
        for (let i = 1; i < sourceArray.length; i++) {
            total = fn(sourceArray[i], total)
        }
        return total
    }
}