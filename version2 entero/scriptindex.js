
    // Función para deshabilitar los enlaces dentro de las celdas con fondo negro
    document.addEventListener('DOMContentLoaded', function() {
        var cellsToDisable = document.querySelectorAll('.bg-color-2, .bg-color-3, .bg-color-4, .bg-color-5, .bg-color-6, .bg-color-7');
        
        cellsToDisable.forEach(function(cell) {
            var links = cell.querySelectorAll('a');
            links.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    if (!cell.classList.contains('bg-color-1')) {
                        event.preventDefault(); // Prevenir la acción por defecto del enlace
                        alert('Debe desbloquear esta celda primero.'); // Puedes personalizar este mensaje
                    }
                });
            });
        });
    });

