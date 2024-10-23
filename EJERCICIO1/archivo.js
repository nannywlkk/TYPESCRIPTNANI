var Tribunegra = {
    punto: 0
};
var Triburoja = {
    punto: 0
};
var Handball_Input_Tribu_Negra = document.getElementById('handball-negra');
var Ajedrez_Input_Tribu_Negra = document.getElementById('ajedrez-negra');
var Resistencia_Input_Tribu_Negra = document.getElementById('resistencia-negra');
var Handball_Input_Tribu_Roja = document.getElementById('handball-roja');
var Ajedrez_Input_Tribu_Roja = document.getElementById('ajedrez-roja');
var Resistencia_Input_Tribu_Roja = document.getElementById('resistencia-roja');
var OutputPuntosNegra = document.getElementById('resultado');
var OutputPuntosRoja = document.getElementById('resultado');
var EquipoGanador = document.getElementById('resultado');
function contar() {
    var valor_negro_ingresado_handball = parseInt(Handball_Input_Tribu_Negra.value, 10);
    var valor_negro_ingresado_ajedrez = parseInt(Ajedrez_Input_Tribu_Negra.value, 10);
    var valor_negro_ingresado_resistencia = parseInt(Resistencia_Input_Tribu_Negra.value, 10);
    var valor_rojo_ingresado_handball = parseInt(Handball_Input_Tribu_Roja.value, 10);
    var valor_rojo_ingresado_ajedrez = parseInt(Ajedrez_Input_Tribu_Roja.value, 10);
    var valor_rojo_ingresado_resistencia = parseInt(Resistencia_Input_Tribu_Roja.value, 10);
    Tribunegra.punto += valor_negro_ingresado_ajedrez + valor_negro_ingresado_handball + valor_negro_ingresado_resistencia;
    Triburoja.punto += valor_rojo_ingresado_ajedrez + valor_rojo_ingresado_handball + valor_rojo_ingresado_resistencia;
    OutputPuntosNegra.innerText += Tribunegra.punto.toString();
    OutputPuntosRoja.innerText += Triburoja.punto.toString();
    if (Tribunegra.punto > Triburoja.punto) {
        EquipoGanador.innerText += 'Tribunegra';
    }
    if (Tribunegra.punto < Triburoja.punto) {
        EquipoGanador.innerText += 'Triburoja';
    }
    function mostrarResultados() {
        var resultado = document.getElementById("resultado");
        if (resultado) {
            resultado.innerHTML = "¡Aquí están los resultados!";
        }
    }
}
