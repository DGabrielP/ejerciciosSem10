'use strict'

let placa = 'ABG-9910';

let posicion = placa.indexOf('-');

let numero = placa.slice(posicion + 1);

alert (numero);
