// alert("sesion  =Nombre:Matteo contrasena :*4");
// alert("¿Estás de acuerdo con los Términos y Condiciones? 🍪");

let contenedor = document.getElementsByTagName('section')[0];
let carrito = document.getElementById('carrito');
let listaCarrito = document.getElementById('lista-carrito');
let totalCarrito = document.getElementById('total-carrito');

let total = 0;

let addproducto = (nombre, precio, img) => {
    let nproducto = document.createElement("div");
    nproducto.classList.add('producto');

    let imagen = document.createElement('img');
    imagen.src = img;
    imagen.alt = nombre;

    let titulo = document.createElement('h3');
    titulo.textContent = nombre;

    let prrafo = document.createElement('p');
    prrafo.textContent = precio;
    prrafo.classList.add('precio');

    let boton = document.createElement('button');
    boton.textContent = 'Agregar al carrito';
    boton.classList.add('agregar-carrito');
    boton.addEventListener("click", () => addPriceToCart(nombre, precio));

    nproducto.appendChild(imagen);
    nproducto.appendChild(titulo);
    nproducto.appendChild(prrafo);
    nproducto.appendChild(boton);

    contenedor.appendChild(nproducto);
};

// Agregamos productos con nuevas imagenes
addproducto('Piano', '$240000', 'https://cdn.pixabay.com/photo/2016/11/29/03/53/piano-1869562_1280.jpg');
addproducto('Guitarra', '$70000', 'https://cdn.pixabay.com/photo/2015/09/05/21/51/guitar-925221_1280.jpg');
addproducto('Muneca', '$10000', 'https://cdn.pixabay.com/photo/2016/03/23/18/17/doll-1273847_1280.jpg');

// Función para agregar al carrito y sumar
function addPriceToCart(nombre, precioTexto) {
    let precio = parseInt(precioTexto.replace('$', ''));
    console.log(`Descuento del 20 % del producto: ${nombre} y el precio es = ${precio * 0.2}`);

    let itemCarrito = document.createElement('li');
    itemCarrito.classList.add("item-carrito");
    itemCarrito.textContent = `${nombre} - ${precioTexto}`;

    let btnEliminar = document.createElement('button');
    btnEliminar.textContent = '❌';
    btnEliminar.style.marginLeft = '80px';
    btnEliminar.classList.add('btn');
    btnEliminar.addEventListener('click', () => {
        total -= precio;
        totalCarrito.textContent = `$${total}`;
        listaCarrito.removeChild(itemCarrito);
    });

    itemCarrito.appendChild(btnEliminar);
    listaCarrito.appendChild(itemCarrito);

    total += precio;
    totalCarrito.textContent = `$${total}`;
}

// Boton vaciar
let vaciar = document.getElementById('vaciar-carrito');
vaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    total = 0;
    totalCarrito.textContent = `$${total}`;
    listaCarrito.replaceChildren();
}

// Botones HTML individuales (redundantes si ya agregaste eventos antes)
let boton1 = contenedor.getElementsByTagName('button')[0];
let boton2 = contenedor.getElementsByTagName('button')[1];
let boton3 = contenedor.getElementsByTagName('button')[2];

let precio1 = contenedor.getElementsByTagName('p')[0].textContent;
let precio2 = contenedor.getElementsByTagName('p')[1].textContent;
let precio3 = contenedor.getElementsByTagName('p')[2].textContent;

let name1 = contenedor.getElementsByTagName('h3')[0].textContent;
let name2 = contenedor.getElementsByTagName('h3')[1].textContent;
let name3 = contenedor.getElementsByTagName('h3')[2].textContent;

boton1.addEventListener("click", () => addPriceToCart(name1, precio1));
boton2.addEventListener("click", () => addPriceToCart(name2, precio2));
boton3.addEventListener("click", () => addPriceToCart(name3, precio3));

let btcomprar = document.getElementById('Comprar');
console.log(btcomprar);
