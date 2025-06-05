const addTask = () => {
    if (document.getElementById("tareaInput").value != "") {
        let categories = document.createElement("h3");
        categories.textContent = select.value
        categories.setAttribute("class", "category");

        // if(document.getElementById("tareaInput").value == "CM"){
        //     categories.textContent = "CM";
        // } else if(document.getElementById("tareaInput").value == "MTS"){
        //     categories.textContent = "MTS";
        // };
        const deleteTask = () => {
            newTask.remove();
        }
        let task = document.getElementById("tareaInput").value;
        let newTask = document.createElement("li");
        newTask.innerHTML = task
        newTask.classList.add("tarea");

        newButton = document.createElement("button");
        newButton.textContent = "Delete";
        newButton.addEventListener("click", deleteTask);
        newButton.setAttribute("class", "deleteBtn")

        newTask.appendChild(newButton);
        let conteiner = document.getElementById("listaTareas");
        conteiner.appendChild(newTask);
        document.getElementById("tareaInput").value = "";
        // document.getElementById("tareaInput").value;
        newTask.insertBefore(categories, newButton);
        console.log(newTask);
    }
}
const button = document.getElementsByTagName("button");
button[0].addEventListener("click", addTask);



// I´m creating categories for the tasks


const select = document.createElement("select");

// Añadir opciones al select
const options = ["CM", "MTS"]; // Ejemplo de opciones
options.forEach(optionText => {
    let option = document.createElement("option");
    option.value = optionText.toLowerCase().replace(" ", "_");
    option.textContent = optionText;
    select.appendChild(option);
});

let form = document.getElementsByClassName("formulario");
form[0].insertBefore(select, document.getElementById("agregarBtn"));
