//!Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// genero dei numeri casuali e gli scrivo su HTML

function casuali() {
    n = document.getElementById("quanti").innerHTML;
    if (n > 0 && n <= 100) {
      str = "";
      for (i = 0; i < n; i++) {
           num = Math.round(Math.random()*100 + 1);
           if (i > 0) {
              str += ", ";
           }
           str += num;
       }
     document.getElementById("casuali").innerHTML = "Numeri generati: " + str;
     } 
     else {
        document.getElementById("casuali").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
     }
};

getRandomNumber = document.getElementById('casuali').innerHTML;


function getRandomNumber (min,max) {
    return Math.floor(Math.random()*(max - min +1) + min);
}

// stabilisco un contatore per la visualizzazione dei numeri

let secondi = 30;

let clock = setInterval ( function () {

    document.getElementById('contatore').innerHTML = secondi;

    if (secondi = 0) {
        clearInterval(clock);
        alert ('buon anno nuovo');
    }else {
        secondi--;
    }

}; 1000);












//!Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//!Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.