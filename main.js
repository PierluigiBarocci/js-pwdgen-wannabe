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
var resName1 = name.charAt(0);
var resName2 = name.charAt(1);
var resName3 = name.charAt(2);
var resSurname1 = surname.charAt(0);
var resSurname2 = surname.charAt(1);
var resSurname3 = surname.charAt(2);
var resColour1 = colour.charAt(0);
var resColour2 = colour.charAt(1);
var togheter = name + surname + colour;
var togheterShort = resName1 + resName2 +resName3 + resSurname1 + resSurname2 + resSurname3 + resColour1 + resColour2 + res1 + res2;

// comando per inserire la password in html
document.getElementById('text').innerHTML = togheter;
document.getElementById('textShort').innerHTML = togheterShort;
