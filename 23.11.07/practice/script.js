//TODO Basic JavaScript

//? DATA TYPES
//* Demo #1 - Stampa in console Infinity e NaN.
// console.log(40/0);
// console.log("Banana" / 5);

//? Dato di tipo stringa
//* Demo #2 - Stampa 3 stringhe in console usando tutti i possibili delimitatori.
// Apici singoli
// console.log('Hello World');
// Doppi apici
// console.log("Hello World!");
// Backticks: https://github.com/LorenzoMorelli/Tilde-Backtick-italian-keyboard-Win11
// Linux: ALT GR + '
// console.log(`HELLO WORLD!`);

//? Dato Booleano
//* Demo #3 - Stampa in console un valore booleano.
// let myBool = false;
// console.log(myBool);

//? undefined e null
//* Demo #4 - Stampa in console undefined e null.
// let pippo;
// console.log(pippo);
// pippo = null;
// console.log(pippo);

//? STRUCTURAL TYPES
//* Demo #5 - Dall'oggetto riportato sotto, stampa in console l'età dello studente.

// let student = {
// 	name: "Gordon",
// 	surname: "Freeman",
// 	age: 18,
// 	batch: "FS-Jun21",
// 	hasWebcam: true,
//     team: "Lecce"
// };

// console.log(student); // Stampo tutto l'oggetto studente...
// console.log(student.age); // Stampo la relativa age...
// console.log(student.name, student.age, student.hasWebcam);
// console.log({
// 	surname: "Freeman",
// 	age: 18,
// 	batch: "FS-Jun21",
// 	hasWebcam: true,
//     team: "Lecce"
// }); // Stampare oggetto


//? ARITHMETIC OPERATORS
//* Demo #6a - Stampa in console il risultato di un'operazione di:
// Somma
// console.log(5+13);
// Sottrazione
// console.log(5-13);
// Moltiplicazione 
// console.log(5 * 12);
// Divisione 
// console.log(40 / 5);
// Modulo
// console.log(55 % 7); // Risultato: 6
// Es. Modulo
// console.log(300 % 400); // Risultato: 300
// Un'espressione algebrica
// console.log((5 + 4 * 2) + 6); // Risultato: 19 

//? PEMDAS
// Vedasi immagine PEMDAS nella cartella images!

//? L'operatore + con dati numerici, stringhe, misti
//* Demo #6b - Esegui un'addizione, una concatenazione di 2 stringhe ed un "mix":
// console.log(23 + 45);
// console.log("Hello" + " " + "World");
// console.log("Eiffel" + 65);
// Potere speciale delle Backticks:
// let myName = "Marco";
// console.log(`My name is ${myName}`); // Stampa: My name is Marco

//? parseInt & parseFloat
//* Demo #6c - Esegui la somma fra un numero puro ed uno di tipo stringa.
// Cosa succede se applico parseInt o parseFloat ad una stringa?
// console.log(parseInt("23") + 12);
// console.log(parseFloat("3.14") + 2.2);
// console.log(parseInt("Mamma")); // NaN

//? Operatori logici
//* Demo #7a - Salva una condizione in una variabile. Che tipo di dato contiene?
// let condition = 50 > 10;
// console.log(condition); // Un booleano... true

//? Operatori di Uguaglianza/Disuguaglianza (==, ===, !=, !==)
//* Demo #7b - Usa gli operatori di:
// Uguaglianza debole
// console.log(52 == '52'); // true
// Uguaglianza stretta
// console.log(52 === 52); // true
// Disuguaglianza debole
// console.log(52 != '52'); // false
// Disuguaglianza stretta
// console.log(52 !== 52); // false

//? Operatori di Maggioranza/Minoranza (>, >=, <, <=)
//* Demo #7c - Esegui un:
// Confronto fra numeri
// console.log(30 > 14);
// console.log(23 >= 23);
// Confronto fra caratteri/stringhe
// console.log('fb' > 'fa'); // true
// Problematico, vedi: https://it.javascript.info/comparison

//? Operatore NOT (!)
//* Demo #8a - Inverti l'esito di una condizione grazie all'operatore NOT!
// let myNum = 23;
// console.log(!(16 > 8)); // false

//? Operatore AND (&&)
//* Demo #8b - Valuta 2 condizioni in AND all'interno di un console.log().
// console.log((5 < 3) && (10 > 4));
// console.log((5 < 3) && ((10 > 4) && (5 > 2)));

//? Operatore OR (||)
//* Demo #8c - Valuta 2 condizioni in OR all'interno di un console.log().
// console.log((5 > 3) || (10 > 20)); // true
// console.log((5 > 3) || (10 > 20) || (56 < 23)); // true

//? EXTRA: Valuta l'esito della seguente condizione in AND, OR.
// let myNum = 21;
// console.log((myNum == "21") && ((myNum % 5 === 1) || !(myNum > 15))); // true