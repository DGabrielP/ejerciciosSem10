'use strict'
//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”

let fecha = "2022-10-31";

let guionOne = fecha.indexOf('-');

let subcadena = fecha.slice(guionOne + 1);

let guionTwo = subcadena.indexOf('-');

let mes = subcadena.slice(0 , guionTwo);

alert (mes);