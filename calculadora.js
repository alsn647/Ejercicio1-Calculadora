//Autor: Alessandro Sinibaldi - 2º DAW
"use strict";
let tipoOperacion;
let operador1;
let operador2;
let operadores;
let operacionValida = false;
let continuar = true;
let resultado;
let validarOperadores = function () {
    operacionValida = false;
    let operadoresDivididos = [];
    let operadoresFiltrados = [];
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
    }
    return operadoresFiltrados
}

let suma = (operador1, operador2) => {
    resultado = (Number(operador1) + Number(operador2));
    alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
}

let resta = (operador1, operador2) => {
    resultado = (Number(operador1) - Number(operador2));
    alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`);
}

let multiplicacion = (operador1, operador2) => {
    resultado = (Number(operador1) * Number(operador2));
    alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`);
}

let division = (operador1, operador2) => {
    resultado = (Number(operador1) / Number(operador2));
    alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`);
}

alert("Bienvenido");
while (continuar === true) {
    tipoOperacion = validarOperacion();
    let operadoresFiltrados = []
    operadoresFiltrados = validarOperadores();
    operador1 = operadoresFiltrados[0];
    operador2 = operadoresFiltrados[1];
    switch (tipoOperacion) {
        case "+":
            suma(operador1, operador2);
            break;
        case "-":
            resta(operador1, operador2);
            break;
        case "*":
            multiplicacion(operador1, operador2);
            break;
        case "/":
            division(operador1, operador2);
            break;
        default:
            break;
    }
    operacionValida = false;
    continuar = confirm("Quieres realizar otra operacion?");
}
alert("Adios");

function validarOperacion() {
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
    return tipoOperacion;
}



