let nome = prompt("Come ti chiami?");
let cognome = prompt("Qual è il tuo cognome?");
let annoDiNascita = prompt("Anno di nascita");
let eta = 2022 - annoDiNascita;
let colorePreferito = prompt("Colore preferito");

document.getElementById('pwd').innerHTML = nome+cognome+eta+colorePreferito+'22';