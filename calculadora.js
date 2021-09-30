//Autor: Alessandro Sinibaldi - 2º DAW
"use strict";
let tipoDeOperacion;
let primerOperador;
let segundoOperador;
let operadores;
let operacionValida = false;
let operadoresDivididos = [];
let operadoresFiltrados = [];
let continuar = true;
let resultado;
alert("Bienvenido");
while (continuar === true) {
    while (operacionValida === false) {
        tipoDeOperacion = prompt("Ingresa el tipo de operacion: los simbolos son +, -, * y /");
        if (tipoDeOperacion != null) {
            tipoDeOperacion = tipoDeOperacion.trim();
            let esOpValida = (tipoDeOperacion === "+"
                || tipoDeOperacion === "-"
                || tipoDeOperacion === "*"
                || tipoDeOperacion === "/"
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
                primerOperador = operadoresFiltrados[0];
                segundoOperador = operadoresFiltrados[1];
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
    switch (tipoDeOperacion) {
        case "+":
            resultado = (Number(primerOperador) + Number(segundoOperador));
            alert(`${primerOperador} ${tipoDeOperacion} ${segundoOperador} es: ${resultado}`)
            break;
        case "-":
            resultado = (Number(primerOperador) - Number(segundoOperador));
            alert(`${primerOperador} ${tipoDeOperacion} ${segundoOperador} es: ${resultado}`)
            break;
        case "*":
            resultado = (Number(primerOperador) * Number(segundoOperador));
            alert(`${primerOperador} ${tipoDeOperacion} ${segundoOperador} es: ${resultado}`)
            break;
        case "/":
            resultado = (Number(primerOperador) / Number(segundoOperador));
            alert(`${primerOperador} ${tipoDeOperacion} ${segundoOperador} es: ${resultado}`)
            break;
        default:
            break;
    }
    operacionValida = false;
    continuar = confirm("Quieres realizar otra operacion?");
}
alert("Adios");