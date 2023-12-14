'use strict'

//Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.

let gDrive = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_lin";

let posOne = gDrive.lastIndexOf('/');

let subG = gDrive.slice(0, posOne);

let posTwo = subG.lastIndexOf('/');

let ide = subG.slice(posTwo + 1);

alert (`Su id es ${ide}`);

