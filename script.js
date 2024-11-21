// Definir un usuario y contraseña de ejemplo
const validUsername = "admin";
const validPassword = "1234";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío del formulario

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si coinciden con los valores definidos
    if (username === validUsername && password === validPassword) {
        // Redirigir a la página principal
        window.location.href = "main.html";
    } else {
        // Mostrar mensaje de error
        document.getElementById("error-message").style.display = "block";
    }
});
