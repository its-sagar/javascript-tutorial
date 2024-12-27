const  user = {
    userName: "Sagar",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website.`);
        // console.log(this)
    }
}

// user.welcomeMessage
// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()
// console.log(this)


// function one(){
//     let userName
//     console.log(this.userName) //undefined
// }
// one()


// const one = function(){
//     let userName
//     console.log(this.userName) //undefined
// }
// one()


// const one = () => {
//     let userName
//     console.log(this.userName) //undefined
// }
// one()

// const anndTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit Return
// const anndTwo = (num1, num2) =>  num1 + num2

// const anndTwo = (num1, num2) =>  (num1 + num2)

// const anndTwo = (num1, num2) =>  ({userName: "Sagar"})


