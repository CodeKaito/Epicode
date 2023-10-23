## Unità di misura in CSS
px = dimensione assoluta in pixel. 
font-size: 10px imposterà la dimensione del carattere su 10px

em = relativo alla misura del genitore. 
1 em = stessa misura del genitore, 
0,5 em = metà, 
2 em = doppio

rem = relativo alla misura del tag html principale. 
1rem = misura predefinita per la pagina, 
2rem = dimensione doppia

vh / vw  = rispetto alla misura della finestra

## Colori in CSS
Nomi dei colori: colori predefiniti che puoi usare scrivendone solo il nome. 
Esempio: blu, gainsboro, rosa, viola. Per un elenco completo, visitare: https://www.w3schools.com/cssref/css_colors.asp


RGB: Imposta il colore usando la formula RGB e inserendo i valori per Rosso Verde e Blu. Esempio: colore: rgb(255,0,128)


Esadecimale: scorciatoia per RGB, si specifica rosso, verde e blu attraverso il loro valore esadecimale. Esempio: colore: #FFAAEF

## Selettori multipli
È possibile creare selettori più complessi specificando più di un nome di tag

esempio:
````javascript
div p {
		color: purple;
	} // tutti i paragrafi contenuti dentro un div avranno il color viola
````