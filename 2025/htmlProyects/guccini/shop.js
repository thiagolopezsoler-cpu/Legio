const buttonLogin = document.getElementById("loginButton");
buttonLogin.addEventListener("click", () => {
    // document.body.innerHTML = "";
    // despues podes agregar contenido nuevo
    let x = "<h1>Enter your email please</h1>"
    let y = '<input type="text" placeholder="Enter your email" class = "inputEmail">';
    document.body.innerHTML = x + y; 

});

const buttonSignUp = document.getElementById("signUpButton");
buttonSignUp.addEventListener("click", () => console.log("hola"));