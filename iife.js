//Immediately Invoked FunctionExpressions(IIFE)

// Name IIFE
(function one (){
    console.log("DB CONNECTED")
})(); // Give semicolon 


(() => {
    console.log(`DB CONNECTED TO...`)
})();


((name) => {
    console.log(`DB CONNECTED TO ${name}`)
})("Sagar");

