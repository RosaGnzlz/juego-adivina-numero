let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

// Ejercicio 1.
let listaGenerica = [];

//ejercicio 2.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];
console.log(lenguajesDeProgramacion);


//ejercicio3.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//ejercicio4.
function mostrarPorSeparado() {
    for (i = 0; i < lenguajesDeProgramacion.length;i++){
        console.log(lenguajesDeProgramacion[i]);
    }     
}

mostrarPorSeparado();

// ejercicio 5.
function mostrarInverso() {
    for (h = lenguajesDeProgramacion.length - 1; h >= 0; h--){
        console.log(lenguajesDeProgramacion[h]);
    }
}

mostrarInverso();

// ejercicio 6.
let numPromLista = [10, 20, 30, 40, 50];
let suma = 0;
function promLista(nmr) {
    for (j = 0; j < nmr.length;j++){
        suma += nmr[j];
    }
    return suma / nmr.length;
}
let media = promLista(numPromLista);
console.log('Promedio: ', media);

//ejercicio 7.

function acomodar(nrr) {
    let menor = nrr[0];
    let mayor = nrr[0];

    for (let k = 1; k < nrr.length; k++){
        if (nrr[k] > mayor) {
            mayor = nrr[k];
        }
        if (nrr[k] < menor) {
            menor = nrr[k];          
        }
    }
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}
acomodar(numPromLista);

//ejercicio 8.
let summa = 0;
function sumaLista(nss) {
    for (f = 0; f < nss.length; f++){
        summa += nss[f];
    }
    return summa;
}
let sl = sumaLista(numPromLista);
console.log('Suma de la lista:', summa);

//ejercicio 9.
//function encontrarIndiceElemento(lista, elemento) {
//    for (let i = 0; i < lista.length; i++) {
//        if (lista[i] === elemento) {
//            return i; // Retorna el índice del elemento encontrado
//        }
//    }
//    return -1; // Retorna -1 si el elemento no se encuentra en la lista
//}

