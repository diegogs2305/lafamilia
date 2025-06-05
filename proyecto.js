// auth.js

// Función para registrar al usuario
function register() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Verifica que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Verifica que los campos no estén vacíos
  if (!password) {
    alert("Por favor, completa todos los campos.");
    return;
  }


  // Guardamos los datos del usuario en el localStorage
  const user2 = {
    password: password
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

  // Redirige a la página de login
  window.location.href = 'inicio_proyectos.html.';
}

// Función de login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verifica que los campos no estén vacíos
  if (!password) {
    alert("Por favor, ingresa todos los campos.");
    return;
  }

  // Obtiene los datos del usuario registrado desde localStorage
  const storedUser = JSON.parse(localStorage.getItem('user2'));

  if (storedUser && storedUser.password === password) {
    localStorage.setItem('userLoggedIn', true);
    window.location.href = 'proyectos.html';
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
