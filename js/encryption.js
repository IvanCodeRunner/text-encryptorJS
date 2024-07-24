// Función de encriptación básica
export function encriptarText(text){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    text = text.toLowerCase(); // Convertir el texto a minúsculas para mantener consistencia
    for(let i = 0; i < matrizCodigo.length; i++){
        if(text.includes(matrizCodigo[i][0])){
            text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return text;
}

// Función de desencriptación básica
export function desencriptarText(text){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++){
        if(text.includes(matrizCodigo[i][1])){
            text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return text;
}

// Función para validar que el texto contiene solo letras y espacios
export function validarTexto(text) {
    return /^[a-z\s]+$/.test(text);
}
