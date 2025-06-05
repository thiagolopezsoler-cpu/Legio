// Elimina todos los estilos cargados
document.querySelectorAll('link[rel="stylesheet"], style').forEach(e => e.remove());

// Crea nuevo estilo dark
const style = document.createElement('style');
style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { background: #000; color: #fff; font-family: Arial, sans-serif; }
    form { background: #111; border-right: 2px solid #900; padding: 1rem; }
    input, select, button { background: #222; color: #fff; border: 1px solid #900; padding: 0.5rem; }
    button { background: #900; cursor: pointer; }
    button:hover { background: #c00; }
    #grafico { background: #111; border-left: 2px solid #900; }
`;
document.head.appendChild(style);


const ctx = document.getElementById('grafico').getContext('2d');
let grafico;

const data = {
    labels: [],
    datasets: [{
        label: 'Coseno',
        data: [],
        borderColor: 'red'
    }]
};

for (let x = 0; x < 10; x += 0.1) {
    data.labels.push(( x / Math.PI ).toFixed(2)); // eje x normal
    data.datasets[0].data.push(Math.cos(x)); // valores cos(x)
}

const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        }
    }
);

