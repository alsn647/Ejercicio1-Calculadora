//Autor: Alessandro Sinibaldi - 2º DAW
"use strict";
let tipoDeOperacion;
let primerOperador;
let segundoOperador;
let operadores;
let operadoresDivididos;
let operacionValida = false;
alert("Bienvenido");
while (operacionValida === false) {
    operadores = prompt("Ingresa dos operadores");
    if (operadores.charAt[0] != " " && operadores.charAt[operadores.length - 1] != " ") {
        operadoresDivididos = operadores.split(" ");
        primerOperador = operadoresDivididos[0];
        segundoOperador = operadoresDivididos[1];
    }
    if (typeof primerOperador === "number" && typeof segundoOperador === "number") {
        operacionValida = true;
    } else {
        alert("Los datos introducidos no son validos");
    }
};
alert("yay");