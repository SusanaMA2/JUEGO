function validateInput(className, expectedValue) {
    const input = document.querySelector(`.${className}`);
    const allInputs = document.querySelectorAll('.assignment input[type="text"]');
    let correctCount = 0;

    // Verificar si el valor ingresado es el esperado
    if (input.value === expectedValue) {
        input.style.color = ''; // Restablecer color predeterminado
        removeNegativeFeedback(className);
    } else {
        input.style.color = 'red'; // Cambiar color a rojo
        addNegativeFeedback(className);
    }

    // Contabilizar el número de inputs correctos
    allInputs.forEach(input => {
        if (input.style.color === '') {
            correctCount++;
        }
    });

    // Enable/disable "Siguiente" button based on all inputs being correct
    const siguienteButton = document.querySelector('.der-btn');
    if (correctCount === 4) {
        siguienteButton.disabled = false;
    } else {
        siguienteButton.disabled = true;
    }
}

function addNegativeFeedback(className) {
    let feedback = document.getElementById(`${className}-feedback`);
    if (!feedback) {
        feedback = document.createElement('span');
        feedback.id = `${className}-feedback`;
        feedback.textContent = '👎';
        document.querySelector(`.${className}`).parentElement.appendChild(feedback);
    }
}

function removeNegativeFeedback(className) {
    const feedback = document.getElementById(`${className}-feedback`);
    if (feedback) {
        feedback.remove();
    }
}

function close1() {
    // Redirigir a la página deseada
    window.location.href = 'index.html';
}

function anterior2() {
    // Redirigir a la página deseada
    window.location.href = '1.html';
}

function siguiente2() {
    // Redirigir a la página deseada
    window.location.href = 'pag9.html';
}

