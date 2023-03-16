/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// chiedo all'tente di scegliere pari o dispari
const userChoise = prompt('Scegli pari o dispari').toLowerCase();

console.log(userChoise);

// verifico che l'utente non abbia inserito un input sbagliato
if (userChoise != 'pari' && userChoise != 'dispari') {
   alert('OOPS!!! Qualcosa è andato storto prova a inserire di nuovo la tua scelta');

   // istruzione che ricarica la pagina se si inserisce una scelta sbagliata
   window.location.reload(true);
} else {

   // ora chiedo di inserire un numero da 1 a 5
   const userNumber = Number(prompt('Ora scegli un numero tra 1 e 5'));
   console.log(userNumber);

   if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
      alert('Valore inserito non numerico o assicurati di inserire un numero che vada da 1 al 5 ')
      window.location.reload(true);
   }

   // creo una variabile dove verrà contenuto un numero casuale che appartiene alla cpu
   const cpuNumber = randomNumber();
   console.log(cpuNumber);

   //inizializzo la somma
   const sum = userNumber + cpuNumber;

   console.log(sum);
}


// *****FUNZIONI*****

// creo la funzione che genera un numero casuale da 1 a 5
function randomNumber() {
   return Math.floor(Math.random() * 6) + 1;
}

// creo la funzione per selezionare il vincitore
