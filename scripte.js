function close1() {
    // Redirigir a la página deseada
    window.location.href = 'index.html';
}
function anterior() {
    // Redirigir a la página deseada
    window.location.href = 'menu.html';
}
function siguiente() {
    // Redirigir a la página deseada
    window.location.href = 'ddecimal.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const siguienteBtn = document.querySelector('.der-btn');

    document.querySelectorAll('input[name="option1"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'si') {
                showSuccessIcon(this);
                setTimeout(function () {
                    document.getElementById('content').classList.add('hidden');
                    document.getElementById('content2').classList.remove('hidden');
                }, 2000);
            } else {
                showFailureIcon(this);
                this.style.color = 'red';
            }
        });
    });

    document.querySelectorAll('input[name="option2"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'numero') {
                showSuccessIcon(this);
                setTimeout(function () {
                    document.getElementById('content2').classList.add('hidden');
                    document.getElementById('content3').classList.remove('hidden');
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
                setTimeout(function () {
                    document.getElementById('content3').classList.add('hidden');
                    document.getElementById('content4').classList.remove('hidden');
                }, 2000);
            } else {
                showFailureIcon(this);
                this.style.color = 'red';
            }
        });
    });

    document.querySelector('.texto1').addEventListener('input', function () {
        if (this.value.toLowerCase() === 'entero') {
            showSuccessIcon(this);
			this.style.color = ''; // Restablecer el color del texto
            setTimeout(function () {
                document.getElementById('question3').classList.add('hidden');
                document.getElementById('question4').classList.remove('hidden');
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });

    document.querySelector('.texto2').addEventListener('input', function () {
        if (this.value.toLowerCase() === 'rosas') {
            showSuccessIcon(this);
			this.style.color = ''; // Restablecer el color del texto
            setTimeout(function () {
                document.getElementById('question4').classList.add('hidden');
                document.getElementById('question5').classList.remove('hidden');
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });

    document.querySelector('.texto3').addEventListener('input', function () {
        if (this.value === '20') {
            showSuccessIcon(this);
			this.style.color = ''; // Restablecer el color del texto
            setTimeout(function () {
                document.getElementById('question5').classList.add('hidden');
                document.getElementById('question6').classList.remove('hidden');
                siguienteBtn.disabled = false;  // Habilitar el botón "Siguiente"
            }, 2000);
        } else {
            showFailureIcon(this);
            this.style.color = 'red';
        }
    });
});

function showSuccessIcon(element) {
    // Verificar si ya hay un icono de fallo en este elemento
    const failureIcon = element.parentNode.querySelector('.failure');
    if (failureIcon) {
        failureIcon.remove();
    }

    // Verificar si ya hay un icono de éxito en este elemento
    let successIcon = element.parentNode.querySelector('.success');
    if (!successIcon) {
        successIcon = document.createElement('span');
        successIcon.textContent = '👍';
        successIcon.classList.add('success');
        element.parentNode.appendChild(successIcon);
        setTimeout(function () {
            successIcon.remove();
        }, 2000);
    }
}

function showFailureIcon(element) {
    // Verificar si ya hay un icono de éxito en este elemento
    const successIcon = element.parentNode.querySelector('.success');
    if (successIcon) {
        successIcon.remove();
    }

    // Verificar si ya hay un icono de fallo en este elemento
    let failureIcon = element.parentNode.querySelector('.failure');
    if (!failureIcon) {
        failureIcon = document.createElement('span');
        failureIcon.textContent = '👎';
        failureIcon.classList.add('failure');
        element.parentNode.appendChild(failureIcon);
        setTimeout(function () {
            failureIcon.remove();
        }, 2000);
    }
}
