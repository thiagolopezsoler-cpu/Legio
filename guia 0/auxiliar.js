function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
  
    let rows = 4; // Cantidad de filas
    let cols = 3; // Cantidad de columnas
    let cellWidth = 150; // Ancho de cada celda
    let cellHeight = 50; // Alto de cada celda
  
    // Coordenadas para centrar la tabla
    let startX = (width - cols * cellWidth) / 2;
    let startY = (height - rows * cellHeight) / 2;
  
    fill(255);
    textSize(20);
  
    // Dibujamos la tabla
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Calcular las coordenadas de la celda actual
        let x = startX + j * cellWidth;
        let y = startY + i * cellHeight;
        
        // Dibujar el rectángulo de la celda
        stroke(255);
        noFill();
        rect(x, y, cellWidth, cellHeight);
  
        // Texto de ejemplo en la celda
        fill(255);
        text(`(${i}, ${j})`, x + cellWidth / 2 - 15, y + cellHeight / 2 + 5);
      }
    }
  }