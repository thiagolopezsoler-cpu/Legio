let mensaje = window.confirm("are you the best?");
if (mensaje === null || mensaje.trim() === "") {
    console.log("El usuario no respondió o canceló el mensaje.");
} else {
    console.log("Respuesta del usuario:", mensaje);
}