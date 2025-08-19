// I puted a dark theme for the page

document.body.style.cssText = "background:#121212; color:red;";

// Task 1 do a function that adds products to the page, task 2 modifies the function to add a price to the cart

const products = [
    ["Mouse Inalambrico", "Accesorios", 600],
    ["Auriculares", "Perifericos", 200],
    ["Monitor Samsung", "Monitores", 2500]
];

function addProduct(name, category, cost) {
    let newProduct = document.createElement("div");
    newProduct.className = "producto";
    newProduct.innerHTML =
        `<h2>${name}</h2>
    <p class = "categoria">${category}</p>
    <p class = "precio">$${cost}</p>
    <button class="btn" onclick="addPrice(${cost}, this.parentElement.querySelector('input'))">Add to the cart</button>
    <button onclick="cambiarCantidad(this.parentElement.querySelector('input'), -1, ${cost})">-</button>
<input type="number" id="cantidad" value="0" min="0">
<button onclick="cambiarCantidad(this.previousElementSibling, 1, ${cost})">+</button>

    `;
    let container = document.getElementById("productos");
    container.appendChild(newProduct);
};

products.forEach(product => {
    addProduct(product[0], product[1], product[2]);
});

// Task 3 Do a button that clears the cart and a function that do a discount if the total is more than 5000

function addPrice(price, count) {
    let cart = document.getElementById("carrito");
    let currentTotal = parseInt(cart.getElementsByTagName("span")[0].textContent.replace("$", ""));
    currentTotal = currentTotal < 5000 ? price + currentTotal : price * 0.8 + currentTotal + "   20% dicount applied";
    cart.getElementsByTagName("span")[0].textContent = `$${currentTotal}`;
    count.value++
    // document.getElementsByTagName("input") ++
    if (!document.getElementById("vaciar")) {
        let buttonCart = document.createElement("button");
        buttonCart.id = "vaciar";
        // buttonCart.className = "btn";
        buttonCart.textContent = "Vaciar carrito";
        buttonCart.onclick = () => clearCart(cart);
        cart.appendChild(buttonCart);
    }
    // cart = document.getElementById("carrito");
    // currentTotal = parseInt(cart.getElementsByTagName("span")[0].textContent.replace("$", ""));
    // currentTotal = `$${price + currentTotal}`;
    // console.log(cart)
    // cart.innerHTML += price;
}
// console.log(document.getElementById("carrito"))

function clearCart(cart) {
    cart.innerHTML = `
    <h2>Carrito de compras</h2>
    <p>Total: <span id="total">$0</span></p>`;
    console.log(cart)
    // console.log(cart)
    // console.log("cart cleared")
}

function cambiarCantidad(cantidad, value, cost) {
    let priceCart = parseInt(document.getElementById("total").textContent.replace("$", ""));
    if (parseInt(cantidad.value) <= 0 && value === -1) {
        null
    } else {
        if(priceCart < 5000){
        priceCart += cost * value
        }else{
            priceCart += cost * value * 0.8 
        }
        document.getElementById("total").textContent = "$" + priceCart
        cantidad.value = parseInt(cantidad.value) + value
    }
    // console.log(priceCart)
    // cantidad.value = (parseInt(cantidad.value) <= 0 && value === -1) ?
    //     parseInt(cantidad.value)
    //     : parseInt(cantidad.value) + value
}




/*
teory => {

const 1_ No, HTML no es un lenguaje de programacion sino que es un lenguaje marcado(esto quiero decir que marca o etiqueta el contenido
de la pagina para que el navegador sepa como estructurarlo y mostrarlo) pero no es tiene logico como condicionales(if), bucles(for), etc.
Ni tiene la capacidad de ejecutar funciones.

const 2_Meta es una etiqueta que se usa para definir metadatos, es decir, informacion sobre la pagina web como el charset(el tipo de 
caracteres que se van a usar), el viewport(como se comporta la pagina en distintos dispositivos)).

const 3_ La principal diferencia es que el head hay uno solo por archivo HTML y en el header puede haber varios.
Asi como el header senala la parte superior dentro de otra etiqueta como el body y el head va en la parte superior del HTML 
y se ejecuta primero en la pagina.

const 4_ No, el objetivo del defer es que el archivo js se ejecute al final del HTML independientemente de donde este ubicado en él. Se puede 
evitar el uso si pones el script al final del codigo

const 5_ <img src="imagen.jpg" alt="Una imagen de ejemplo">
Atributo requerido: src (se requiere para su correcto funcionamiento)(Valor del atributo = imagen.jpg)
Atributo opcional: alt(valor del atributo = "Una imagen de ejemplo")
Tags: Solo tiene apertura, es autocerrado
}
*/
