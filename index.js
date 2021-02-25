function map(sourceArray, fn) {
    let newArr = []
    for (const int of sourceArray) {
        newArr.push(fn(int))
    }
    return newArr
}

function reduce(sourceArray, fn, startingPoint=0) { 
    let val = startingPoint
    for (const int of sourceArray) {
        val = fn(int)
    }
    return val
}