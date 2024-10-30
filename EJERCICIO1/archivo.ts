let Tribunegra = { punto: 0 };
let Triburoja = { punto: 0 };

const Handball_Input_Tribu_Negra = document.getElementById('handball-negra') as HTMLInputElement;
const Ajedrez_Input_Tribu_Negra = document.getElementById('ajedrez-negra') as HTMLInputElement;
const Resistencia_Input_Tribu_Negra = document.getElementById('resistencia-negra') as HTMLInputElement;

const Handball_Input_Tribu_Roja = document.getElementById('handball-roja') as HTMLInputElement;
const Ajedrez_Input_Tribu_Roja = document.getElementById('ajedrez-roja') as HTMLInputElement;
const Resistencia_Input_Tribu_Roja = document.getElementById('resistencia-roja') as HTMLInputElement;

const OutputResultado = document.getElementById('resultado') as HTMLParagraphElement;

function agregarPuntos(tribu: string): void {
    if (tribu === "Tribu Negra") {
        const puntosHandball = parseInt(Handball_Input_Tribu_Negra.value, 10) || 0;
        const puntosAjedrez = parseInt(Ajedrez_Input_Tribu_Negra.value, 10) || 0;
        const puntosResistencia = parseInt(Resistencia_Input_Tribu_Negra.value, 10) || 0;

        Tribunegra.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    } else if (tribu === "Tribu Roja") {
        const puntosHandball = parseInt(Handball_Input_Tribu_Roja.value, 10) || 0;
        const puntosAjedrez = parseInt(Ajedrez_Input_Tribu_Roja.value, 10) || 0;
        const puntosResistencia = parseInt(Resistencia_Input_Tribu_Roja.value, 10) || 0;

        Triburoja.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    }

    //mostrarResultados();
}

function mostrarResultados(): void {
    if (OutputResultado) {
        OutputResultado.innerHTML = `
            Puntos Totales:<br>
            Tribu Negra: ${Tribunegra.punto} <br>
            Tribu Roja: ${Triburoja.punto} <br>
        `;

        if (Tribunegra.punto > Triburoja.punto) {
            OutputResultado.innerHTML += "¡Tribu Negra está ganando!";
        } else if (Tribunegra.punto < Triburoja.punto) {
            OutputResultado.innerHTML += "¡Tribu Roja está ganando!";
        } else {
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




