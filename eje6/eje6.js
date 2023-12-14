'use strict'

//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

let route = "Facebook.com/DiegoGabriel";

let pos = route.indexOf('/');

if (pos !== -1) {
let usuario = route.slice(pos + 1);
alert (`Su usuario es ${usuario}`);

} else {
    alert ('Formato incorrecto');
}