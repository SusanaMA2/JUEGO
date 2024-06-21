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

	 localStorage.setItem('bgColor2Enabled', 'true');
	 
	////////////////////////////
	
		// Agregar la clase "clicked" al botón
    document.querySelector('.der-btn').classList.add('clicked');
    // Después de 1 segundo, quitar la clase "clicked" para volver al color original
    setTimeout(function() {
        document.querySelector('.der-btn').classList.remove('clicked');
		 window.location.href = 'jentero.html';
    }, 1000); // Tiempo en milisegundos
	

	
}



document.addEventListener('DOMContentLoaded', function () {
    const siguienteBtn = document.querySelector('.der-btn');
	 const headerText = document.getElementById('header-text1');
	 const tipoBtn = document.getElementById('tipo-btn');
    const nombreBtn = document.getElementById('nombre-btn');
    const valorBtn = document.getElementById('valor-btn');
	const repBtn = document.getElementById('r-btn');
	
	
	 const tipoBtn1 = document.querySelector('.tipo-btn');
    const nombreBtn1 = document.querySelector('.nombre-btn');

	
	 
	  valorBtn.addEventListener('click', function () {
        document.getElementById('contents').classList.add('hidden');
        document.getElementById('content0').classList.remove('hidden');
		updateHeaderText(': Identifica el valor');
    });
	nombreBtn.addEventListener('click', function () {
        document.getElementById('contents').classList.add('hidden');
        document.getElementById('content3').classList.remove('hidden');
		updateHeaderText(': Define un nombre');
    });
	tipoBtn.addEventListener('click', function () {
        document.getElementById('contents').classList.add('hidden');
        document.getElementById('content2').classList.remove('hidden');
		updateHeaderText(': Identifica el tipo');
    });
	repBtn.addEventListener('click', function () {
        document.getElementById('contentp').classList.add('hidden');
        document.getElementById('contents').classList.remove('hidden');
    });
	
	
	
	
	document.querySelectorAll('input[name="option1"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
        if (this.value.toLowerCase() === '7') {
            showSuccessIcon(this);            
            setTimeout(function () {
                document.getElementById('content0').classList.add('hidden');
                document.getElementById('contents').classList.remove('hidden');
				updateHeaderText('');
                valorBtn.textContent = '7';
                nombreBtn.innerHTML = '<img id="imgmano" src="imagen/mano.png" alt="imagenb">';
				nombreBtn1.disabled = false;
            }, 2000);
			
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });
	 });



	document.querySelectorAll('input[name="option2"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
        if (this.value === '1' || this.value === '2') {
            showSuccessIcon(this);
            
            setTimeout(function () {
                document.getElementById('content3').classList.add('hidden');
                document.getElementById('contents').classList.remove('hidden');
				updateHeaderText('');
                 // Actualizar nombreBtn con el texto seleccionado
                if (this.value === '1') {
                    nombreBtn.textContent = 'bts';
					tipoBtn.innerHTML = '<img id="imgmano" src="imagen/mano.png" alt="imagenb">';
                } else if (this.value === '2') {
                    nombreBtn.textContent = 'siete';
					tipoBtn.innerHTML = '<img id="imgmano" src="imagen/mano.png" alt="imagenb">';
                }
				tipoBtn1.disabled = false;
            }.bind(this), 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });
	 });



	document.querySelectorAll('input[name="option3"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
        if (this.value.toLowerCase() === 'entero') {
            showSuccessIcon(this);
            
            setTimeout(function () {
                document.getElementById('content2').classList.add('hidden');
                document.getElementById('contents').classList.remove('hidden');
				updateHeaderText('');
                tipoBtn.textContent = 'entero';
				siguienteBtn.disabled = false;
				
				document.getElementById('contentm').classList.remove('hidden'); 
               
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });

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

