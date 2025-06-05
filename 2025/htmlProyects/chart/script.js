document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    graficar();
});

document.getElementById('amplitud').addEventListener('input', function () {
    document.getElementById('valorAltura').textContent = this.value;
    graficar();
});

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
        let y;
        if (funcion === "sin") y = Math.sin(i);
        else if (funcion === "cos") y = Math.cos(i);
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
