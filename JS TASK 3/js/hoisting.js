// var is hoisted and initialized as undefined
console.log(a); // Output: undefined
var a = 1;

// let is hoisted but not initialized
try {
  console.log(b); // Throws ReferenceError
} catch (e) {
  console.log(e.message); // Output: Cannot access 'b' before initialization
}
let b = 2;

// const is hoisted but not initialized and must be assigned a value at declaration
try {
  console.log(c); // Throws ReferenceError
} catch (e) {
  console.log(e.message); // Output: Cannot access 'c' before initialization
}
const c = 3;
