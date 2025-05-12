//activity 1 add a new image to the products

let productOne = document.getElementById("product1");
image_productOne = productOne.getElementsByTagName("img")[0];
image_productOne.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";

let productTwo = document.getElementById("product2");
let image_productTwo = productTwo.getElementsByTagName("img")[0];
image_productTwo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";

// let productThree = document.getElementById("product3");
// let image_productthree = productThree.getElementsByTagName("img")[0];
// image_productthree.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";
document.getElementById("product3").getElementsByTagName("img")[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";
// image_product3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_vR2OTHl2QyFRjPoeuVpQVWB0MiulNFww&s";

console.log(document.getElementById("product3").getElementsByTagName("p")[0].textContent);

// console.log(productThree)

// console.log(productThree.getElementsByTagName("p")[0].textContent);
// let conteiner = document.getElementById("productos")

// let newProduct1 = document.createElement("div");
// newProduct1.setAttribute("class", "producto");

// let name_newProduct = document.createElement("h3");
// name_newProduct.textContent = "newProduct"
// newProduct1.appendChild(name_newProduct);

// let price_newProduct = document.createElement("p");
// price_newProduct.textContent = "$5000";
// price_newProduct.setAttribute("class", "precio");
// newProduct1.appendChild(price_newProduct);

// let image_product1 = document.createElement("img");
// image_product1.src = "";
// conteiner.appendChild(newProduct1);
