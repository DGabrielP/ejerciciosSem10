'use strict'

//Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un laboratorio. 
//Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica la fila A del laboratorio 2

let labNum = 'LAB' + String(prompt('ingrese el numero de laboratorio'));
let labFila = '#' + String(prompt('ingrese la fila (A B C)'));

let lab = labNum.concat(labFila);

let pos = lab.indexOf('#');

let fila = lab.codePointAt(pos + 1);

let nFila = fila + 1;

let result = String.fromCodePoint(nFila);

alert (`la siguiente fila es ${labNum}#${result}`);