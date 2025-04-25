// auth.js

// Función para registrar al usuario
function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Verifica que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Verifica que los campos no estén vacíos
  if (!username || !email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Verifica que el correo electrónico sea válido
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Guardamos los datos del usuario en el localStorage
  const user = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

  // Redirige a la página de login
  window.location.href = 'login.html';
}

// Función de login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verifica que los campos no estén vacíos
  if (!username || !password) {
    alert("Por favor, ingresa todos los campos.");
    return;
  }

  // Obtiene los datos del usuario registrado desde localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    alert("¡Inicio de sesión exitoso!");
    localStorage.setItem('userLoggedIn', true);
    window.location.href = 'index.html';
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
