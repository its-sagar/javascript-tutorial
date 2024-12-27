const isUserLoggedIn = true

if (isUserLoggedIn){
    console.log('User Logged In')
}else{
    console.log('User Not Logged In')
}

const age = 18

if(age < 18){
    console.log("Your age is less then 18.")
}
else if (age <=  60){
    console.log("Your age is less then 60")
}

else{
    console.log("Your age is greater then 60")
}

// && => ANR OPERATOR
// || => OR OPERATOR
// ! => NOT OPERATOR



// SWITCH CASE

const month = 3

switch(month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("February")
        break;
    
    case 3:
        console.log("March")
        break;
    
    default:
        console.log("Defalut Block")
    break;
}

// fasy values
//false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// truthy Values
// "0", "false", " ", {}, [], funtion(){}


// const arr = []
// if(arr.length === 0){
//     console.log("Array is empty.")
// }


// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0 ){
//     console.log("Object is empty.")
// }


// Nullish Coalescing Operator (??)
// Use for handle null, undefined

// let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less then 80") : console.log("Greater then 80")