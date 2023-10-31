## Pseudoclassi
- Utilizzato per selezionare elementi in uno stato specifico (hover, focus, disabled, etc.)

- Sono sempre preceduti da: ":"

- A livello di specificitá hanno lo stesso valore delle classi

- esempio - a:hover - selezionerá solo gli <a> tag che hanno il cursore posizionato sopra di essi

### Esempi
- :hover => Applica una regola quando il mouse si trova su un determinato elemento

- :focus => Applica una regola quando l'elemento possiede il focus

- :not(<condition>) => Applica una regola quando la <condition> non é vera

- :first-child || :last:child => selezions l'elemento che é il primo o l'ultimo dei figli

- :nth-child(n) => Applica una regola alla n elementi

- :empty => Applica una regola agli elementi che non hanno figli


## Pseudoelementi
- Utilizzato per selezionare una parte specifica degli elementi

- Sono sempre preceduti da un doppio ":" (::)

- A livello di specificitá hanno lo stesso valore dei tag

- p::first-line - Applicherá gli stili solo alla prima riga di un paragrafo

### Esempi
- ::after => Aggiungi e modella alcuni contenuti dopo un determinato elemento

- ::before => Aggiungi e modella alcuni contenuti prima di un determinato elemento

- ::marker => Applicare una regola al marker di una item list

- ::selection => Applicare la regola alla porzione di testo selezionata dall'utente


## Object-fit
- fill - L'immagine é allungata per adattarsi al contenitore (box)

- cover - L'immagine mantiene il suo rapporto e viene ridimensionata per coprire l'intero contenitore

- contain - L'immagine mantiene il suo rapporto e viene ridimensionata per adattarsi all'intero contenitore.

## Border-radius
- Raggio del cerchio/ellisse che arrotonda l'angolo

- un solo valore: il raggio

- Due valori separati da / creano un ellissi

- Valore assoluto o percentuale

## Overflow
- Definisce cosa succede quando un figlio é piú grande del suo genitore

- Possibili valori: visible, hidden, scroll, auto

## Box-shadow
- Aggiunge l'ombra all'elemento.

- x e y offset: definisce dove verrá proiettata l'ombra rispetto all'elemento.

- blur: definisce la sfocatura dell'ombra; piú grande é il valore, piú grande e piú morbida é l'ombra.

- color: colore dell'ombra: di solito uin colore nerastro a bassa opacitá.

- box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.25);

## Transition 
Quando la proprietá specificata cambia valore (tramite :hover, :focus etc..) crea automaticamente un'animazione di transizione tra i due valori.

- Secondi (1s) o millisecondi (1000ms)

- I valori da e verso "auto" non possono essere animati

- Le funzioni di timing and delay sono opzionali.

- Lista di proprietá CSS animabili.

- transition: color 1s linear .2s;

## Overlay-position: absolute
Dato un elemento in position: absolute, se sono specificate tutte e 4 le posizioni (in alto, basso, a sinistra e destra), l'elemento verrá dimensionato di conseguenza.

- Tutte le posizioni impostate su 0 creano una sovrapposizione che copre l'intero elemento

- Qualsiasi posizione impostata su un valore > 0 crea una sovrapposizione che copre parzialmente l'elemento

## Linear-gradient

## Z-index

## Ellissi di testo

## user-select

## opacity

## transform

