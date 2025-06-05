let eje_x = [];
let eje_y = [];

for (let i = 0; i <= 10; i += 0.1) {
    eje_x.push((i/Math.PI).toFixed(1));
    eje_y.push(Math.sin(i) * 3 + 1);
}

const ctx = document.getElementById('miGrafico').getContext('2d');
const miGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: eje_x,  
        datasets: [{
            label: 'sin(x)',
            data: eje_y,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            tension: 0.1,
            fill: true,
            // pointRadius: 0,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor : 'blue',
        }]
    },
    options: {
        responsive: true
    }
});
