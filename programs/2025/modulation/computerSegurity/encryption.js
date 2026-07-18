// Genera una llave de 32 bytes para AES-256-CBC
const llave = crypto.randomBytes(32);

// Genera un vector de inicialización (IV) de 16 bytes
const iv = crypto.randomBytes(16);

// Agrega función de cifrado
function cifrar(texto) {
    const cipher = crypto.createCipheriv('aes-256-cbc', llave, iv);
    let cifrado = cipher.update(texto, 'utf8', 'hex');
    cifrado += cipher.final('hex');
    return cifrado;
}

// Agrega función de descifrado
function descifrar(cifrado) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', llave, iv);
    let descifrado = decipher.update(cifrado, 'hex', 'utf8');
    descifrado += decipher.final('utf8');
    return descifrado;
}

// Prueba de cifrado y descifrado
const mensaje = "Hola Legio";
const mensajeCifrado = cifrar(mensaje);
console.log("Cifrado:", mensajeCifrado);
console.log("Descifrado:", descifrar(mensajeCifrado));