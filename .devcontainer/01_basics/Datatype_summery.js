// Primitive

// 7 categories : String, Number, Boolean, Null, Undefined, Symbol, BigInt(big value)

const score = 100
const scoreValue = 100.5

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 469652323966956554431n  // "n" represt for long number as a automatic bigInt number




// Refrence Type(Non Premitive)

// Arrays, Objects, Functions

const animals = ["cat", "dog", "got"] // arrays
let myObj ={
    name: "abc",
    age: 20,

}  // object

const myFunction = function(){
    console.log("hello");
}

 

console.log(typeof bigNumber );
