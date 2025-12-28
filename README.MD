## Consegna

In questo esercizio, utilizzerai <font color="red">async/await</font> per creare la funzione <font color="red">getChefBirthday(id)</font>.

Questa funzione accetta un <font color="red">id</font> di una ricetta e deve:

✔︎ Recuperare la ricetta da https://dummyjson.com/recipes/{id}

✔︎ Estrarre la proprietà <font color="red">userId</font> dalla ricetta

✔︎ Usare <font color="red">userId</font> per ottenere le informazioni dello <font color="red">chef</font> da https://dummyjson.com/users/{userId}

✔︎ Restituire la <font color="red">data di nascita</font> dello chef

## Note del docente

Scrivi la funzione <font color="red">getChefBirthday(id)</font>, che deve:

✔︎ Essere asincrona (<font color="red">async</font>).

✔︎Utilizzare <font color="red">await</font> per chiamare le API.

✔︎Restituire una <font color="red">Promise</font> con la data di nascita dello chef.

✔︎ Gestire gli errori con <font color="red">try/catch</font>

## Esempio di utilizzo

```js
getChefBirthday(1)
  .then((birthday) => console.log("Data di nascita dello chef:", birthday))
  .catch((error) => console.error("Errore:", error.message));
```

## Esempio di output atteso

```js
Data di nascita dello chef: 1990-06-15
```

## 🎯 Bonus 1

Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

Modifica <font color="red">getChefBirthday(id)</font> per intercettare eventuali errori prima di fare la seconda richiesta.

## 🎯 Bonus 2

Utilizza la libreria <font color="red">dayjs</font> per formattare la data di nascita nel formato giorno/mese/anno.

## Esempio di output atteso con formattazione

```js
Data di nascita dello chef: 15/06/1990
```
