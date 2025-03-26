// Función para obtener el ancho y alto del dispositivo
function getDeviceDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Ancho del dispositivo: ${width}px`);
    console.log(`Alto del dispositivo: ${height}px`);
}

// Detectar cambios en el tamaño de la ventana
window.addEventListener('resize', getDeviceDimensions);

// Llamar a la función al cargar la página
getDeviceDimensions();