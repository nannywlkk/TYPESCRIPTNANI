var Tribunegra = { punto: 0 };
var Triburoja = { punto: 0 };
var Handball_Input_Tribu_Negra = document.getElementById('handball-negra');
var Ajedrez_Input_Tribu_Negra = document.getElementById('ajedrez-negra');
var Resistencia_Input_Tribu_Negra = document.getElementById('resistencia-negra');
var Handball_Input_Tribu_Roja = document.getElementById('handball-roja');
var Ajedrez_Input_Tribu_Roja = document.getElementById('ajedrez-roja');
var Resistencia_Input_Tribu_Roja = document.getElementById('resistencia-roja');
var OutputResultado = document.getElementById('resultado');
function agregarPuntos(tribu) {
    if (tribu === "Tribu Negra") {
        var puntosHandball = parseInt(Handball_Input_Tribu_Negra.value, 10) || 0;
        var puntosAjedrez = parseInt(Ajedrez_Input_Tribu_Negra.value, 10) || 0;
        var puntosResistencia = parseInt(Resistencia_Input_Tribu_Negra.value, 10) || 0;
        Tribunegra.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    }
    else if (tribu === "Tribu Roja") {
        var puntosHandball = parseInt(Handball_Input_Tribu_Roja.value, 10) || 0;
        var puntosAjedrez = parseInt(Ajedrez_Input_Tribu_Roja.value, 10) || 0;
        var puntosResistencia = parseInt(Resistencia_Input_Tribu_Roja.value, 10) || 0;
        Triburoja.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    }
    //mostrarResultados();
}
function mostrarResultados() {
    if (OutputResultado) {
        OutputResultado.innerHTML = "\n            Puntos Totales:<br>\n            Tribu Negra: ".concat(Tribunegra.punto, " <br>\n            Tribu Roja: ").concat(Triburoja.punto, " <br>\n        ");
        if (Tribunegra.punto > Triburoja.punto) {
            OutputResultado.innerHTML += "¡Tribu Negra está ganando!";
        }
        else if (Tribunegra.punto < Triburoja.punto) {
            OutputResultado.innerHTML += "¡Tribu Roja está ganando!";
        }
        else {
            OutputResultado.innerHTML += "¡Es un empate!";
        }
    }
}
///me voy a m**** 
///          ______
///         |      |
///         |      O
///         |     /|\
///         |     / \
///         |
