// Guardar usuario nuevo
function register() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  if (username && password) {
    localStorage.setItem("user_" + username, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } else {
    alert("Por favor, completa todos los campos");
  }
}

// Iniciar sesión
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const savedPassword = localStorage.getItem("user_" + username);
  if (password === savedPassword) {
    localStorage.setItem("userLoggedIn", "true");
    window.location.href = "index.html"; // Redirige al centro de juegos
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
