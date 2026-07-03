//Type Conversion
//Type Conversion is the process in JavaScript in which the data type of the
// variables is converted from one type to another type manually. This is also known as explicit type casting.

//Performing type conversion
//Performing type conversion means changing a value from one data type to another, such as converting strings, numbers, or booleans when needed in a program
//1. String to Number:We can convert a string into numbers using the Number() function, parseInt(), and parseFloat() methods.
let s = "123";
let n = Number(s);  // Converts string to number
console.log(n);

//2. Number to String
//We can convert a number into a string using String() function or we can concatenate it with an empty string("").

let n = 123;
let s = String(n);  //Converts number to string
console.log(s);

//Boolean to Number
//We can convert a boolean into a number using Number(), so true becomes 1 and false becomes 0.

let bool = true;
let n = Number(bool);  //Converts boolean to number
console.log(n);

// Boolean to String
//We can convert boolean into string using String() or by concatenating it with an empty string.

let bool = true;
let s = String(bool);  //Converts boolean to string
console.log(s);