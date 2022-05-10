/* FUNCTIONS */
//funzione che restituisce numeri casuali in un range
function getNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* MAIN */
//Chiedo all'utente il livello di difficoltà
let level = Number(prompt("Con quale livello di difficoltà vuoi giocare? Scegli un numero tra 0, 1 e 2"));
if (level === 0) {
    triggersLevel = 100;
} else if (level === 1) {
    triggersLevel = 80;
} else {
    triggersLevel = 50;
}

// Dichiaro array da popolare
let triggerNumber = [];
//creo variabile per sostituire valore numerico e riutilizzarla
let trigger = 16;
//assegno variabile ai tentativi dell'utente (84 = 100 - 16 default)
let choiceTime = triggersLevel - trigger; 
let numbers;
// Eseguo ciclo generando un numero random da 1 a 100, per 16 volte.
while (triggerNumber.length < trigger) {
    numbers = getNumberRange(1, triggersLevel);
    //SE il numero generato non è presente nell'array, lo aggiungo.
    if (!triggerNumber.includes(numbers)) {
        triggerNumber.push(numbers);
        
    }
}
console.log(triggerNumber);
let userChoice = [];
// assegno valore false a variabile booleana
let triggerOn = false;
// eseguo ciclo finchè la mia variabile rimane false e l'utente inserisce una quantità max di numeri
while (!triggerOn && userChoice.length < choiceTime) {
    let userNumber;
    //Chiedo all'utente di inserire un numero e continuo a chiederlo se il dato inserito non è un numero o è un numero fuori range
    do {
        userNumber = Number(prompt("Inserisci solo un numero compreso tra 1 e 100"));
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);
    //Se l'utente inserisce un numero trigger, la variabile diventa true ed esco dal ciclo
    if (triggerNumber.includes(userNumber)) {
        alert(`hai perso! Il tuo punteggio è ${userChoice.length}`);
        triggerOn = true;
    } else if (!userChoice.includes(userNumber)) {
        userChoice.push(userNumber);
    } else {
        alert("hai già inserito questo numero")
   }
   console.log(userChoice, userNumber);
}
console.log("game over");
if(!triggerOn) {
    alert("congratulazioni, hai vinto!")
}

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50