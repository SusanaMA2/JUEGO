document.addEventListener('DOMContentLoaded', function() {
    // Obtener la celda específica que queremos activar (bg-color-2 en este caso)
    var cellToActivate = document.querySelector('.bg-color-2');

    // Función para activar la celda y ajustar la opacidad del fondo semitransparente
    function activateCell(cell) {
        cell.classList.add('active'); // Añadir la clase 'active' a la celda activada
        cell.style.setProperty('--opacity-before', '0'); // Cambiar la opacidad del fondo semitransparente a 0
    }

    // Verificar y aplicar el estado de activación al cargar la página
    var bgColor2Enabled = localStorage.getItem('bgColor2Enabled');
    if (bgColor2Enabled && cellToActivate && !cellToActivate.classList.contains('bg-color-1')) {
        activateCell(cellToActivate); // Activar la celda bg-color-2 y ajustar la opacidad
    }

    // Manejar clic en los enlaces dentro de la celda bg-color-2
    var links = cellToActivate.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!cellToActivate.classList.contains('bg-color-1')) {
                var bgColor2Enabled = localStorage.getItem('bgColor2Enabled');
                if (!bgColor2Enabled) {
                    event.preventDefault(); // Prevenir la acción por defecto del enlace
                    alert('Debe desbloquear esta celda primero.'); // Mostrar mensaje personalizado
                }
            }
        });
    });

    // Escuchar cambios en localStorage desde declaraentero.html
    window.addEventListener('storage', function(event) {
        if (event.key === 'bgColor2Enabled' && JSON.parse(event.newValue)) {
            activateCell(cellToActivate); // Activar la celda bg-color-2 cuando se actualiza desde declaraentero.html
        }
    });
	
	 // Desactivar clic en los enlaces de otras celdas bg-color-X que no sean bg-color-2
    var cellsToDeactivate = document.querySelectorAll('.bg-color-3, .bg-color-4, .bg-color-5, .bg-color-6, .bg-color-7');
    cellsToDeactivate.forEach(function(cell) {
        var links = cell.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevenir la acción por defecto del enlace
                alert('Debe desbloquear la celda primero.'); // Mostrar mensaje personalizado
            });
        });
    });
});
