// Higher-order function that takes a function and a value as arguments
function greetUser(greetingFunction, name) {
    greetingFunction(name);
}

// Function to be passed as a callback
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the higher-order function
greetUser(greet, "Maddy");  // Output: Hello, Maddy!
