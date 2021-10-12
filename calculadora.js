//Autor: Alessandro Sinibaldi - 2º DAW
"use strict";
let Calculadora = new Object();
Calculadora = {
    lastResult: null,
    suma: (operador1, operador2) => {
        if (operador1 === "R" && (isNaN(operador2) === false)) {
            resultado = (lastResult + Number(operador2));
            alert(`${lastResult} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        } else if ((isNaN(operador1) === false) && operador2 === "R") {
            resultado = (Number(operador1) + lastResult);
            alert(`${operador1} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else if (operador1 === "R" && operador2 === "R") {
            resultado = (lastResult + lastResult);
            alert(`${lastResult} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else {
            resultado = (Number(operador1) + Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        }
    },

    resta: (operador1, operador2) => {
        if (operador1 === "R" && (isNaN(operador2) === false)) {
            resultado = (lastResult - Number(operador2));
            alert(`${lastResult} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        } else if ((isNaN(operador1) === false) && operador2 === "R") {
            resultado = (Number(operador1) - lastResult);
            alert(`${operador1} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else if (operador1 === "R" && operador2 === "R") {
            resultado = (lastResult - lastResult);
            alert(`${lastResult} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else {
            resultado = (Number(operador1) - Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        }
    },

    multiplicacion: (operador1, operador2) => {
        if (operador1 === "R" && (isNaN(operador2) === false)) {
            resultado = (lastResult * Number(operador2));
            alert(`${lastResult} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        } else if ((isNaN(operador1) === false) && operador2 === "R") {
            resultado = (Number(operador1) * lastResult);
            alert(`${operador1} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else if (operador1 === "R" && operador2 === "R") {
            resultado = (lastResult * lastResult);
            alert(`${lastResult} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else {
            resultado = (Number(operador1) * Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        }
    },

    dividir: (operador1, operador2) => {
        if (operador1 === "R" && (isNaN(operador2) === false)) {
            resultado = (lastResult / Number(operador2));
            alert(`${lastResult} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        } else if ((isNaN(operador1) === false) && operador2 === "R") {
            resultado = (Number(operador1) / lastResult);
            alert(`${operador1} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else if (operador1 === "R" && operador2 === "R") {
            resultado = (lastResult / lastResult);
            alert(`${lastResult} ${tipoOperacion} ${lastResult} es: ${resultado}`)
            this.lastResult = resultado;
        } else {
            resultado = (Number(operador1) / Number(operador2));
            alert(`${operador1} ${tipoOperacion} ${operador2} es: ${resultado}`)
            this.lastResult = resultado;
        }
    },
}
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
            operadoresFiltrados[0];
            operadoresFiltrados[1];
            if (isNaN(operadoresFiltrados[0]) === false && isNaN(operadoresFiltrados[1]) === false) {
                operacionValida = true;
            } else if (((operadoresFiltrados[0] === "R" && isNaN(operadoresFiltrados[1]) === false)) || ((isNaN(operadoresFiltrados[0]) === false) && operadoresFiltrados[1] === "R")) {
                operacionValida = true;
            } else if (operadoresFiltrados[0] === "R" && operadoresFiltrados[1] === "R") {
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


alert("Bienvenido");
while (continuar === true) {
    tipoOperacion = validarOperacion();
    let operadoresFiltrados = []
    operadoresFiltrados = validarOperadores();
    operador1 = operadoresFiltrados[0];
    operador2 = operadoresFiltrados[1];
    switch (tipoOperacion) {
        case "+":
            Calculadora.suma(operador1, operador2);
            break;
        case "-":
            Calculadora.resta(operador1, operador2);
            break;
        case "*":
            Calculadora.multiplicacion(operador1, operador2);
            break;
        case "/":
            Calculadora.division(operador1, operador2);
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



