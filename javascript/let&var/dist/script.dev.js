// TODO LET VARIABLE
//! The let keyword was introduced in ES6 (2015)
//! Variables defined with let cannot be Redeclared
//! Variables defined with let must be Declared before use
//! Variables defined with let have Block Scope
//? Cannot be Redeclared
//* Variables defined with let can not be redeclared.
//* You can not accidentally redeclare a variable declared with let.
// let x = "John Doe";
// let x = 0; // YOU CANNOT REDECLARE THIS
// var x = "John Doe";
// var x = 0;
//? Block Scope
//* Before ES6 (2015), JavaScript had Global Scope and Function Scope.
//* ES6 introduced two important new JavaScript keywords: let and const.
//* These two keywords provide Block Scope in JavaScript.
//* Variables declared inside a { } block cannot be accessed from outside the block:
// {
// let x = 2; // x only exists here
// }
// x can NOT be used here
"use strict";