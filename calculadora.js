//Autor: Alessandro Sinibaldi - 2º DAW
"use strict";
let tipoOperacion;
let operador1;
let operador2;
let operadores;
let operacionValida = false;
let operadoresDivididos = [];
let operadoresFiltrados = [];
let continuar = true;
let resultado;
alert("Bienvenido");
while (continuar === true) {
    while (operacionValida === false) {
        tipoOperacion = prompt("Ingresa el tipo de operacion: los simbolos son +, -, * y /");
        if (tipoOperacion != null) {
            tipoOperacion = tipoOperacion.trim();
            let esOpValida = (tipoOperacion === "+"
                || tipoOperacion === "-"
                || tipoOperacion === "*"
                || tipoOperacion === "/"
            )
            if (esOpValida === true) {
                operacionValida = true;
            } else {
                alert("Tipo de operacion no valida");
            }
        } else {
            alert("Tipo de operacion no valida");
        }
    }
    operacionValida = false;
    while (operacionValida === false) {
        operadores = prompt("Ingresa dos operadores");
        operadoresDivididos = operadores.split(" ");
        for (let i = 0; i < operadoresDivididos.length; i++) {
            if (operadoresDivididos[i] != "") {
                operadoresFiltrados.push(operadoresDivididos[i]);
            }
        }
        if (operadoresFiltrados.length === 2) {
            Number(operadoresFiltrados[0]);
            Number(operadoresFiltrados[1]);
            if (isNaN(operadoresFiltrados[0]) === false && isNaN(operadoresFiltrados[1]) === false) {
                operador1 = operadoresFiltrados[0];
                operador2 = operadoresFiltrados[1];
                operacionValida = true;
            } else {
                alert("Los datos introducidos no son validos");
                operadoresDivididos = [];
                operadoresFiltrados = [];
            }
        } else {
            alert("Los datos introducidos no son validos");
            operadoresDivididos = [];
            operadoresFiltrados = [];
        }
    };
    switch (tipoOperacion) {
        case "+":
            resultado = (Number(operador1) + Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            break;
        case "-":
            resultado = (Number(operador1) - Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            break;
        case "*":
            resultado = (Number(operador1) * Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            break;
        case "/":
            resultado = (Number(operador1) / Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            break;
        default:
            break;
    }
    operacionValida = false;
    continuar = confirm("Quieres realizar otra operacion?");
}
alert("Adios");