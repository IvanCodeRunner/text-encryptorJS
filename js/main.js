import { encriptarText, desencriptarText, validarTexto } from './encryption.js';
import { asignarTextoElemento, limpiarCajaID, esconderElemento, mostrarElementoBlock, condicionesIniciales, mostrarError, esconderError } from './domUtils.js';

// Asignar las funciones a los botones
document.getElementById('encryptButton').addEventListener('click', encriptarClic);
document.getElementById('decryptButton').addEventListener('click', desencriptarClic);
document.getElementById("copyButton").addEventListener('click', copiarClic);
document.getElementById('restartButton').addEventListener('click', restart);

condicionesIniciales(); // Llamar la función para establecer las condiciones iniciales

// Función para obtener el texto de entrada
function getTextInput(){
    return document.getElementById('inputText').value || "";
}

// Función para manejar el evento de clic en el botón de encriptar
function encriptarClic(){
    try {
        const inputText = getTextInput();
        if (!validarTexto(inputText)) {
            mostrarError('El texto solo debe contener letras minúsculas y espacios.');
            return;
        }
        esconderError();
        const encryptedText = encriptarText(inputText);
        asignarTextoElemento('outputText', encryptedText);
        limpiarCajaID('inputText');

        // Mostrar la imagen y el texto de salida adecuados
        mostrarElementoBlock('out_outText_encryptImage');
        mostrarElementoBlock("container__outputText");
        mostrarElementoBlock("copyButton");
        mostrarElementoBlock("restartButton");
        esconderElemento('out_outText_decryptImage');
        esconderElemento('out_outText_principal');
        esconderElemento('out_outText');
        esconderElemento('out_outText2');
    } catch (error) {
        mostrarError("Error al encriptar el texto. Inténtelo de nuevo.");
        console.error("Error al encriptar el texto:", error);
    }
}

// Función para manejar el evento de clic en el botón de desencriptar
function desencriptarClic(){
    try {
        const inputText = getTextInput();
        if (!validarTexto(inputText)) {
            mostrarError('El texto solo debe contener letras minúsculas y espacios.');
            return;
        }
        esconderError();
        const decryptedText = desencriptarText(inputText);
        asignarTextoElemento('outputText', decryptedText);
        limpiarCajaID('inputText');

        // Mostrar la imagen y el texto de salida adecuados
        mostrarElementoBlock('out_outText_decryptImage');
        mostrarElementoBlock("container__outputText");
        mostrarElementoBlock("copyButton");
        mostrarElementoBlock("restartButton");
        esconderElemento('out_outText_encryptImage');
        esconderElemento('out_outText_principal');
        esconderElemento('out_outText');
        esconderElemento('out_outText2');
    } catch (error) {
        mostrarError("Error al desencriptar el texto. Inténtelo de nuevo.");
        console.error("Error al desencriptar el texto:", error);
    }
}

// Función para manejar el evento de clic en el botón de copiar
function copiarClic(){
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => {
            console.log("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error("Error al copiar el texto:", err);
            alert("Hubo un error al copiar el texto.")
        });
}

// Función para reiniciar la aplicación
function restart(){
    limpiarCajaID('inputText');
    asignarTextoElemento('outputText', '');
    esconderElemento('copyButton');
    esconderElemento('restartButton');
    mostrarElementoBlock('out_outText_principal');
    condicionesIniciales();
}
