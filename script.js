/*RICHIESTA DEL NOME*/

let Name;

Name = prompt("Benvenuto!! Come ti chiami??");

document.getElementById("nome").innerHTML = `${Name}`;

/*RICHIESTA DEL COGNONOME*/

let Surname;

Surname = prompt("Quale è il tuo cognome??");

document.getElementById("cognome").innerHTML = `${Surname}`;

/*RICHIESTA DEL COLORE PREFERITO*/

let Color;

Color = prompt("Quale è il tuo colore preferito??");

document.getElementById("colore").innerHTML = `${Color}`;

/*RICHIESTA DELL'ETA'*/

let Age;

Age = prompt("Ed infine, quanti anni hai??");

document.getElementById("eta").innerHTML = `${Age}`;

/*CREAZIONE DELLA PASSWORD*/

let Password;

Password = `${Name}` + `${Surname}` + `${Color}` + `${Age}`;

document.getElementById("pass").innerHTML = `${Password}`;
