// obtener botones
const btnHome = document.getElementById('btnHome');
const btnPython = document.getElementById('btnPython');
const btnJS = document.getElementById('btnJS');

// obtener secciones
const sectorHome = document.getElementById('sectorHome');
const sectorPython = document.getElementById('sectorPython');
const sectorJS = document.getElementById('sectorJS');

// función para mostrar una sección y ocultar las otras
function mostrarSector(sector) {
  sectorHome.style.display = 'none';
  sectorPython.style.display = 'none';
  sectorJS.style.display = 'none';

  sector.style.display = 'block';
}

// eventos de click
btnHome.addEventListener('click', () => mostrarSector(sectorHome));
btnPython.addEventListener('click', () => mostrarSector(sectorPython));
btnJS.addEventListener('click', () => mostrarSector(sectorJS));