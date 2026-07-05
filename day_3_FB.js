//JavaScript Function Binding
//In JavaScript, function binding refers to the process of associating a function with a specific context (this value). The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value.

//this Binding: Functions in JavaScript are executed in a context. By default,
// 'this' refers to the global object or is undefined in strict mode.
//Permanent Binding: When a function is bound to a specific object using bind(), it will always use that object as the context when invoked, no matter how it is called.
//Partial Application: Function binding can also allow you to pre-fill arguments, creating a partially applied function.
const person = {
    name: 'GFG',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
greet();

//1. bind() Method
//The bind() method is used to create a new function that, when called, has its this value set to a specified value, regardless of how the function is invoked.
const person = {
    name: 'GFG',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
const boundGreet = greet.bind(person);
boundGreet();

//2. call() Method
//The call() method immediately invokes a function, allowing you to set the value of this and pass arguments to the function.
const person = {
    name: 'GFG',
    greet: function(city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};
person.greet('Delhi');
const greet = person.greet;
greet.call(person, 'Noida');

//3. apply() Method
//Similar to call(), the apply() method invokes a function and allows you to set the value of this, but the difference is that the arguments are passed as an array (or an array-like object).
const person = {
    name: 'GFG',
    greet: function(city, country) {
        console.log('Hello, ' + this.name + ' from ' + city + ', ' + country);
    }
};
person.greet('Delhi', 'India'); 
const greet = person.greet;
greet.apply(person, ['Noida', 'Delhi']);