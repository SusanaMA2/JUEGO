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
	
	
	window.location.href = 'entero.html';
}
function siguiente() {
	// Agregar la clase "clicked" al botón
    document.querySelector('.der-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.der-btn').classList.remove('clicked');
    }, 1000); // Tiempo en milisegundos
	
	
	
    // Redirigir a la página deseada
    window.location.href = 'jentero.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const siguienteBtn = document.querySelector('.der-btn');
	 const headerText = document.getElementById('header-text1');
	 

	    document.querySelector('.texto0').addEventListener('input', function () {
        if (this.value.toLowerCase() === '7') {
            showSuccessIcon(this);
			this.style.color = ''; // Restablecer el color del texto
            setTimeout(function () {
                document.getElementById('content0').classList.add('hidden');
                document.getElementById('content2').classList.remove('hidden');
				updateHeaderText('Identifica el tipo');
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });
	

    document.querySelector('.texto1').addEventListener('input', function () {
        if (this.value.toLowerCase() === 'entero') {
            showSuccessIcon(this);
			this.style.color = ''; // Restablecer el color del texto
            setTimeout(function () {
                document.getElementById('content2').classList.add('hidden');
                document.getElementById('content3').classList.remove('hidden');
				updateHeaderText('Define un nombre');
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });

    document.querySelector('.texto2').addEventListener('input', function () {
        if (this.value.toLowerCase() === 'bts') {
            showSuccessIcon(this);
			this.style.color = ''; // Restablecer el color del texto
            setTimeout(function () {
                document.getElementById('content3').classList.add('hidden');
                document.getElementById('content4').classList.remove('hidden');
				siguienteBtn.disabled = false;
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });

  	
	
	function updateHeaderText(newText) {
        headerText.textContent = newText;
    }
	
	
	
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


document.addEventListener('DOMContentLoaded', () => {
    const myVideo = document.getElementById('myVideo');


    // Play the video automatically with sound
    myVideo.play().catch(error => {
        console.error('Video playback failed:', error);
    });

    // Ensure the video only plays once
    myVideo.addEventListener('ended', () => {
       const duration = myVideo.duration;
                if (duration) {
                    myVideo.currentTime = duration; // Set to the last second of the video
                    myVideo.pause(); // Pause the video
                }
    });
});

