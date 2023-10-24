## HTML - <head> & <body>
Ogni pagina HTML deve avere un tag <html>

Dentro questo tag solitamente troviamo 2 figli:

- <head> ⇐ Contiene la configurazione della pagina
- <body> ⇐ Contiene il contenuto della pagina

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## HTML - <head>
- Cose tipiche che inserirai nel tuo tag <head>

- Titolo della pagina
- Import di file esterni (Styles, Fonts, Script)
- Metadata per SEO (strumenti per Analytics e Ads)
- Metadata da condividere sui social (Facebook, Twitter etc)

- Ricorda: <head> => configurazione pagina 
(nella tua “testa” (head in inglese) c’è il cervello, cioè la tua configurazione!)

## h1 - h6 → Titoli
-h1, h2, h3, h4, h5, h6 sono i tag per i titoli

- Ogni pagina deve avere un solo h1, sarà l'elemento più importante per molti motori di ricerca

- Esempio: <h2> Questo è un sottotitolo </h2>

## p → Paragrafo
- p è il tag paragrafo

- Di solito contiene testo 

- è un elemento di “blocco”, cioè si espande per tutta la larghezza della pagina

- Esempio: <p> Questo è un paragrafo</p>

## span
- span è un contenitore di testo generico

- Di solito viene utilizzato per definire lo stile di certe porzioni di testo

- Esempio: <span> Questo è un testo </span>

## Liste: <ul> & <ol>
- <ul> ⇒ lista non ordinata

- <ol> ⇒ lista ordinata

- Entrambi sono genitori di <li> (list item)

- Esempio :
```html
<ul>
	<li> primo elemento </li>
	<li> secondo elemento </li>
</ul>
```