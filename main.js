// variabili
var name = prompt('Ciao, come ti chiami?');
var surname = prompt('Qual è il tuo cognome?');
var colour = prompt('Qual è il tuo colore preferito?');
var togheter = name + surname + colour;

// prove in console
console.log(name);
console.log(surname);
console.log(colour);
console.log(togheter);

// comando per inserire la password in html
document.getElementById('text').innerHTML = togheter;
