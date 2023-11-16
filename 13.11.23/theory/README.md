## If & Loops
l'IF.. ELSE.. sono usati per controllare l'esecuzione del nostro programma basato su alcune condizioni.

La keyword é IF

Valuta l'espressione booleana fornita: se é vera, viene eseguito il codice successivo.

```javascript
if ((coloreOcchi === 'blue') || (coloreOcchi === 'green')) {
    alert('nice bright eyes');
}

// il codice qui viene eseguito
```

Possiamo anche specificare un blocco di codice alternativo da eseguire quando la condizione fornita non é soddisfatta.

La keyword else e deve essere posizionato subito dopo il blocco if:
```javascript
if ((coloreOcchi === 'blue') || (coloreOcchi === 'green')) {
    // Questo codice viene eseguito solo se la condizione é soddisfatta
} else {
    // Questo codice viene eseguito solo se la condizione non é soddisfatta
}
// il codice qui viene eseguito
```

### TRUTHY or FALSY
Javascript é abbastanza permissivo quando si verificano alcune condizioni:
```javascript
if ("John") // true
```

Il risultato di controlli é comunemente chiamato truthy or falsy:
```javascript
if (0,"",undefined,Nan,document.all,false) // false
```

## Operatore ternario
L'operatore ternario è un operatore condizionale semplificato come if / else.

Sintassi: condizione? <espressione se vero>: <espressione se falso>

Ecco un esempio utilizzando if / else:
```javascript
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

authenticated ? renderApp() : renderLogin();
```

## For Loop
Esistono di diverso tipo: for.. ,while.. ,do.. while..:

La keyword é il for;

```javascript
for (let step = 0; step < 5; step++) {
    console.log("Walking east one step");
}
```

## While Loop
La keyword é il while;
```javascript
let n = 0;
while (n < 3) {
    n++
    console.log(n);
}
```