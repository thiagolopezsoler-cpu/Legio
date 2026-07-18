//Here I´m adding images in the products(act 1)
let product1 = document.getElementById("product1");
let image_product1 = product1.getElementsByTagName("img")[0];
image_product1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";

let product2 = document.getElementById("product2");
let image_product2 = product2.getElementsByTagName("img")[0];
image_product2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGfEPivAL1wPX8aY-XKH02B3u6AYkxZE0yA&s";

let product3 = document.getElementById("product3");
let image_product3 = product3.getElementsByTagName("img")[0];
image_product3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJKDo2RiPWTVYwCi5cpOU3enosKbJyUCBiQ&s";

//I´m searching the price from shoes (act 2)
let price_shoe = product1.getElementsByTagName("p")[0].textContent;
console.log("The price of the shoes is " + price_shoe)

//I´m getting the names from products(act 3)
let products = document.getElementsByClassName("producto")
let names_products = ["The names from products are: "];
for (let x = 0; x < products.length; x++) {
    names_products.push(products[x].getElementsByTagName("h3")[0].textContent);
    // let name_Product = products[x].getElementsByTagName("h3")[0];
    // console.log(name_Product.textContent)
}
console.log(names_products)

//I´m crating a new product now for add to the products´s list(act 4)
let newProduct = document.createElement("div");
newProduct.setAttribute("class", "producto")

let name_newProduct = document.createElement("h3");
name_newProduct.textContent = "newProduct";
newProduct.appendChild(name_newProduct);

let image_newProduct = document.createElement("img");
image_newProduct.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5YxENCaWcStCz2WzPcLPjNHMXdB09HhBjw&s";
newProduct.appendChild(image_newProduct);

let price_newProduct = document.createElement("p");
price_newProduct.setAttribute("class", "precio")
price_newProduct.textContent = "$5000";
newProduct.appendChild(price_newProduct);

let button_newProduct = document.createElement("button");
button_newProduct.textContent = "Add to cart";
button_newProduct.setAttribute("class", "agregar-carrito")
newProduct.appendChild(button_newProduct);

let allTheProducts = document.getElementById("productos");
allTheProducts.appendChild(newProduct);

//I´m creating a function to add new products of automatically (act 5)
// const allTheProductsproducts = [
//     { id: 1, name: "Remera Negra", price: 5000, image: "URL...", category: "remeras" },
//     { id: 2, name: "Pantalón de Jean", price: 8500, image: "URL...", category: "pantalones" },
//     { id: 3, name: "Zapatillas Deportivas", price: 12000, image: "URL...", category: "zapatillas" }
// ];

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

const integration = ({name, price, image}) => {
    let createNewProduct = document.createElement("div");
    createNewProduct.setAttribute("class", "producto");

    let name_createNewProduct = document.createElement("h3");
    name_createNewProduct.textContent = name;
    createNewProduct.appendChild(name_createNewProduct);

    let image_createNewProduct = document.createElement("img");
    image_createNewProduct.src = image;
    createNewProduct.appendChild(image_createNewProduct);

    let price_createNewProduct = document.createElement("p");
    price_createNewProduct.setAttribute("class", "precio")
    price_createNewProduct.textContent = price;
    createNewProduct.appendChild(price_createNewProduct);

    let button_createNewProduct = document.createElement("button");
    button_createNewProduct.textContent = "Add to cart";
    button_createNewProduct.setAttribute("class", "agregar-carrito")
    createNewProduct.appendChild(button_createNewProduct);

    allTheProducts.appendChild(createNewProduct);
    // console.log(createNewProduct);
};
// //I´m using the function (act 6)
products.forEach(integration);
// integration(productToBeEntered.name, productToBeEntered.price, productToBeEntered.image);
// integration(productToBeEntered2.name, productToBeEntered2.price, productToBeEntered2.image);
// integration(productToBeEntered3.name, productToBeEntered3.price, productToBeEntered3.image);
//I´m adding a opcion of add the price to the product to the cart (act 7, 8, 9 and 10)

const addPriceToCart = (productToAddPrice) => {
    let priceProduct = parseInt(productToAddPrice.getElementsByTagName("p")[0].textContent.replace("$", ""));
    // console.log(priceProduct); 
    let cart = document.getElementById("carrito");
    let priceCar = parseInt(cart.getElementsByTagName("span")[0].textContent.replace("$", ""))
    priceCar = priceCar + priceProduct
    // console.log(priceProduct + priceCar)
    cart.getElementsByTagName("span")[0].textContent = "$" + priceCar;
    console.log("The price of product with discont is the $" + priceProduct * 0.80);
};
let elements = document.getElementsByTagName("div")
for (let x = 0; x < products.length; x++) {
    elements[x].addEventListener("click", () => addPriceToCart(elements[x]));
}