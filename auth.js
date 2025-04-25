// Redirección si ya está logueado
if (localStorage.getItem("loggedInUser")) {
  window.location.href = "index.html";
}

// Registro
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("newUsername").value;
  const pass = document.getElementById("newPassword").value;

  if (localStorage.getItem(user)) {
    alert("¡Ese usuario ya existe!");
  } else {
    localStorage.setItem(user, pass);
    alert("¡Registrado con éxito! Ahora puedes iniciar sesión.");
  }
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const storedPass = localStorage.getItem(user);
  if (storedPass === pass) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "index.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});
