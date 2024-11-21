// Seleccionar Elementos del DOM
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("mesage");

// Simular usuario y contraseña correctas
const validUser = "bruno"
const validPassword = "12345";

// Manejo el evento de envio del formulario
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); //Evita el envio rel del formulario

// Obtencion de valores ingresados
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// Validar al usuario y la contraseña
if (username === validUser && password === validPassword) {
    message.style.color = "green";
    message.textContent = "Login exitoso. Redirigiendo...";

//Simular envio de correo (mensaje en consola)
console.log("Correo enviado: El usuario ${username} ingreso correctamente.");

//Redireccion a la pagina principal
setTimeout(() => {
    window.location.href = "pagina2.html"; // cambia por la pagina principal
}, 200);
}else {
 message.style.color ="red";
 message.textContent = "Usuario o contraseña incorrectos.";
}
});

// Función para pedir y mostrar el nombre del usuario
function showWelcomeMessage() {
    const name = prompt("Por favor, ingresa tu nombre:"); // Solicita el nombre del usuario
    if (name) {
      document.getElementById('welcomeMessage').textContent = `¡Hola, ${name}! Bienvenido a la página principal.`;
    } else {
      document.getElementById('welcomeMessage').textContent = "¡Bienvenido! Usuario no identificado.";
    }
  }
  
  // Función para navegar entre páginas
  function navigateTo(page) {
    window.location.href = page; // Redirige a la página especificada
  }
  
  // Llamar a la función de bienvenida al cargar la página
  window.onload = showWelcomeMessage;

  // Seleccionar elementos del DOM
const personalDataForm = document.getElementById('personalDataForm');
const clearFormButton = document.getElementById('clearForm');
const formMessage = document.getElementById('formMessage');

// Manejar el envío del formulario
personalDataForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío real del formulario

  // Obtener datos del formulario
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;

  // Simular envío de datos al correo (mensaje en consola)
  console.log("Formulario enviado:");
  console.log(`Nombre: ${name}, Apellido: ${lastname}, Email: ${email}`);
  
  // Mostrar mensaje dinámico
  formMessage.textContent = "¡Datos enviados exitosamente!";
  formMessage.style.color = "green";

  // Limpiar el formulario automáticamente
  personalDataForm.reset();
});

// Manejar el botón de limpiar
clearFormButton.addEventListener('click', function () {
  personalDataForm.reset(); // Limpia los campos del formulario
  formMessage.textContent = ""; // Limpia el mensaje dinámico
});

// Seleccionar elementos del DOM
const messageForm = document.getElementById('messageForm');
const clearMessageFormButton = document.getElementById('clearMessageForm');
const messageFeedback = document.getElementById('messageFeedback');

// Manejar el envío del formulario de mensaje
messageForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío real del formulario

  // Obtener datos del formulario
  const senderName = document.getElementById('senderName').value;
  const senderLastname = document.getElementById('senderLastname').value;
  const senderEmail = document.getElementById('senderEmail').value;
  const message = document.getElementById('message').value;

  // Simular envío de datos al correo (mensaje en consola)
  console.log("Mensaje enviado:");
  console.log(`De: ${senderName} ${senderLastname}, Email: ${senderEmail}`);
  console.log(`Mensaje: ${message}`);

  // Mostrar mensaje dinámico
  messageFeedback.textContent = "¡Mensaje enviado correctamente!";
  messageFeedback.style.color = "green";

  // Limpiar el formulario automáticamente
  messageForm.reset();
});

// Manejar el botón de limpiar
clearMessageFormButton.addEventListener('click', function () {
  messageForm.reset(); // Limpia los campos del formulario
  messageFeedback.textContent = ""; // Limpia el mensaje dinámico
});
