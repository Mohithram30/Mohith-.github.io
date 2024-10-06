//Functions
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Calling the function with values
console.log(add(3, 5)); // Output: 8
console.log(add(10, 20)); // Output: 30

// Closures
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        return outerValue + innerValue;
    };
}

// Create a closure by calling outerFunction with a value
const add5 = outerFunction(5); // outerValue is 5

// Call the inner function with different innerValue
console.log(add5(10)); // Output: 15 (5 + 10)
console.log(add5(20)); // Output: 25 (5 + 20)

// Create another closure with a different outerValue
const add10 = outerFunction(10);
console.log(add10(10)); // Output: 20 (10 + 10)
console.log(add10(5));  // Output: 15 (10 + 5)
