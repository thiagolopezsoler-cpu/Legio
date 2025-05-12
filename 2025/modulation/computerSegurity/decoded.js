const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');

// Genera las llaves pública y privada para RSA
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // Longitud de la clave: 2048 bits
    publicKeyEncoding: { type: 'spki', format: 'pem' }, // Formato de la llave pública
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' } // Formato de la llave privada
});

// Función para cifrar con la llave pública
function cifrarRSA(mensaje) {
    return publicEncrypt(publicKey, Buffer.from(mensaje)).toString("base64");
}

// Función para descifrar con la llave privada
function descifrarRSA(cifrado) {
    return privateDecrypt(privateKey, Buffer.from(cifrado, "base64")).toString();
}

// Prueba de cifrado y descifrado
const mensajeRSA = "Hola Legio";
const mensajeCifradoRSA = cifrarRSA(mensajeRSA);
console.log("Cifrado RSA:", mensajeCifradoRSA);
console.log("Descifrado RSA:", descifrarRSA(mensajeCifradoRSA));