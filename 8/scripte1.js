function close1() {
	// Agregar la clase "clicked" al botón
    document.querySelector('.close-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.close-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
    // Redirigir a la página deseada
    window.location.href = 'index.html';
}


// Función para el botón "anterior"
function anterior() {
    // Agregar la clase "clicked" al botón
    document.querySelector('.izq-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.izq-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
	
	window.location.href = 'rentero.html';
}
function siguiente() {
	// Agregar la clase "clicked" al botón
    document.querySelector('.der-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.der-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
	
	
    // Redirigir a la página deseada
    window.location.href = 'dentero.html';
}
function siguiente1() {
	// Agregar la clase "clicked" al botón
    document.querySelector('.der-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.der-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
	
	
    // Redirigir a la página deseada
    window.location.href = 'entero.html';
}
function siguiente2() {
	// Agregar la clase "clicked" al botón
    document.querySelector('.der-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.der-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
	
	
    // Redirigir a la página deseada
    window.location.href = 'decimal.html';
}


// Función para el botón "anterior"
function anterior2() {
    // Agregar la clase "clicked" al botón
    document.querySelector('.izq-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.izq-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
	
	window.location.href = 'jentero.html';
}


document.addEventListener('DOMContentLoaded', function () {
    const siguienteBtn = document.querySelector('.der-btn');
	
 // Mostrar la primera pregunta al cargar la página
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('question3').classList.remove('hidden');


    document.querySelectorAll('input[name="option1"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'numero') {
                showSuccessIcon(this);
                setTimeout(function () {
                    document.getElementById('question3').classList.add('hidden');
                    document.getElementById('question4').classList.remove('hidden');
                }, 2000);
            } else {
                showFailureIcon(this);
                this.style.color = 'red';
            }
        });
    });

    document.querySelectorAll('input[name="option2"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'negativo') {
                showSuccessIcon(this);
                setTimeout(function () {
                    document.getElementById('question4').classList.add('hidden');
                    document.getElementById('question5').classList.remove('hidden');
                }, 2000);
            } else {
                showFailureIcon(this);
                this.style.color = 'red';
            }
        });
    });

    document.querySelectorAll('input[name="option3"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'entero') {
                showSuccessIcon(this);
				siguienteBtn.disabled = false;  // Habilitar el botón "Siguiente"
                
            } else {
                showFailureIcon(this);
                this.style.color = 'red';
            }
        });
    });


});



function showSuccessIcon(element) {
    const failureIcon = element.parentNode.querySelector('.failure');
    if (failureIcon) {
        failureIcon.remove();
    }

    let successIcon = element.parentNode.querySelector('.success');
    if (!successIcon) {
        successIcon = document.createElement('i');
        successIcon.classList.add('fas', 'fa-thumbs-up', 'success');
        element.parentNode.appendChild(successIcon);
        setTimeout(function () {
            successIcon.remove();
        }, 2000);
    }
}

function showFailureIcon(element) {
    const successIcon = element.parentNode.querySelector('.success');
    if (successIcon) {
        successIcon.remove();
    }

    let failureIcon = element.parentNode.querySelector('.failure');
    if (!failureIcon) {
        failureIcon = document.createElement('i');
        failureIcon.classList.add('fas', 'fa-thumbs-down', 'failure');
        element.parentNode.appendChild(failureIcon);
        setTimeout(function () {
            failureIcon.remove();
        }, 2000);
    }
}
