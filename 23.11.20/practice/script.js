//TODO [JS] Functions & String methods

//* Demo #1 - Functions
//? 1. Perché usare le funzioni?
// a. DRY
// b. Manutenzione codice
// c. Portabilità del codice (Librerie)

//? 2. Definire una funzione (senza argomenti)
// // Dichiaro la mia funzione
// function greet() {
//     // Definisco la mia funzione..
//     console.log("Hello World");
// }

//? 3. Richiamare (invocare) una funzione
// greet();

//? 4. Costruire una funzione (saluto personalizzato)
// let myChar = "Pippo";

// function personGreet(nomePersona) {
//     console.log("Ciao " + nomePersona);
// }

// personGreet(myChar);

// Crea una funzione che acquisisca in input un array ed un intero e stampi in console l'elemento dell'array associato alla chiave pari all'intero fornito.
            //   0,     1,   2,      3.
// let array = ["Ciao", 72, "Pippo", true];
// let index = 10; // index out of bound...

// function arrayPrinter(myArray, myIndex) {
//     if(myIndex >= myArray.length) {
//         console.log("Non posso stampare l'elemento di un array il cui indice è inesistente!");
//         return 20;
//     }

//     console.log(myArray[myIndex]);
// }

// let inputError = arrayPrinter(array, index); // => arrayPrinter(["Ciao", 72, "Pippo", true], 2);
// console.log(inputError);

//? 5. Costruire una funzione (fattoriale di n)
// Target: Costruire una funzione che calcoli il fattoriale di un numero intero.
// Cosa significa fattoriale di un numero intero n?
// n! = nx(n-1)x(n-2)x...x1 , Es. 3! = 3 * 2 * 1 = 6, 4! = 24
// Cosa significa "Ritornare" un valore?
// Extra: migliora la funzione filtrando i valori non numerici.

// function factorial(n) {
//     let res = 1;
//     for (let i = n; i > 0; i--) {
//         res*=i; // res = res * i;
//     }
//     return res;
// }

// let result = factorial(5);
// console.log(result);

//* Demo #2 - Manipolazione stringhe
//? 6. Metodi per stringhe
// Th. La stringa in JS è un array! (Dimostrazione)
// let myString = "Marco";
// console.log(myString[3]); // Output: c
// console.log(myString.length); // Output: 5

// let myString = "Mappamondomondo";
// let subStr = "mondo";

//* a. toLowerCase / toUpperCase [Output: String]
// console.log(myString.toUpperCase());
// let myModifiedString = myString.toUpperCase();

// console.log(myString);
// console.log(myModifiedString);

//* b. includes [Output: Boolean]
// console.log(myString.includes(subStr));

//* c. concat [Output: String]
// console.log(myString.concat(subStr));

//* d. repeat [Output: String]
// console.log(myString.repeat(3));

//* e. replace [Output: String]
// console.log(myString.replace("mondo", "terra"));

//* f. replaceAll [Output: String]
// console.log(myString.replaceAll("mondo", "terra"));


//? EXTRA 1: Funzioni anonime & Arrow functions (Cenni)
// Se c'è tempo... OK!
// ECMASCript 2015

// let myFunc = function() { // Assegnazione di una funzione anonima ad una variabile!
//     console.log("Io sono una funzione anonima!");
// };

// console.log(myFunc);
// myFunc(); // Invoco la mia variabile "funzionali"...

// let arrowFunc = (pippo) => {
//     console.log("Io sono una arrow function!" + pippo);
// };

// console.log(arrowFunc);
// arrowFunc("Pluto");

//? EXTRA 2: Math.floor, Math.ceil, Math.round, Math.random()
// Se c'è tempo... KO...