// Primitive Data Types
// Number
let age = 25;
let price = 99.99;
console.log(age);   // Output: 25
console.log(price); // Output: 99.99

// String
let name = "Mohith";
let greeting = 'Hello';
console.log(name);     // Output: Mohith
console.log(greeting); // Output: Hello

// Boolean
let isAdult = true;
let isStudent = false;
console.log(isAdult);   // Output: true
console.log(isStudent); // Output: false

// Undefined (a variable declared but not assigned a value)
let x;
console.log(x); // Output: undefined

// Null (explicitly set to have "no value")
let empty = null;
console.log(empty); // Output: null

// Symbol (unique and immutable primitive value, often used as object keys)
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // Output: false (Symbols are unique)

// BigInt (for representing large integers)
let largeNumber = 7200098835n; // Use 'n' at the end to declare a BigInt
console.log(largeNumber); // Output: 7200098835n


// Reference Data Types
// Object
let person = {
    name: "MOHITH",
    age: 23,
    isEmployed: true
};

console.log(person.name); // Output: MOHITH
console.log(person.age);  // Output: 23

// Array
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Output: Red
console.log(colors[2]); // Output: Blue

// Function
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Mohith")); // Output: Hello, Mohith
