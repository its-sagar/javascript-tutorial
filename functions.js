function sayHello(){
    console.log("Hello World!")
}

sayHello()

function addTwoNumbers(num1, num2){
    console.log(num1+num2)
}

const Result = addTwoNumbers(2,3)
console.log(Result)

function addTwoNum(num1, num2){
    return num1+num2
}

const Sum = addTwoNum(2,3)
console.log(Sum)

/////////////////////////////////////////////////////

function loginUserMessage(userName){
    if(userName === undefined){
        return console.log("Please Enter User Name!")
    }
    return `${userName} logged in`
}

console.log(loginUserMessage("Sagar"))
console.log(loginUserMessage())

//Default Value
function loginUser(userName="Sagar"){
    if(userName === undefined){
        return console.log("Please Enter User Name!")
    }
    return `${userName} logged in`
}

console.log(loginUser())

// Rest Operator
// function calculateCartPrice(...num)
function calculateCartPrice(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice(200,400, 500, 2000))


const user = {
    userNmae : "Sagar",
    age: 24
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and age is ${anyObject.age}.`)
}

handleObject(user)

handleObject(
    {
        userName: "Sam",
        age: 26
    }
)


myArr = [1,2,3,4,5,6]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr))