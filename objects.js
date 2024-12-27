// singleton => Create using Constructor => Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    "Full Name": "Sagar",
    // mySym: "myKey1", //It will be treat as Symbol
    [mySym]: "myKey1",
    age: 24,
    email: "sagar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full Name"])
console.log(JsUser[mySym])

JsUser.email = "Sagar@google.com"

// Freeze Object

// Object.freeze(JsUser)

JsUser.email = "Sagar@microsoft.com"

console.log(JsUser)

//Add Functions on Object

JsUser.greeting = function(){
    console.log(`Hello JS User, ${this["Full Name"]} `)
}

console.log(JsUser.greeting())