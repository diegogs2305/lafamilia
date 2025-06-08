// Función para registrar un usuario con contraseña
function register() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!password || !confirmPassword) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const user = { password };

  localStorage.setItem('user2', JSON.stringify(user));
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  window.location.href = 'inicio_proyectos.html';
}

// Función para iniciar sesión
function login() {
  const password = document.getElementById('password').value;

  if (!password) {
    alert("Por favor, ingresa la contraseña.");
    return;
  }

  // Contraseña mágica válida siempre
  if (password === "Diego") {
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('user2', JSON.stringify({ password: "Diego", invitado: true }));
    window.location.href = 'proyectos.html';
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('user2'));

  if (storedUser && storedUser.password === password) {
    localStorage.setItem('userLoggedIn', 'true');
    window.location.href = 'proyectos.html';
  } else {
    alert("Contraseña incorrecta o usuario no registrado.");
  }
}

// Función para proteger la página proyectos.html
function verificarAcceso() {
  if (!localStorage.getItem('userLoggedIn')) {
    window.location.href = 'inicio_proyectos.html';
  }
}

// Función para mostrar/ocultar la contraseña
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('toggleEye');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.textContent = "🙈"; // Cambia icono a "ojo cerrado"
  } else {
    passwordInput.type = "password";
    eyeIcon.textContent = "👁️"; // Cambia icono a "ojo abierto"
  }
}
