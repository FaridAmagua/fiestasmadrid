// Detectar cambios en el tamaño de la pantalla
window.addEventListener('resize', function() {
    cambiarImagenSegunTamanio();
});

// Función para cambiar la imagen según el tamaño de la pantalla
function cambiarImagenSegunTamanio() {
    const miDiv = document.getElementById('container-img"');
    const isMovil = window.innerWidth <= 768; // Define el ancho máximo para considerar como móvil
    if (isMovil) {
        // Cambia la clase CSS para aplicar los estilos de móvil
        miDiv.classList.add('imagen-movil');
        miDiv.classList.remove('imagen');
    } else {
        // Cambia la clase CSS para aplicar los estilos de no móvil
        miDiv.classList.add('imagen');
        miDiv.classList.remove('imagen-movil');
    }
}

// Llama a la función al cargar la página para establecer la imagen inicial
cambiarImagenSegunTamanio();
