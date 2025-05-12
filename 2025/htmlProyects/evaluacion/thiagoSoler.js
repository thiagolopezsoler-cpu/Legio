//I´m adding a new travel to tokio(act 1)

let travels = document.getElementById("Viajes");

let travelTokio = document.createElement("div");
travelTokio.setAttribute("class", "viaje");

let name_travelTokio = document.createElement("h2");
name_travelTokio.textContent = "Tokio, Japón";
travelTokio.appendChild(name_travelTokio);

let time_travelTokio = document.createElement("p");
time_travelTokio.textContent = "7 dias";
travelTokio.appendChild(time_travelTokio);

let price_travelTokio = document.createElement("p");
price_travelTokio.textContent = "$1200"
travelTokio.appendChild(price_travelTokio);

let button_travelTokio = document.createElement("button");
button_travelTokio.textContent = "añadir al carrito";
travelTokio.appendChild(button_travelTokio);

travels.appendChild(travelTokio);

// console.log(travelTokio);
// console.log(travels);

// I´m creating a new funtcion for add new travels (act2)

travelAdd1 = { destino: "Buenos Aires, Argentina", duracion: "5 dias", precio: "$800" }

travelAdd2 = { destino: "Roma, Italia", duracion: "5 dias", precio: "$800" };

function agregar_viaje(destino, duracion, precio) {
    let newTravel = document.createElement("div");
    newTravel.setAttribute("class", "viaje")

    let destination = document.createElement("h2");
    destination.textContent = destino;
    newTravel.appendChild(destination);

    let time = document.createElement("p");
    time.textContent = duracion;
    newTravel.appendChild(time);

    let price = document.createElement("p");
    price.textContent = precio
    newTravel.appendChild(price);

    let button = document.createElement("button");
    button.textContent = "añadir al carrito";
    button.addEventListener("click", () => {
        let cart = document.getElementById("carrito");
        let price_car = parseInt(cart.getElementsByTagName("span")[0].textContent.replace("$", ""));
        // console.log(price.textContent.replace("$", ""))
        price_car += parseInt(price.textContent.replace("$", ""))

        cart.getElementsByTagName("span")[0].textContent = "$" + price_car;
    })

    newTravel.appendChild(button);

    travels.appendChild(newTravel);


}

agregar_viaje(travelAdd2.destino, travelAdd2.duracion, travelAdd2.precio);


//I´m adding a funtcion for the button´s paris

let travelParis = document.getElementsByClassName("viaje")[0];
let button_travelParis = travelParis.getElementsByTagName("button")[0];
button_travelParis.addEventListener("click", () => {
    console.log(travelParis.getElementsByTagName("p")[0].textContent);
});
