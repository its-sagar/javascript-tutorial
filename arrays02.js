const arr1 = new Array(1,2,3,4,5)

const arr2 = new Array(6,7,8,9,0)

console.log(arr1.push(arr2))

console.log(arr1)


arr = [1,2,3,4,5]

console.log(arr.concat(arr2))
console.log(arr)

const newArr = [...arr, ...arr2]
console.log(newArr)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array)


console.log(Array.isArray("Sagar"))

console.log(Array.from("Sagar"))

console.log(Array.from({name:"Sagar"})) // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))