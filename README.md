# Visualizzazione temperatura
App per visualizzare la temperatura utilizzando un [Web Service](https://github.com/J-Dany/RestWB_Symfony).

L'applicazione fa uso di una serie di [richieste asincrone](https://developer.mozilla.org/it/docs/Web/API/XMLHttpRequest) per mostrare i dati.

## Dipendenze
- [node](https://nodejs.org/it/download/)
- [npm](https://nodejs.org/it/download/)

## Installazione
Una volta clonato, spostatevi nella cartella del progetto:
```bash
cd restclient
```

Il progetto per funzionare usa dei *moduli*, e, per installare
questi moduli, basta dare il seguente comando:
```bash
npm install
```
Questo comando scaricherà tutti i moduli, quindi mettetevi comodi,
ci potrebbe voler un po'.

## Configurazione
Il file di configurazione si trova su:
```bash
src/Config.js
```

I parametri per ora configurabili sono:
- **URL**: rappresenta l'url del Web Service
- **TIMEOUT_REQUEST**: rappresenta il timeout entro il quale l'applicazione deve restituire errore se il server non ha ritornato una risposta
- **HEADERS**: un array di headers da includere nella richiesta

## Avvio applicazione
Dopo aver installato le dipendenze ed aver configurato l'app è possibile vederla in azione digitando nel terminale:
```bash
npm start
```
Questo avvierà un Web Server che ti farà utilizzare l'app. Di default il server sta in ascolto su **localhost:3000**,
però per essere sicuri guardate l'output del comando precedente per vedere dove esattamente sta in ascolto.