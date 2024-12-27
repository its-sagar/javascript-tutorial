// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Sagar"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "sagar@gmail.com",
    fullNmae: {
        userFullName: {
            firstName: "Sagar",
            lastName: "Singh"
        }
    }
}

console.log(regularUser.fullNmae)
console.log(regularUser.fullNmae.userFullName)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2}

console.log(obj3)

const obj4 = Object.assign(obj1, obj2)
console.log(obj4)

const obj5 = Object.assign({}, obj1, obj2) // Good Practice to add {} while combine two or more objects
console.log(obj5)

const obj6 = {...obj1, ...obj2}
console.log(obj6)

console.log(Object.keys(obj6)) // Return Array of Keys
console.log(Object.values(obj6)) // Return Array of Values
console.log(Object.entries(obj6)) // Convert every key value to array element then wrape it into Array

console.log(obj6.hasOwnProperty("4")); //Return True or False