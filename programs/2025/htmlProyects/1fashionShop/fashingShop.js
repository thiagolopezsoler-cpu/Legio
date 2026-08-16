//images

//t-shirt
let Tshirt = document.getElementById("product1");
// console.log(Tshirt);

let image_Tshirt = Tshirt.getElementsByTagName("img")[0];

image_Tshirt.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";
let price_Tshirt = Tshirt.getElementsByTagName("p")[0]
// console.log(price_Tshirt);
//Pants
let pant = document.getElementById("product2");
// console.log(pant);

let image_pant = pant.getElementsByTagName("img")[0];

image_pant.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGfEPivAL1wPX8aY-XKH02B3u6AYkxZE0yA&s";
let price_pant = pant.getElementsByTagName("p")[0]
// console.log(price_pant);
//Shoes
let shoe = document.getElementById("product3");
// console.log(shoe);

let image_Shoe = shoe.getElementsByTagName("img")[0];

image_Shoe.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJKDo2RiPWTVYwCi5cpOU3enosKbJyUCBiQ&s";
let price_Shoe = shoe.getElementsByTagName("p")[0]
// console.log(price_Shoe);


let dids = document.getElementsByTagName("div");
// console.log(dids)

let names = [];
let groupOfName = document.getElementsByTagName("h3");
for (let x = 0; x < dids.length; x++) {
    let name = groupOfName[x].textContent;
    names.push(name);
}
// console.log(names);



// act 4:
let newProduct = document.createElement("div");
let image_newProduct = document.createElement("img");
let name_newProduct = document.createElement("h3");
let price_newProduct = document.createElement("p");
let button_newProduct = document.createElement("button");
name_newProduct.textContent = "remera blanca";
button_newProduct.textContent = "agregar al carrito"
button_newProduct.setAttribute("class", "agregar-carrito")
image_newProduct.src = "https://acdn-us.mitiendanube.com/stores/887/995/products/761-4efc80e50945af835716707005345272-1024-1024.jpg";
price_newProduct.textContent = "$1000";
price_newProduct.setAttribute("class", "precio")
newProduct.appendChild(image_newProduct);
newProduct.appendChild(name_newProduct);
newProduct.appendChild(price_newProduct);
newProduct.appendChild(button_newProduct)
newProduct.setAttribute("class", "producto")
let father = document.getElementById("productos");
father.appendChild(newProduct);
// console.log(newProduct);

// act 5
const productToBeEntered = {
    name: "mochila",
    price: 500,
    image: "https://http2.mlstatic.com/D_NQ_NP_736657-MLA32895518686_112019-O.webp"
};
const productToBeEntered2 = {
    name: "campera impermeable",
    price: 12000,
    image: "https://acdn-us.mitiendanube.com/stores/103/133/products/camp-rompeviento-shimano1-d1f33f8c7de7eeb8ab16807107265182-1024-1024.png"
};

const productToBeEntered3 = {
    name: "zapatillas deportivas",
    price: 18500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJhuq9UQHPB4NLehbBfeLqYsCn87Um2kiag&s"
};
function integration(nombre, precio, imagen) {
    let contenedor = document.getElementById("productos");
    let integrationToNewProduct = document.createElement("div");
    let titulo = document.createElement("h3");
    titulo.textContent = nombre;

    let img = document.createElement("img");
    img.src = imagen;

    let etiquetaPrecio = document.createElement("p");
    etiquetaPrecio.textContent = "$" + precio;
    etiquetaPrecio.setAttribute("class", "precio");

    let boton = document.createElement("button");
    boton.textContent = "agregar al carrito";
    boton.setAttribute("class", "agregar-carrito");

    integrationToNewProduct.appendChild(img);
    integrationToNewProduct.appendChild(titulo);
    integrationToNewProduct.appendChild(etiquetaPrecio);
    integrationToNewProduct.appendChild(boton);
    integrationToNewProduct.setAttribute("class", "producto");
    contenedor.appendChild(integrationToNewProduct);
    // console.log(integrationToNewProduct);
}
integration(productToBeEntered.name, productToBeEntered.price, productToBeEntered.image);
integration(productToBeEntered2.name, productToBeEntered2.price, productToBeEntered2.image);
integration(productToBeEntered3.name, productToBeEntered3.price, productToBeEntered3.image);

//act 6
const addPriceToCart = (element) => {
    let price = element.getElementsByTagName("p")[0].textContent;
    let priceValue = parseInt(price.replace("$", ""));
    let car = document.getElementById("carrito");
    let priceCar = car.getElementsByTagName("span")[0].textContent;
    console.log(priceCar);
    let priceCarValue = parseInt(priceCar.replace("$", ""));
    car.getElementsByTagName("span")[0].textContent = `$${priceValue + priceCarValue}`;
    priceFinal = car.getElementsByTagName("span")[0].textContent;
    // console.log(priceFinal)
    // console.log(priceValue * 0.80);
};



let elements = document.getElementsByClassName("producto");
let cart = document.getElementById("carrito");
for (let l = 0; l< elements.length; l++){
    elements[l].getElementsByTagName("button")[0].addEventListener("click", () => {
        console.log("it´s working");
        addPriceToCart(elements[l])
        // for(let x = 0; x < elements.length; x++){
        //     let newElement = 
        // }
        cart.appendChild(newElement);
        
    })
}








// let elements = document.getElementsByClassName("producto");
// let buttons = [];
// console.log(elements.length)
// for(let x = 0; x < elements.length; x++){
//     buttons.push(elements[x].getElementsByTagName("button")[0]);
//     console.log(buttons);
//     // console.log("---"+  buttons[x]);
//     buttons[x].addEventListener("click", () => {
//         console.log("it´s working");
//         addPriceToCart(elements[x]);
//     })
// };
// console.log(buttons);
// console.log(elements);
// // console.log(buttons);
// for (let i = 0; i < butt.length; i++) {
// }

