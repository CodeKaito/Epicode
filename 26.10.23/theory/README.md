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