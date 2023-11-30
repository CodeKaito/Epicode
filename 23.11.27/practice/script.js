//TODO [JS] Inputs and Events

//? 1. Input types
// Most common:
//* Check them in index.html, please check remaining types and play with them!
// Resource: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

//* Get value of input#my-input with JS.
// let myInputValue = document.getElementById("my-input").value;
// console.log(myInputValue);

//* Get value of input#text1 with JS. It should be a Number, right? If not, parse it to Number type!
// let myNumInput = document.getElementById("text1").value;
// console.log(+myNumInput);

//! EXTRA 1: Use that value to explain Math.floor, Math.ceil and Math.round.
// console.log(Math.floor(20.4)); // Stampa 20
// console.log(Math.ceil(20.3)); // Stampa 21
// console.log(Math.round(20.6)); // Stampa 21

//! EXTRA 2: Create a function to simulate dice outcomes. [Math.random() method]
// console.log(Math.random()); // Random float from 0 to 1

// function rollDice() {
//     console.log(Math.floor(Math.random() * 6) + 1); // Random integer from 1 to 6 (like a dice...)
// }

// rollDice();

// Resource: https://www.w3schools.com/js/js_random.asp

// Dummy function:
function consoleMe() {
    console.log("I was triggered!");
}

//? 2. Events & Listeners
//* Click event: 3 options
//* a. onclick="" [Elemento pre-esistente]

//* b. node.onclick
// let myBtn = document.getElementById("my-button");
// myBtn.onclick = consoleMe; // "Cimice" che traccia l'evento click sul nodo myBtn...

//* c. node.addEventListener("click", functionName)
// let myBtn1 = document.getElementById("my-button");
// myBtn1.addEventListener("click", () => {
//     console.log("Il bottone è stato cliccato!");
// });


//* addEventListener ed event - event.target
// let myBtn2 = document.getElementById("my-button");

// myBtn2.addEventListener("click", (event) => {
//     console.log("Il bottone è stato cliccato!");
//     console.log(event);
//     console.log(event.target);
// });

//* Some other listeners: mouseenter, mouseleave, keydown, keyup
// let myBtn3 = document.getElementById("my-button");

// mouseenter:
// myBtn3.addEventListener("mouseenter", () => {
//     console.log("Il mouse si è poggiato su di me!");
// });

// mouseleave:
// myBtn3.addEventListener("mouseleave", () => {
//     console.log("Il mouse si è allontanato da me!");
// });

// keydown
// let myInput = document.getElementById("my-input");
// myInput.addEventListener("keydown", (event) => {
//     console.log("Qualcuno ha digitato qualcosa dentro di me!");
//     console.log(event);
//     console.log(event.key);
// })

// Resource (all listeners): https://www.w3schools.com/jsref/dom_obj_event.asp

//? 3. Window onload
// Executive code + functions library
function mainFunction() {
    let myVar = 50;
    console.log("My var is: " + myVar);
    consoleMe();
}

// window.onload = mainFunction()

// window.onload = mainFunction();

// Get ready for Calculator JS project:

// 0. For
// 1. For-of
// 2. Truthy and falsy values
// 3. if-else
// 4. switch-case
// 5. querySelectorAll
// 6. addEventListener