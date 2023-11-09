## Linguaggi tipizzati VS non tipizzati
Javascript non é un linguaggio tipizzato.

Il linguaggio tipizzato si riferisce a linguaggi di programmazione in cui è necessario specificare il tipo di dato di una variabile durante la dichiarazione. Questo significa che ogni variabile ha un tipo di dato associato, come intero, virgola mobile, stringa, ecc. 

Questa specifica del tipo aiuta il compilatore o l'interprete a comprendere come gestire e memorizzare i dati in modo più efficiente. L'opposto di un linguaggio tipizzato è un linguaggio non tipizzato, dove non è richiesta la specifica del tipo di dato e la interpretazione del tipo può essere fatta dinamicamente durante l'esecuzione del programma.

Typescript, C++ e Java sono linguaggi tipizzati, quindi é necessario definire il tipo di dato della variabile.

In Java, quando si dichiara una variabile, è necessario specificare il tipo di dato. Ad esempio:

```java
int numeroIntero = 10;
double numeroVirgolaMobile = 3.14;
String testo = "Ciao, mondo!";
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
