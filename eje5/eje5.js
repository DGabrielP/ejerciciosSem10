'use strict'

//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

let mail = String(prompt('Ingrese un correo'))

for ( ;!mail.includes('@'); ) {
    mail = String(prompt('Ingrese un correo (@)'))
};

let posicion = mail.indexOf('@');
let usuario = mail.slice(0, posicion );
alert (`Su usuario es ${usuario}`);
