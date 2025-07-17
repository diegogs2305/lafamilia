// auth.js

// Función para registrar al usuario
function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!username || !email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = storedUsers.find(user => user.username === username);

  if (userExists) {
    alert("Este nombre de usuario ya está registrado.");
    return;
  }

  const newUser = { username, email, password };
  storedUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(storedUsers));

  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  window.location.href = 'login.html';
}

// Función de login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert("Por favor, ingresa todos los campos.");
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = storedUsers.find(user => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
    window.location.href = 'index.html';
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

// Función para cerrar sesión
function logout() {
  localStorage.removeItem('userLoggedIn');
  window.location.href = 'pagina.html';
}

// Función para verificar si hay sesión activa
function checkSession() {
  const user = JSON.parse(localStorage.getItem('userLoggedIn'));
  if (!user) {
    window.location.href = 'pagina.html';
  }
}

// Función para mostrar el nombre del usuario en el header (o donde tengas el span con id nombreUsuario)
function mostrarNombreUsuario() {
  const userLoggedIn = localStorage.getItem('userLoggedIn');
  if (userLoggedIn) {
    try {
      const user = JSON.parse(userLoggedIn);
      const nombre = user.username || 'Invitado';
      const spanNombre = document.getElementById('nombreUsuario');
      if (spanNombre) {
        spanNombre.textContent = nombre;
      }
    } catch {
      // En caso de error, poner "Invitado"
      const spanNombre = document.getElementById('nombreUsuario');
      if (spanNombre) {
        spanNombre.textContent = 'Invitado';
      }
    }
  }
}

// Solo llamamos a mostrarNombreUsuario al cargar el DOM
document.addEventListener('DOMContentLoaded', mostrarNombreUsuario);