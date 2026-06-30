//var Keyword:The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.
//It can be reassigned and redeclared
var n = 5;
console.log(n);

var n = 20; // reassigning is allowed
console.log(n);

//let Keyword:The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.
let  n= 10;
n = 20; // Value can be updated
// let n = 15; //can not redeclare
console.log(n)

//const Keyword
//The const keyword declares variables that cannot be reassigned. It's block-scoped as well.
const n = 100;
// n = 200; This will throw an error
console.log(n)
