# Traccia

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

## HTML E CSS

Potete sfruttare la grafica già pronta per concentrarvi sulla parte logica (va comunque analizzata con l'inspector) :occhiolino:
https://github.com/TizianoN/103-timing-funcitons

## Consigli

Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:

- Da quante ore è composto un giorno?
- Da quanti minuti è composta un'ora?
- Da quanti secondi è composto un minuto?
- Da quanti millisecondi è composto un secondo?
- Quanti millisecondi mi separano da domani alle 9:30?
- Esiste un oggetto JS in grado di gestire le date?
- Esistono dei metodi per trasformare una data in millisecondi?
  Buon divertimento!

### Risposte alle domande...

- Un giorno è composto da 24h. (00-23)
- Un ora è composta da 60 minuti (0-59).
- Un minuto è composto da 60 secondi (0-59)
- Un secondo è composto da 1000 millisecondi.
- Date ();
- Trasformare la data in millisecondi...

# STEP

- Ricavare la data di oggi..
  - creare una costante e utilizzare new Date();
- Trasformare la data di oggi in "millisecondi".
  - guardare su w3School cosa poter fare..
- Impostare una data fissa per domani.
  - richiamare una nuova costante con una data fissa con new Date(DATA DI DOMANI CON ORARIO).
- Recuperare i millisecondi per domani.
  - trasformarla nuovamente in millisecondi.
- Sottrarre alla quantità di millisecondi di domani i millisecondi di oggi per creare il countdown.
- Ricavare dai millisecondi, ora, minuti e secondi in tempo reale..
- creare un setInterval per far si che venga sottratto 1 secondo alla volta.
- tramite math.floor recuperare ora, minuti e secondi.
- utilizzare **_clearTimeout();_** per impredire che prosegua allo scadere del tempo quando arriva a 0.
- agganciare all'html i dati.
