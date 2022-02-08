//!Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//!Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//!Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// genero dei numeri casuali e gli scrivo su HTML

const numeriRandom = document.getElementById('casuali').innerHTML;
const min = 0;
const max = 100;
let secondi = 3;
let clock = setInterval ( timer , 1000) 
let messaggio = document.getElementById('risultato').innerHTML;

 

// stabilisco un contatore per la visualizzazione dei numeri
function timer(){

    secondi = secondi -1;
    if (secondi == 0) {
        clearInterval(clock);
        document.getElementById('casuali').innerHTML= "";
        let impress = getNumeriUtente();
    }
    document.getElementById('contatore').innerHTML = secondi ;
};

//genero 5 numeri random
function getRandomNumber ( x , y ) {
    return Math.floor(Math.random()*(y - x +1) + x);
}

function casuali() {
    str = "";

    for (i = 0; i < 5; i++) {
        num = getRandomNumber (min,max);
        if (i > 0) {
            str += ", ";
        }
        str += num;
    }
    document.getElementById("casuali").innerHTML = "" + str;
};
casuali ();

// faccio inserire per 5 volte un numero all'utente
function getNumeriUtente() {

    const numeriUtente = [];

    while (numeriUtente.length < 5) {
        const numero = parseInt(prompt('inserisci un nmero'));

        if (!numeriUtente.includes(numero) && isNaN) {
            numeriUtente.push(numero);
        }    
    }
    return numeriUtente
}

// confronto i numeri inseriti con i numeri generati
function numeriIndovinati(){
    const numeriMatch = [];

    for (let i = 0; i < numeriUtente.length; i++) {
        if (numeriRandom.includes(numeriUtente[i])) {
            numeriMatch.push(numeriUtente);
        }
    }
    return numeriMatch;
}

// stampo i numeri indovinati

function stampoNumeriIndovinati(numeriIndovinati) {
    const nInd = numeriIndovinati.length;

    messaggio.innerHTML = `hai indovinato ${nInd} numeri ${numeriIndovinati}`;
}






