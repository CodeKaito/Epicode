// // Salva un valore nel localStorage
// localStorage.setItem("nomeChiave", "value");

// // Recupera un valore dal localStorage
// let value = localStorage.getItem("nomeChiave");
// console.log(value); // Stampa: "valore"

// // Rimuove un elemento dal localStorage
// localStorage.removeItem("nomeChiave");

// // Rimuove tutti gli elementi dal localStorage
// localStorage.clear();

// let query = "hello";
// const handleSearchQuery = (e) => {
// 	query = e.target.value;
// 	localstorage.setItem("query", e.target.value);
// }

// localStorageHelper.js

// Set a variable in localStorage
localStorage.setItem('myVariable', 'Hello from localStorage!');

// Export the variable
let myVariable = localStorage.getItem('myVariable');

export default myVariable;