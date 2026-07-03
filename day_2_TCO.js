//Type Coercion
//Type coercion is the automatic conversion
// of one data type to another by JavaScript during operations. This is also known as implicit type casting

//String + Number
//JavaScript will automatically or implicitly convert the number to a string if there is the string present in the arithmetic operation.

let n = 5;
let s = "5";
let res = n + s;  // JavaScript converts num to string
console.log(res); 
console.log(typeof(res))

//Boolean + Number
//JavaScript converts the boolean value into a number, true becomes 1 and false becomes 0, when we perform the arithmetic operations.

let bool = true;
let n = 10;
let res = bool + n;  // JavaScript converts boolean to number
console.log(res);

//Comparison of Different Types
//JavaScript convert the two value of data type into the common type when we compare their values.

let s = "10";
let n = 10;
console.log(s == n);  // true, JavaScript converts str to number

//Boolean Context
//JavaScript converts non-boolean value into the boolean value when the value is in the if statement.

let s = "";
if (s) {
    console.log("This won't print");  // Empty string is falsy
} else {
    console.log("This will print");  // Empty string is coerced to false
}

