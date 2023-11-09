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