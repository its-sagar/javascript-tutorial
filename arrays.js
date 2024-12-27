// Array

//shallow Copy
//Collection od Any Type
//Not Fixes Size

const myArr = [1,2,3,4,5]

console.log(myArr)

const arr = new Array(1,2,3,4,5,6)

console.log(arr[1])

// Array Methods

arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)

arr.shift()

console.log(arr.includes(9))

console.log(arr.indexOf(19))

const newArr = arr.join()

console.log(arr)
console.log(newArr)

console.log(typeof arr)
console.log(typeof newArr)


// Slice & Splice

console.log("A", arr)

const myn1 = arr.slice(1,3)
console.log(myn1)

console.log("B", arr)

const myn2 = arr.splice(1,3) // It's include upper bond and also 
                            //remove that subarray from the original array
console.log("C", arr)
console.log(myn2)


