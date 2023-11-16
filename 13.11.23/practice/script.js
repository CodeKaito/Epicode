//TODO [JS] If-else & Loops

// CONDITIONALS
//? 1. L'if
// if(CONDITION) { Do this if CONDITION is TRUE! }
//* Fai una stampa in console solo se la variabile test è true (Boolean).
// let test = true;
// if(test) { // Condizione verificata!
//     console.log("La variabile test era vera!");
// }

//? 2. if-else
// if(CONDITION) { Do this if CONDITION is TRUE! } else { Do this if CONDITION is FALSE! }
//* Rileva la parità o disparità di un numero intero in console.
// let unknownNumb = 21;

// if(unknownNumb % 2 === 0) {
//     console.log(unknownNumb + " è pari!");
// } else {
//     console.log(unknownNumb + " è dispari!");
// }
// console.log("Ho finito di valutare il condizionale!");

//? 3. if + AND/OR conditions
// if(COND1 && COND2) { Do this if both CONDITIONS are TRUE! }
// if(COND1 || COND2) { Do this if at least one CONDITION is true }
//* Mostra un esempio di AND / OR conditions nell'IF.

// if((5 > 3) && (10 > 15)) {
//     console.log("Entrambe le condizioni verificate!");
// } else {
//     console.log("Almeno una delle condizioni non era verificata!");
// }

//? 4. if senza condizioni (Truthy or Falsy values)
//! Falsy: false, 0, “”, null, undefined, NaN, document.all
// Truty: Everything else...
//* Stampa in console il contenuto di una variabile, solo nel caso in cui questa sia valorizzata.

// let firstName = "Marco";

// if(firstName) {
//     console.log("Il nome fornito è: " + firstName);
// } else {
//     console.log("Il valore della variabile è assente o ambiguo...");
// }

//? 5. Operatore Ternario (Assegnazione condizionale)
// let myVar = (boolean) ? value_if_true : value_if_false;
//* price vale 50 se c'è lo sconto, altrimenti vale 100.

// let sconto = undefined;
// let price = sconto ? 50 : 100;

// let spesaMinima = 95; // Esempio scontistica...
// let price = (spesaMinima > 100) ? 50 : 100;

// console.log(price);

// LOOPS (1)
//? 6. Il ciclo for
//* Stampa in console i numeri interi da 0 a 9.

// for (let step = 0; step < 10; step++) {
//     console.log(step);
// }
// console.log("Sono fuori dal ciclo for...");

// Alterazioni del ciclo
//? 7. Il break
//* Interrompi un for da 0 a 9 subito dopo il 5.
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 5) {
//        break;
//     }
// }
// console.log("Sono catapultato fuori dal for alla quinta iterazione!");

//? 8. Il continue
//* Stampa in console con un for i numeri interi da 0 a 9, 5 escluso.

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//        continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) { // Stampa solo numeri pari del ciclo...
//     if (i % 2 === 1) {
//        continue;
//     }
//     console.log(i);
// }

// LOOPS (2)
//? 9. Il ciclo while
//* Stampa in console i numeri interi da 0 a 9 con un ciclo while.
// let n = 0;

// while (n < 10) {
//   	console.log(n);
//   	n++;
// }
// Codice successivo...

// let k = 10;

// while (k > 0) { // Countdown!
//     console.log(n);
//   	k--;
// }

//? 10. Il ciclo do-while
//* Imposta un ciclo do-while che non verifica mai la condizione nel while.
// let fo = 0;

// do {
//      console.log(fo);
//     fo++;
// } while (fo > 3)

//? 11. Switch-case
//* Produci la stampa in console del giorno sulla base del relativo numero:
//* 1=Monday, ..., 7=Sunday: prima con una catena di else-if(s) e poi con uno switch-case.

// let dayNumber = 2;

// if (dayNumber === 1) {
//   console.log("Monday");
// } else if (dayNumber === 2) {
//   console.log("Tuesday");
// } else if (dayNumber === 3) {
//   console.log("Wednesday");
// } else if(dayNumber === 4) {
//     console.log("Thursday");
// } else if(dayNumber === 5) {
//     console.log("Friday");
// } else if(dayNumber === 6) {
//     console.log("Saturday");
// } else if(dayNumber === 7) {
//     console.log("Sunday");
// } else {
//   console.log("Unknown day!");
// }

// Zucchero sintattico di una serie di catene else-if:
// switch (dayNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Unknown day!");
//     break;
// }