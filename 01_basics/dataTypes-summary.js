//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//  +++++++++++++++++++++++++++++++++++++++++++++++++

            //   stack and heap memory in js
// stack (primitive), heap (non-primitive)

let myname = "vivek"

let myname2 = myname
myname2 = "lalla"

console.log(myname);
console.log(myname2);


let user = {
    email: "vivek@1234",
    upi: "user@ybl"
}

let user2 = user

user2.email = "lalla@678"

console.log(user.email);
console.log(user2.email);
