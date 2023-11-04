# FLEXBOX

![image](https://github.com/CodeKaito/Epicode/assets/57111980/679216db-a0e3-4cb4-bb4a-488fd0bd8430)

## DISPLAY
Proprietà `display` in CSS:

- **block**: L'elemento viene visualizzato come un blocco, occupando l'intera larghezza disponibile e iniziando una nuova riga. Altezza e larghezza possono essere definite.

- **inline**: L'elemento viene visualizzato come un elemento inline, senza iniziare una nuova riga. Altezza e larghezza sono definite solo se necessario.

- **inline-block**: L'elemento è un blocco, ma fluisce come un elemento inline. Altezza e larghezza sono definite solo se necessario.

- **flex**: L'elemento è un contenitore flessibile. Gli elementi interni possono essere disposti in righe o colonne.

- **grid**: L'elemento è un contenitore di griglia. Gli elementi interni possono essere posizionati in colonne e righe.

- **none**: L'elemento è nascosto e non occupa spazio nella visualizzazione.

- **table**: L'elemento viene visualizzato come una tabella HTML.

- **table-cell**: L'elemento viene visualizzato come una cella di tabella HTML.

- **table-row**: L'elemento viene visualizzato come una riga di tabella HTML.
  
![image](https://github.com/CodeKaito/Epicode/assets/57111980/acd02ae5-0cdc-4dc6-ae5e-2478741ba62d)

## ALIGN-ITEMS
La proprietà `align-items` in Flexbox è utilizzata per allineare gli elementi flessibili lungo l'asse trasversale (asse perpendicolare all'asse principale) all'interno del contenitore flessibile. Ecco una spiegazione dei principali valori che può assumere:

- **flex-start**: Gli elementi sono allineati all'inizio del contenitore lungo l'asse trasversale. Ad esempio, se l'asse principale è orizzontale, gli elementi saranno allineati nella parte superiore del contenitore.

    ```css
    .container {
      align-items: flex-start;
    }
    ```

- **flex-end**: Gli elementi sono allineati alla fine del contenitore lungo l'asse trasversale. Ad esempio, se l'asse principale è orizzontale, gli elementi saranno allineati nella parte inferiore del contenitore.

    ```css
    .container {
      align-items: flex-end;
    }
    ```

- **center**: Gli elementi sono allineati al centro del contenitore lungo l'asse trasversale.

    ```css
    .container {
      align-items: center;
    }
    ```

- **baseline**: Gli elementi sono allineati basandosi sulla linea di base del contenuto. Questo è particolarmente utile quando gli elementi hanno altezze diverse.

    ```css
    .container {
      align-items: baseline;
    }
    ```

- **stretch**: Gli elementi vengono allungati per riempire l'altezza del contenitore lungo l'asse trasversale. Questo è il valore predefinito.

    ```css
    .container {
      align-items: stretch;
    }
    ```

Questi valori possono essere applicati al contenitore flessibile (quello con `display: flex` o `display: inline-flex`) e determinano come gli elementi flessibili all'interno del contenitore vengono allineati verticalmente. La scelta del valore dipenderà dal layout specifico che si desidera ottenere.

![image](https://github.com/CodeKaito/Epicode/assets/57111980/3b28407f-d623-4c97-affb-911fad36cfdd)

## JUSTIFY-CONTENT


## ALIGN-CONTENT


## FLEX-WRAP
Il valore flex-wrap è una proprietà di CSS che determina se gli elementi flessibili all'interno di un contenitore flessibile devono essere disposti in una singola riga o in più righe. Ecco i suoi possibili valori:

- **nowrap**: Gli elementi flessibili vengono disposti tutti in una singola riga, anche se ciò comporta il superamento del bordo del contenitore.

- **wrap**: Gli elementi flessibili vengono disposti in più righe se necessario, in modo che tutti possano adattarsi senza superare il bordo del contenitore.

- **wrap-reverse**: Gli elementi flessibili vengono disposti in più righe, ma la direzione di impilamento è invertita. Ad esempio, se la direzione principale è orizzontale, gli elementi saranno impilati verticalmente dalla parte opposta.
  
![image](https://github.com/CodeKaito/Epicode/assets/57111980/5e4c3a10-358d-4564-a525-2d3fd835dee3)
