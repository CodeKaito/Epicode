## Classi & ID
- Quando si lavora con HTML e CSS, la selezione per TAG non è sempre la soluzione migliore.

- Spesso vuoi selezionare solo un elemento

- O solo una certa quantità di elementi

- È qui che CLASSI e ID tornano utili.

### Classi
- Possono ripetersi
- Possono essere multiple
- Selettore: .

### ID
- DEVONO essere unici
- Selettore: #

```html
<div class='sidebar__wrap>
    <h1 id='title'>Website Title</h1>
</div>
```

```css
.sidebar__wrap {
    width: 100%;
    height:70px;
}

#title1 {
    color: purple;
}

/* OR */

div.sidebar__wrap {
    width: 100%;
    height: 70%;
}

h1#title1 {
    color: purple;
}
```

## Background image

```html
<style>
    .img__bg {
    background-image: url(https://picsum.photos/500);
    width: 500px;
    height: 500px;
    }
</style>

<div class="image__bg">
    This div contains the background image
</div>
```

## Display
- La proprietà display viene utilizzata per definire il comportamento di rendering degli elementi

- Ci sono 25 (🤯) valori della proprietà display

- Andremo a vedere solo i PRINCIPALI

- Flex avrà una lezione dedicata.

- Principali tipi di display:
    - Block
    - Inline
    - Inline-Block
    - None
    - Flex

### Display: block
- Rende l’elemento un “elemento di blocco”

- Questo significa che occupa il 100% della pagina in larghezza

- E’ il valore di default nei tag p, div, h1-h6, form, ul, ol, li (e tanti altri)

```css
    .element {
        display: block
    }
```

### Display: inline
- La larghezza dell'elemento è impostata su "fit-content", cioè prende solo lo spazio che gli serve

- Non interrompe il flow della pagina

- Le proprietà width e height non hanno effetto

- Margini e padding applicati al blocco verranno ignorati
dagli elementi circostanti!

- Default in span, a

```css
    .element {
        display: inline
    }
```

### Display: none
- Nasconde un elemento

- Fa in modo che non occupi spazio nella pagina

- Al contrario di visibility: hidden; che mantiene lo spazio per l’elemento

```css
    .element {
        display: none
    }
```

### Display: inline-block
- La larghezza dell'elemento è impostata su "fit-content"

- Non interrompe il flow della pagina

- Contrariamente a display: inline, accetta le proprietà di larghezza e altezza e margini e padding sono rispettati.

```css
    .element {
        display: inline-block
    }
```

## Position
- La posizione viene utilizzata per definire COME viene posizionato l'elemento

- …ma non DOVE si posiziona

- Usa le proprietà di top, bottom, left e right per spostare l'elemento

- Tutti i tipi di positioning:
    - Relative
    - Absolute
    - Sticky
    - Fixed
    - Static

### Position: static
- Impostazione predefinita. Tutti gli elementi di default hanno position:static.

- Non risente delle proprietà left, right, top, bottom

```html
<style>
    h1 {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>

<h1>This is staying on the top left corner forever</h1>
```

### Position: fixed
- L'oggetto target viene posizionato in relazione al viewport (= la finestra del browser)

- L'elemento rimarrà nello stesso posto se scorriamo verso il basso

- Comportamento di navbar, sidebar, ecc...

### Position: relative
- Consente di spostare un elemento rispetto alla sua posizione predefinita.

- Simile a "fixed", ma non rimarrà in posizione una volta avviato lo scorrimento

- Diventa molto utile se usato in coppia con position: absolute
```html
<style>
    h1 {
        position: relative;
        top: 0;
    }
</style>

<h1>This element will be at the top of the page, but not stay there once we scroll.</h1>
```

### Position: absolute
- L'elemento viene posizionato in base all'antenato "non statico" più vicino

- Se non viene trovato alcun antenato non statico, si sposterà in base al body

- L’elemento ignora la posizione degli altri elementi e può sovrapporli.

- Diventa molto utile se usato in coppia con position: relative

```html
<style>
    .container {
        position: relative;
        border: 2px solid red;
        width: 500px;
        height: 300px;
    }
    .child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform translate (-50%, -50%);
        border: 2px solid green;
    }
</style>

<div class:"container">
    position: relative
    <div class:"child">
        position: absolute
    </div>
</div>
```

### Position: sticky
- L’oggetto target viene posizionato in base alla posizione corrente di scroll

- La posizione alterna tra “relative” e “fixed”

```html
<style>
    h1 {
        position: sticky;
        top: 0;
    }
</style>

<h1>This element will become "fixed" once it reaches top: 0</h1>
```



