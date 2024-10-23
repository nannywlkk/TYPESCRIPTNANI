interface puntos{
    punto: number;
}

let Tribunegra : puntos = {
    punto: 0
}

let Triburoja : puntos = {
    punto: 0
}

const Handball_Input_Tribu_Negra = document.getElementById('handball-negra') as HTMLInputElement;
const Ajedrez_Input_Tribu_Negra = document.getElementById('ajedrez-negra') as HTMLInputElement;
const Resistencia_Input_Tribu_Negra = document.getElementById('resistencia-negra') as HTMLInputElement;

const Handball_Input_Tribu_Roja = document.getElementById('handball-roja') as HTMLInputElement;
const Ajedrez_Input_Tribu_Roja = document.getElementById('ajedrez-roja') as HTMLInputElement;
const Resistencia_Input_Tribu_Roja = document.getElementById('resistencia-roja') as HTMLInputElement;

const OutputPuntosNegra = document.getElementById('resultado') as HTMLInputElement;
const OutputPuntosRoja = document.getElementById('resultado') as HTMLInputElement;

const EquipoGanador = document.getElementById('resultado') as HTMLInputElement;

function contar(): void{
    let valor_negro_ingresado_handball : number = parseInt(Handball_Input_Tribu_Negra.value, 10);
    let valor_negro_ingresado_ajedrez : number = parseInt(Ajedrez_Input_Tribu_Negra.value, 10);
    let valor_negro_ingresado_resistencia : number = parseInt(Resistencia_Input_Tribu_Negra.value, 10);

    let valor_rojo_ingresado_handball : number = parseInt(Handball_Input_Tribu_Roja.value, 10);
    let valor_rojo_ingresado_ajedrez : number = parseInt(Ajedrez_Input_Tribu_Roja.value, 10);
    let valor_rojo_ingresado_resistencia : number = parseInt(Resistencia_Input_Tribu_Roja.value, 10);

    Tribunegra.punto += valor_negro_ingresado_ajedrez + valor_negro_ingresado_handball + valor_negro_ingresado_resistencia;
    Triburoja.punto += valor_rojo_ingresado_ajedrez + valor_rojo_ingresado_handball + valor_rojo_ingresado_resistencia;

    OutputPuntosNegra.innerText+= Tribunegra.punto.toString();
    OutputPuntosRoja.innerText+= Triburoja.punto.toString();

    if (Tribunegra.punto > Triburoja.punto){
        EquipoGanador.innerText += 'Tribunegra';
    }

    if (Tribunegra.punto < Triburoja.punto){
        EquipoGanador.innerText += 'Triburoja';
    }
}
function mostrarResultados() {
    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.innerHTML = "¡Aquí están los resultados!";

    }
}


///me voy a m**** 

///          ______
///         |      |
///         |      O
///         |     /|\
///         |     / \
///         |




