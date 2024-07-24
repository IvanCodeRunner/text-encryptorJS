// Función para asignar texto a un elemento específico
export function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    } else {
        console.error(`Elemento con ID ${elemento} no encontrado.`);
    }
}

// Función para limpiar el contenido de un elemento por su ID
export function limpiarCajaID(id) {
    let elementoHTML = document.getElementById(id);
    if (elementoHTML) {
        elementoHTML.value = '';
    } else {
        console.error(`Elemento con ID ${id} no encontrado.`);
    }
}

// Función para esconder un elemento
export function esconderElemento(elemento){
    let elementoHTML = document.getElementById(elemento);
    if (elementoHTML) {
        elementoHTML.style.display = "none";
    } else {
        console.error(`Elemento con ID ${elemento} no encontrado.`);
    }
}

// Función para mostrar un elemento como bloque
export function mostrarElementoBlock(elemento){
    let elementoHTML = document.getElementById(elemento);
    if (elementoHTML) {
        elementoHTML.style.display = "block";
    } else {
        console.error(`Elemento con ID ${elemento} no encontrado.`);
    }
}

// Función para inicializar las condiciones iniciales de la aplicación
export function condicionesIniciales(){
    asignarTextoElemento('out_outText', 'Ningún mensaje fue encontrado.');
    asignarTextoElemento('out_outText2', 'Ingresa el texto que desees encriptar o desencriptar en el lado derecho.');
    mostrarElementoBlock('out_outText');
    mostrarElementoBlock('out_outText2');
    mostrarElementoBlock('main__container');
    esconderElemento('copyButton');
    esconderElemento('restartButton');
    esconderElemento('out_outText_decryptImage');
    esconderElemento('out_outText_encryptImage');
}

// Función para mostrar mensaje de error
export function mostrarError(mensaje) {
    let errorElement = document.getElementById('error');
    if (errorElement) {
        errorElement.innerText = mensaje;
        errorElement.style.display = "block";
    }
}

// Función para esconder mensaje de error
export function esconderError() {
    let errorElement = document.getElementById('error');
    if (errorElement) {
        errorElement.style.display = "none";
    }
}
