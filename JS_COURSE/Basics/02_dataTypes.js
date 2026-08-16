"use strict" //Treat all JS code as newer version

// alert (3 + 3)  // we are using nodejs so alert will not work , this will easily work in browser

// code readibility is important, please take care of indentation and spacing in your code

//Primitive data types in JS:

//1. number  //range of numbers in JS is from -2^53 to 2^53
let num1 = 1234;

//2. string  //sequence of characters
let str1 = "Hello, World!";

//3. boolean  //true or false
let bool1 = true;

//4. null  // intentional absence of any object value
let null1 = null;

//5. undefined  // variable declared without a value
let undefined1;

//6. symbol  // unique identifier 
let symbol1 = Symbol('description');

//7. bigint  // large integers and can be created by appending 'n' to the end of an integer or by using the BigInt constructor
let bigInt1 = 123456789012345678901234567890n;



console.log(typeof num1); // number
console.log(typeof str1); // string
console.log(typeof bool1); // boolean
console.log(typeof null1); // object (this is a known quirk in JavaScript)
console.log(typeof undefined1); // undefined
console.log(typeof symbol1); // symbol
console.log(typeof bigInt1); // bigint