/*DECLARANDO VARIABLES GLOBALES*/
let intentos = 6;
let arrayWords = ['CAUSA', 'PAUSA', 'PLAZA', 'ALZAR', 'CAZAR'];
let indice = Math.floor(Math.random() * arrayWords.length);
console.log(indice);
let palabra = arrayWords[indice];
console.log(palabra);


/*Evento que se ejecuta al cargar la pagina
window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}*/


/*Constantes de los id's*/
const BUTTON = document.getElementById("guess-button");
const INPUT = document.getElementById("guess-input");
const GRID = document.getElementById("grid");

BUTTON.addEventListener('click', intentar);


function intentar() {
    const INTENTO = leerIntento();

    if (INTENTO === palabra) {
        mensajeFinal("<h1>GANASTE!</h1>");
        return;
    }

    const ROW = document.createElement("div");
    ROW.className = "row";
    
    for (let i in palabra) {

        const SPAN = document.createElement("div");
        SPAN.className = "letter";

        if (palabra[i] === INTENTO[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "green";
        }

        else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "yellow";
        }

        else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "grey";
        }

        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);

    intentos--;

    if (intentos === 0){
        mensajeFinal("<h1>PERDISTE!</h1>");
    }

}


function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}


function mensajeFinal(parrafo){
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let mensaje = document.getElementById('suposiciones');
    mensaje.innerHTML = parrafo;
}

