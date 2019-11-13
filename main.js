// variabili
var name = prompt('Ciao, come ti chiami?');
var surname = prompt('Qual è il tuo cognome?');
var colour = prompt('Qual è il tuo colore preferito?');
var age = prompt('Il tuo anno di nascita?');
// to.String transforma num in string
var ageString = age.toString();
// charAt(index) prende la lettera nella posizione che vuoi
// occhio: parte a contare da 0, come in una gara.
var res1 = ageString.charAt(2);
var res2 = ageString.charAt(3);
var togheter = name + surname + colour + res1 + res2;

// prove in console
console.log(name);
console.log(surname);
console.log(colour);
console.log(togheter);
console.log(ageString);
console.log(res1);
console.log(res2);

// comando per inserire la password in html
document.getElementById('text').innerHTML = togheter;
