if (true){
    let a = 300
    const b = 400
    var c = 200
}
//throw error a is not defined
// console.log(a)

//throw error b is not defined
// console.log(b)

// var not follow scop
console.log(c) // Result 200


// =====================================================

// this is valid call

addOne(3)

function addOne(num){
    return num + 1
}


// ==================================================


// ReferenceError: Cannot access 'addTwo' before initialization
// addTwo(5) // Invalide Call

 const addTwo = function(num){
    return num + 2
 }

 addTwo(5) // this is valid call