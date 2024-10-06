// value 
let a = 5;
let b = a; // b gets a copy of a's value

console.log(a); // Output: 5
console.log(b); // Output: 5

a = 10; // Changing a does not affect b
console.log(a); // Output: 10
console.log(b); // Output: 5 (b is not affected)

//Referance
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array as arr1

console.log(arr1); // Output: [1, 2, 3]
console.log(arr2); // Output: [1, 2, 3]

arr1.push(4); // Changing arr1 also affects arr2 because they reference the same array

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4] (arr2 reflects the changes in arr1)
