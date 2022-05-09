/* FUNCTIONS */
//funzione che restituisce numeri casuali in un range
function getNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* MAIN */
// Dichiaro array da popolare
let triggerNumber = [];
// Eseguo ciclo generando un numero random da 1 a 100, per 16 volte.
while (triggerNumber.length < 16) {
    let numbers = getNumberRange(1, 100);
    //SE il numero generato non è presente nell'array, lo aggiungo.
    if (!triggerNumber.includes(numbers)) {
        triggerNumber.push(numbers);
    }
}
console.log(triggerNumber);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
let userNumber;
//creo una lista di numeri scelti dall'utente
let choiceNumber = [];
//chiedo all'utente di inserire un numero per 84 volte. (5 debug)
while (choiceNumber.length < 5) {
    userNumber = Number(prompt("inserisci un numero da 1 a 100"));
    //SE il numero inserito dall'utente, non è presente nella lista
    if (!choiceNumber.includes(userNumber)) {
        //aggiungo il nuovo numero
        choiceNumber.push(userNumber); 
        //ALTRIMENTI lo avviso e riparte il ciclo
    } else {
        alert("già inserito");
    }
    
}




// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50