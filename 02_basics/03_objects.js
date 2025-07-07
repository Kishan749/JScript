// Objects literal

// const { jsx } = require("react/jsx-runtime")

const mySym = Symbol("key1")


const JsUser = {
    name: "Kishan",
    "first name": "Kishan",
    [mySym]: "mykey1",
    age: 18,
    location: "delhi",
    email: "baki232@gmail.com",
    isLogedIn: true,
    lastLoginDay: ["Monday", "saturday"]
}

// 2 ways to acces object ("."  and  "[]");
// console.log(JsUser.age)
//  failure of this "." => "first name": "Kishan"

// console.log(JsUser["age"])
// console.log(JsUser[mySym])

// change email

JsUser.email = "Kishan@gmail.com"
// Object.freeze(JsUser)!
// console.log(JsUser)

// changes after freeze will not affect object
JsUser.email = "max@gmail.com";

JsUser.greeting = function() {
    console.log("Hello Js user");
}

JsUser.greetingtwo = function() {
    console.log(`Hello Js user, ${this.name}`)
}
    

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
    



