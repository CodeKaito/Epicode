## Programming Foundation #1
Variabili, tipi di dati, operatori e condizionali.

I programmi per computer sono algoritmi, ma sono scritti in linguaggio di programmazione.

Programmare tratta di:
- Comprendere il problema da risolvere
- Identificare una procedura per raggiungere il risultato desiderato
- Tradurlo

### Sintassi
- La sintassi é la forma con cui comunichiamo con i computer, é come la grammatica nel linguaggio umano.
É fatta di regole e keywords.

- Le keywords sono in inglese. (keywords, comments and variables)

- Le istruzioni devono essere scritte bene al 100%.

- I computer non capiscono gli errori di battitura.

- Le istruzioni successive devono essere poste su righe diverse con separatore ;

| Ricetta | Programma |
| :---: | :---: |
| ingredients | input |
| completed dishes | output |
| containers | variables |

## Variabili
- Usare contenitori per dati parzialmente elaborati

- Le Variabili hanno nomi unici

- Totale riutilizzabilitá (il loro contenuto puó essere sostituito)

- Scope limitato (Esiste solo per esempio nel for loop)

- Notazione ungherese per definire le variabili

### Dichiarare una variabile
- In javascript le variabile sono come ciotole multiuso che possono contenere qualsiasi cosa.

- Dichiarare una variabile é come prendere una ciotola nuova dalla credenza, mettrla sul tavolo di lavoro e attaccarvi un'etichetta.

- Le variabili usando la keyboard let:
    - let sugar

- I nomi delle variabili dovrebbero seguire la convenzione camelCase
    - let longVariableName

### Assegnare un valore
- Dopo che una variabile é stata definita il suo contenuto non é definito.

- Per metterci qualcosa, usiamo il segno =
    - sugar = 80;

- Per svuoltare la ciotola, usiamo la keyword, null:
    - sugar = null;

```javascript
let butter = 120;
let sugar = 80;
let flour = 260;
let mediumBowl = sugar + butter; // Javascript sostituisce sugar a 80, butter a 120, e il risultato sará 200 nel mediumBowl.

mediumBowl = mediumBowl + flour; // Prende il valore di mediumBowl e lo somma al valore di flour di 260.
```

### Differenza fra let e var
La differenza principale tra `var` e `let` riguarda la loro portata, o "scope". 

Con `var`, la variabile è dichiarata globalmente o localmente all'interno di una funzione, e la sua portata è quella dell'intera funzione in cui è dichiarata. Inoltre, le variabili `var` sono sollevate ("hoisted") al di sopra del loro contesto di esecuzione durante la fase di "hoisting" del codice.

Con `let`, la variabile ha una portata di blocco limitata al blocco in cui è stata dichiarata. Ciò significa che è visibile solo all'interno di quel blocco di codice. A differenza di `var`, le variabili `let` non sono sollevate durante il "hoisting", quindi non sono accessibili prima della loro dichiarazione nel codice.

In breve, `let` introduce il concetto di "block scope", rendendo più prevedibile il comportamento delle variabili rispetto a `var`.

Differenza tra `let` e `var` in JavaScript:

```javascript
// Esempio con var
function exampleVar() {
  if (true) {
    var x = 10;
    console.log("All'interno del blocco if, x è:", x);
  }

  console.log("All'esterno del blocco if, x è:", x);
}

exampleVar();
```

In questo caso, la variabile `x` dichiarata con `var` ha una portata di funzione, quindi è visibile sia all'interno che all'esterno del blocco `if`. Quando esegui questa funzione, vedrai che entrambi i `console.log` stamperanno il valore di `x`.

Ora, vediamo un esempio con `let`:

```javascript
// Esempio con let
function exampleLet() {
  if (true) {
    let y = 20;
    console.log("All'interno del blocco if, y è:", y);
  }

  // Genererà un errore perché y non è definito in questo contesto
  console.log("All'esterno del blocco if, y è:", y);
}

exampleLet();
```

Con `let`, la variabile `y` ha una portata di blocco limitata al blocco `if`. Quindi, il secondo `console.log` genererà un errore, poiché `y` non è definito all'esterno del blocco in cui è stato dichiarato.

Questi esempi mostrano come `var` e `let` si comportano in termini di portata, e come `let` può aiutare a evitare problemi di accesso non desiderato alle variabili.

### Nan - Not a Number
```javascript
let a;
let b = 10;
a+=b // il risultato é NaN (not a number)
```

NaN in JavaScript sta per "Not a Number" ed è un valore speciale che rappresenta un risultato non valido in operazioni numeriche. Ad esempio, se provi a eseguire un'operazione matematica che non ha senso o non può essere rappresentata come un numero, il risultato sarà NaN.

### Valore null
In JavaScript, puoi assegnare il valore `null` a una variabile o utilizzarlo come valore di ritorno per indicare l'assenza di un valore o un puntatore non valido. Ecco un esempio:

```javascript
let myVar = null;
console.log(myVar); // Stampa: null
```

In questo esempio, abbiamo dichiarato una variabile chiamata `myVar` e l'abbiamo inizializzata con il valore `null`. Puoi anche ottenere `null` come risultato di alcune operazioni o come valore di ritorno di alcune funzioni in determinate situazioni.

L'uso di `null` è comune quando vuoi indicare esplicitamente che una variabile non contiene alcun valore o che un oggetto non ha un riferimento valido.

### Valore undefined
In JavaScript, `undefined` è un valore e può essere ottenuto in diversi modi. Ecco alcuni esempi:

1. **Variabile non inizializzata o non assegnata:**
   ```javascript
   let myVar;
   console.log(myVar); // Stampa: undefined
   ```

2. **Variabile assegnata a `undefined`:**
   ```javascript
   let myVar = undefined;
   console.log(myVar); // Stampa: undefined
   ```

3. **Quando una funzione non restituisce esplicitamente un valore:**
   ```javascript
   function myFunction() {
     // Non c'è una dichiarazione di return
   }

   console.log(myFunction()); // Stampa: undefined
   ```

In generale, se una variabile è dichiarata ma non inizializzata, o se una funzione non restituisce un valore, il risultato sarà `undefined`.

### Infinity e -Infinity

1. **`Infinity` e `-Infinity`**: Rappresentano rispettivamente l'infinito positivo e negativo. Questi valori possono essere ottenuti, ad esempio, dividendo un numero per zero:

    ```javascript
    let positiveInfinity = 1 / 0; // Restituisce Infinity
    let negativeInfinity = -1 / 0; // Restituisce -Infinity
    ```

### true e false

2. **`true` e `false`**: Rappresentano i valori booleani, utilizzati nelle espressioni logiche e nelle istruzioni di controllo del flusso.

    ```javascript
    let isTrue = true;
    let isFalse = false;
    ```

### 0 e -0

3. **`0` e `-0`**: JavaScript include rappresentazioni separate per zero e meno zero. Tuttavia, nella maggior parte delle situazioni, sono considerati equivalenti.

    ```javascript
    let zero = 0;
    let negativeZero = -0;
    ```

Questi sono alcuni dei valori speciali che possono essere utilizzati in JavaScript per rappresentare condizioni specifiche o risultati particolari.