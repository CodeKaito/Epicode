## Linguaggi tipizzati VS non tipizzati
Javascript non é un linguaggio tipizzato.

Il linguaggio tipizzato si riferisce a linguaggi di programmazione in cui è necessario specificare il tipo di dato di una variabile durante la dichiarazione. Questo significa che ogni variabile ha un tipo di dato associato, come intero, virgola mobile, stringa, ecc. 

Questa specifica del tipo aiuta il compilatore o l'interprete a comprendere come gestire e memorizzare i dati in modo più efficiente. L'opposto di un linguaggio tipizzato è un linguaggio non tipizzato, dove non è richiesta la specifica del tipo di dato e la interpretazione del tipo può essere fatta dinamicamente durante l'esecuzione del programma.

Typescript, C++ e Java sono linguaggi tipizzati, quindi é necessario definire il tipo di dato della variabile.

In Java, quando si dichiara una variabile, è necessario specificare il tipo di dato. Ad esempio:

```java
int numeroIntero = 10;
double numeroVirgolaMobile = 3.14;
string testo = "Ciao, mondo!";
```

Nell'esempio sopra, `int` indica un tipo di dato intero, `double` indica un tipo di dato a virgola mobile e `String` indica una stringa. Questa specifica del tipo aiuta il compilatore a comprendere come allocare memoria per le variabili e come gestire le operazioni su di esse.

Una volta definita una variabile di un tipo specifico, non é possibile modificare tale tipo e accetterá solo quel tipo di dato.

Nei linguaggi non tipizzati, il valore puó essere impostato su qualsiasi tipo.

I linguaggi non tipizzati danno piú libertá, Ma meno controlli di sicurezza!

### Tipi primitivi in Javascript
Sei tipi primitivi in Javascript: Number, String, Boolean, undefined e null, BigInt e symbol.

Numeri: numeri compresi fra -253-1 e +253-1;

String: é una sequenza di caratteri ("EPICODE",`42`,`Storm warning in your area`);

Boolean: é un'entitá logica, che puó assumere true or false;

### Structural types in Javascript
- Oggetti: sono raccolte di chiave-valore { "name": "John", "age": 32, "isMarried": true }

- Functions: sono una non-data structure

- Array: lista di dati

## Oggetti
In JavaScript, gli oggetti sono uno dei concetti fondamentali e versatili. Servono a rappresentare e organizzare dati in modo strutturato. Gli oggetti JavaScript sono delle raccolte di coppie chiave-valore, dove ogni valore è associato a una chiave. Ecco alcune delle principali utilità degli oggetti in JavaScript:

1. **Organizzazione dei dati:** Gli oggetti consentono di organizzare dati in modo strutturato, fornendo un modo flessibile per memorizzare informazioni.

2. **Rappresentazione di entità complesse:** Gli oggetti possono essere utilizzati per rappresentare entità complesse del mondo reale. Ad esempio, un oggetto "persona" potrebbe avere proprietà come nome, età, indirizzo, ecc.

3. **Modellazione di strutture dati avanzate:** Gli oggetti possono essere usati per creare strutture dati più avanzate come liste, code, pile, ecc. Implementando tali strutture dati mediante oggetti, è possibile organizzare e manipolare dati in modi specifici.

4. **Passaggio di dati complessi:** Gli oggetti consentono di passare dati complessi tra funzioni o componenti del codice in modo più organizzato rispetto a passare singoli valori.

5. **Manipolazione dinamica:** Poiché JavaScript è un linguaggio a tipizzazione dinamica, gli oggetti possono essere facilmente modificati aggiungendo o rimuovendo proprietà dinamicamente durante l'esecuzione del programma.

6. **Creazione di API e interfacce:** Gli oggetti sono utilizzati per definire e creare interfacce e API, consentendo una migliore strutturazione del codice e una maggiore modularità.

7. **Prototipazione e programmazione orientata agli oggetti:** JavaScript è un linguaggio di programmazione orientato agli oggetti e gli oggetti sono fondamentali per la creazione di prototipi e la realizzazione di ereditarietà.

Ad esempio, ecco un semplice oggetto JavaScript:

```javascript
let persona = {
  nome: "Mario",
  età: 30,
  indirizzo: {
    via: "Via delle Rose",
    città: "Roma"
  }
};
```

In questo caso, `persona` è un oggetto con tre proprietà: `nome`, `età` e `indirizzo`. L'oggetto `indirizzo` a sua volta ha due proprietà: `via` e `città`.

## Operatori aritmetici
- Somma
Utilizzando l'operatore `+`:

```javascript
let somma = 5 + 3;
console.log(somma); // Stampa: 8
```

- Sottrazione
Utilizzando l'operatore `-`:

```javascript
let differenza = 8 - 3;
console.log(differenza); // Stampa: 5
```

- Moltiplicazione
Utilizzando l'operatore `*`:

```javascript
let prodotto = 4 * 6;
console.log(prodotto); // Stampa: 24
```

- Divisione
Utilizzando l'operatore `/`:

```javascript
let divisione = 10 / 2;
console.log(divisione); // Stampa: 5
```

- Modulo
Utilizzando l'operatore `%`:

```javascript
let resto = 10 % 3;
console.log(resto); // Stampa: 1 (il resto della divisione di 10 per 3)
```

- Espressione Algebrica

Un'espressione algebrica può coinvolgere una combinazione di operatori e variabili. Ecco un esempio:

```javascript
let risultato = (4 * 3) + (8 / 2);
console.log(risultato); // Stampa: 18 (risultato di (4 * 3) + (8 / 2))
```

### Operatore '+'
In JavaScript, l'operatore `+` ha diversi utilizzi a seconda del contesto in cui viene utilizzato:

1. **Addizione:**
   - Quando viene utilizzato tra due numeri, esegue l'operazione di addizione.

    ```javascript
    let somma = 3 + 4;
    console.log(somma); // Stampa: 7
    ```

2. **Concatenazione di stringhe:**
   - Se uno degli operandi è una stringa, l'operatore `+` concatena le stringhe.

    ```javascript
    let stringaConcatenata = "Ciao " + "mondo";
    console.log(stringaConcatenata); // Stampa: "Ciao mondo"
    ```

3. **Conversione di numeri in stringhe:**
   - Se uno degli operandi è una stringa e l'altro è un numero, il numero viene convertito in una stringa e poi avviene la concatenazione.

    ```javascript
    let numero = 42;
    let stringa = "Il numero è: " + numero;
    console.log(stringa); // Stampa: "Il numero è: 42"
    ```

4. **Unario positivo:**
   - Quando precede un singolo operando, può essere utilizzato come operatore unario positivo, convertendo l'operando in un numero.

    ```javascript
    let stringaNumero = "42";
    let numeroDaStringa = +stringaNumero;
    console.log(numeroDaStringa); // Stampa: 42
    ```

L'operatore `+` si comporta in modo diverso a seconda del contesto, eseguendo l'addizione o la concatenazione a seconda dei tipi degli operandi.

## parseInt() e parseFloat()
parseInt() é un costruttore che serve per convertire una stringa, in Int.

```javascript
let stringaNumero = "42";
let numeroIntero = parseInt(stringaNumero);

console.log(numeroIntero); // Stampa: 42
```

## Operatori logici
Restituiscono un boolean: true or false;

In JavaScript, gli operatori logici sono utilizzati per eseguire operazioni logiche tra valori booleani o valori che possono essere valutati come booleani (noti come truthy o falsy). Ecco gli operatori logici principali:

1. Operatore AND (`&&`):

L'operatore AND restituisce `true` se entrambi gli operandi sono `true`, altrimenti restituisce `false`.

```javascript
let a = true;
let b = false;

let risultato = a && b;

console.log(risultato); // Stampa: false
```

`&&` operator with different combinations of `true` and `false`:

|   x   |   y   | x && y |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |


2. Operatore OR (`||`):

L'operatore OR restituisce `true` se almeno uno degli operandi è `true`, altrimenti restituisce `false`.

```javascript
let a = true;
let b = false;

let risultato = a || b;

console.log(risultato); // Stampa: true
```

`||` operator with different combinations of `true` and `false`:

|   x   |   y   | x || y |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

This table shows the possible combinations of `false` and `true` for the operands and the corresponding result when using the logical OR operator.

3. Operatore NOT (`!`):

L'operatore NOT inverte il valore di verità di un'operazione, restituendo `true` se l'operando è `false`, e viceversa.

```javascript
let a = true;

let risultato = !a;

console.log(risultato); // Stampa: false
```

- Esempio con Valori Truthy e Falsy:

Gli operatori logici possono essere utilizzati con valori che sono implicitamente considerati come truthy o falsy. Valori truthy sono considerati come `true` in un contesto booleano, mentre valori falsy sono considerati come `false`.

```javascript
let valoreTruthy = "Hello";
let valoreFalsy = "";

let risultato = valoreTruthy && "World";

console.log(risultato); // Stampa: "World"

risultato = valoreFalsy || "Default";

console.log(risultato); // Stampa: "Default"
```

In questo esempio, l'operatore AND restituisce il secondo operando, poiché entrambi sono truthy. L'operatore OR restituisce il primo operando truthy, poiché l'altro è falsy.

In JavaScript, gli operatori di disuguaglianza sono utilizzati per confrontare due valori e determinare se sono diversi. Ecco gli operatori di disuguaglianza principali:

1. Operatore di disuguaglianza stretta (`===`):

L'operatore di disuguaglianza stretta restituisce `true` se gli operandi sono uguali e dello stesso tipo, altrimenti restituisce `false`.

```javascript
let x = 5;
let y = "5";

let risultato = x === y;

console.log(risultato); // Stampa: false
```

2. Operatore di uguaglianza stretta (`!==`):

L'operatore di uguaglianza stretta restituisce `true` se gli operandi sono diversi o se sono di tipi diversi, altrimenti restituisce `false`.

```javascript
let x = 5;
let y = "5";

let risultato = x !== y;

console.log(risultato); // Stampa: true
```

3. Operatore di disuguaglianza (`!=`):

L'operatore di disuguaglianza restituisce `true` se gli operandi sono diversi, anche se sono di tipi diversi e possono essere convertiti l'uno nell'altro, altrimenti restituisce `false`.

```javascript
let x = 5;
let y = "5";

let risultato = x != y;

console.log(risultato); // Stampa: false
```

4. Operatore di uguaglianza (`==`):

L'operatore di uguaglianza restituisce `true` se gli operandi sono uguali dopo la conversione di tipo, altrimenti restituisce `false`.

```javascript
let x = 5;
let y = "5";

let risultato = x == y;

console.log(risultato); // Stampa: true
```

È importante notare che l'uso degli operatori di uguaglianza e disuguaglianza senza restrizioni (`==` e `!=`) può portare a risultati imprevisti a causa delle conversioni di tipo automatiche. Di solito, è preferibile utilizzare gli operatori stretti (`===` e `!==`) per evitare conversioni di tipo indesiderate.

## Operatori di comparazioni
Gli operatori di comparazione in JavaScript sono utilizzati per confrontare due valori e determinare la relazione tra di essi. Ecco gli operatori di comparazione principali:

1. Operatore di maggiore (`>`):

L'operatore di maggiore restituisce `true` se il primo operando è maggiore del secondo, altrimenti restituisce `false`.

```javascript
let x = 10;
let y = 5;

let risultato = x > y;

console.log(risultato); // Stampa: true
```

2. Operatore di minore (`<`):

L'operatore di minore restituisce `true` se il primo operando è minore del secondo, altrimenti restituisce `false`.

```javascript
let x = 10;
let y = 5;

let risultato = x < y;

console.log(risultato); // Stampa: false
```

3. Operatore di maggiore o uguale (`>=`):

L'operatore di maggiore o uguale restituisce `true` se il primo operando è maggiore o uguale al secondo, altrimenti restituisce `false`.

```javascript
let x = 10;
let y = 10;

let risultato = x >= y;

console.log(risultato); // Stampa: true
```

4. Operatore di minore o uguale (`<=`):

L'operatore di minore o uguale restituisce `true` se il primo operando è minore o uguale al secondo, altrimenti restituisce `false`.

```javascript
let x = 10;
let y = 5;

let risultato = x <= y;

console.log(risultato); // Stampa: false
```

- Esempio di Utilizzo:

```javascript
let a = 10;
let b = 20;

if (a > b) {
  console.log("a è maggiore di b");
} else if (a < b) {
  console.log("a è minore di b");
} else {
  console.log("a è uguale a b");
}
```

