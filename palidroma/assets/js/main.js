/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedo all'utenete di inserire la parla da verificare
const word = prompt('Inserire la parola');
console.log(word);

// creo una funzione che mi permette di leggere al contrario la parola inserita 
function reverse(userWord){
   /* 
   1- utilizzo split per restituire e dividere la stringa inserita in un array di sottostringhe

   2- utilizzo reverse per invertire l'ordine dell'array

   3 infine join per prelevare gli elementi dall'array e convertirli di nuovo in stringa 
   */

  // return mi restituirà un valore booleano true/false
   return userWord == userWord.split('').reverse().join('');
}
console.log(reverse(word));

// verifico le condizioni 
if (reverse(word) == true) {
   console.log(`La parola ${word} è un palindromo`);
} else {
   console.log(`La parola ${word} non è un palindromo`);
}