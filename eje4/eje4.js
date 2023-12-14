'use strict'

//Escribir un programa que obtenga las iniciales de un jugador de futbol, 
//sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

let jugador;

do{

jugador = String(prompt('Ingresa las iniciales Ejem(Cr-7)'))

}

while (!jugador.includes('-'));

let posicion = jugador.indexOf('-');
let iniciales = jugador.slice(0, posicion );
alert (iniciales);

