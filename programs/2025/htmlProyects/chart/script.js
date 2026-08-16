// 1. Referencias iniciales a elementos del DOM
const formulario = document.getElementById('formulario');
const inputAmplitud = document.getElementById('amplitud');
const valorAltura = document.getElementById('valorAltura');
const inputInicio = document.getElementById('inicio');
const inputFin = document.getElementById('fin');
const inputFuncion = document.getElementById('funcion');
const ctx = document.getElementById('grafico').getContext('2d');

let grafico;

// 2. Event listener para el formulario (evita recargar y dibuja)
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    graficar();
});

// 3. Event listener para el control de amplitud (refresca valor y grafica)
inputAmplitud.addEventListener('input', function () {
    valorAltura.textContent = this.value;
    graficar();
});

// 4. Función principal para graficar
function graficar() {
    // 5. Obtener valores de entrada
    const inicio = parseFloat(inputInicio.value);
    const fin = parseFloat(inputFin.value);
    const funcion = inputFuncion.value;
    const amplitud = parseFloat(inputAmplitud.value);

    // 6. Preparar datos de ejes
    const eje_x = [];
    const eje_y = [];

    // 7. Calcular puntos de la función
    for (let i = inicio; i <= fin; i += 0.1) {
        let y = 0;
        if (funcion === "sin") y = Math.sin(i);
        else if (funcion === "cos") y = Math.cos(i);

        eje_x.push((i / Math.PI).toFixed(2)); // valores de x en múltiplos de π
        eje_y.push(y * amplitud);             // valores de y escalados
    }

    // 8. Destruir gráfico anterior si existe
    if (grafico) grafico.destroy();

    // 9. Crear gráfico con Chart.js
    grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: eje_x,
            datasets: [{
                label: `${funcion}(x)`,
                data: eje_y,
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true
        }
    });
}
