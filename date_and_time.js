// January 1, 1970

// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toString())

let myCreatedDate01 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate01.toLocaleString())

let myCreatedDate02 = new Date("2023-01-14")
console.log(myCreatedDate02.toLocaleString())

let myCreatedDate03 = new Date("01-14-2023")
console.log(myCreatedDate03.toLocaleString())
console.log(myCreatedDate03.getTime())

let myTimeStemp = Date.now()
console.log(myTimeStemp)
console.log(Math.floor(myTimeStemp/1000)) // Seconds


let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}
))