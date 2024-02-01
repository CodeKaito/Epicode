// Dimostrare il carattere asincrono di JS.

console.log("sono a riga 3");
console.log("sono a riga 4");

setTimeout(() => {
    console.log("sono a riga 7");
}, 1500);

console.log("sono a riga 10");
console.log("Sono alla fine del programma");