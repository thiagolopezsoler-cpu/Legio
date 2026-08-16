// Aplicar estilos a todo el cuerpo y a los elementos de entrada
const estilos = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    height: 100%;
    overflow: hidden;
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
}
main {
    display: flex;
    height: 100%;
    width: 100%;
}
form {
    width: 20%;
    min-width: 200px;
    background-color: #111;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    border-right: 2px solid #900;
    box-shadow: 4px 0 10px rgba(255, 0, 0, 0.2);
}
label {
    display: flex;
    flex-direction: column;
    color: #fff;
}
input,
select,
button {
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 1rem;
}
input,
select {
    background-color: #222;
    color: #fff;
    border: 1px solid #900;
}
input[type="range"] {
    accent-color: red;
}
button {
    background-color: #900;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #c00;
}
#grafico {
    width: 80%;
    height: 100%;
    background-color: #111;
    display: block;
    border-left: 2px solid #900;
}
`;

const styleTag = document.createElement('style');
styleTag.textContent = estilos;
document.head.appendChild(styleTag);


let elementos = document.querySelectorAll("input, button, textarea, select");
elementos.forEach(e => {
    e.style.backgroundColor = "#1e1e1e";
    e.style.color = "#ffffff";
    e.style.border = "1px solid #333";
});

// Crear el formulario y añadirlo al main
const form = document.createElement('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    graficar();
});
const main = document.querySelector('main');
main.appendChild(form);

// Añadir elementos al formulario
//input de inicio de la función 
const inicioInput = document.createElement('input');
inicioInput.type = 'number';
inicioInput.id = 'inicio';
inicioInput.name = 'inicio';
inicioInput.step = '0.1';
inicioInput.value = '0';
form.appendChild(inicioInput);

//Input final of the function 
const finInput = document.createElement('input');
finInput.type = 'number';
finInput.id = 'fin';
finInput.name = 'fin';
finInput.step = '0.1';
finInput.value = 'PI * 2';
form.appendChild(finInput);

//hago el select for the sen and cos functions
const funcionSelect = document.createElement('select');
funcionSelect.id = 'funcion';
funcionSelect.name = 'funcion';
funcionSelect.innerHTML = '<option value="sin">Seno</option><option value="cos">Coseno</option>';
form.appendChild(funcionSelect);

//Input to do the amplitude
const amplitudInput = document.createElement('input');
amplitudInput.type = 'range';
amplitudInput.id = 'amplitud';
amplitudInput.name = 'amplitud';
amplitudInput.min = '1';
amplitudInput.max = '10';
amplitudInput.value = '1';
form.appendChild(amplitudInput);


const valorAlturaSpan = document.createElement('span');
valorAlturaSpan.id = 'valorAltura';
valorAlturaSpan.textContent = '1';
form.appendChild(valorAlturaSpan);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Graficar';
form.appendChild(submitButton);

// Añadir el evento para actualizar el valor de la amplitud
document.getElementById('amplitud').addEventListener('input', function () {
    document.getElementById('valorAltura').textContent = this.value;
});

// Configuración del gráfico
const ctx = document.getElementById('grafico').getContext('2d');
let grafico;

function graficar() {
    const inicio = parseFloat(document.getElementById('inicio').value);
    const fin = parseFloat(document.getElementById('fin').value);
    const funcion = document.getElementById('funcion').value;
    const altura = parseFloat(document.getElementById('amplitud').value);

    const eje_x = [];
    const eje_y = [];

    for (let i = inicio; i <= fin; i += 0.1) {
        let y = funcion === "sin" ? Math.sin(i) : Math.cos(i);
        eje_x.push((i / Math.PI).toFixed(2));
        eje_y.push(y * altura);
    }

    if (grafico) grafico.destroy();

    grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: eje_x,
            datasets: [{
                label: `${funcion}(x)`,
                data: eje_y,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true
        }
    });
}
