// auth.js

// Función para registrar al usuario
function register() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  if (!password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const user2 = {
    password: password
  };

  localStorage.setItem('user2', JSON.stringify(user2)); // 👈 Aquí guardas correctamente como 'user2'
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  window.location.href = 'inicio_proyectos.html'; // ✅ Quitado el punto extra
}

// Función de login
function login() {
  const password = document.getElementById('password').value;

  if (!password) {
    alert("Por favor, ingresa todos los campos.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('user2')); // 👈 Aquí también usas 'user2'

  if (storedUser && storedUser.password === password) {
    localStorage.setItem('userLoggedIn', true);
    window.location.href = 'proyectos.html';
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

