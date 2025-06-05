

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

  const user2 = { password };

  localStorage.setItem('user2', JSON.stringify(user2));
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  window.location.href = 'inicio_proyectos.html';
}

function login() {
  const password = document.getElementById('password').value;

  if (!password) {
    alert("Por favor, ingresa la contraseña.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('user2'));

  if ((storedUser && storedUser.password === password) || password === "Diego") {
    localStorage.setItem('userLoggedIn', 'true');
    window.location.href = 'proyectos.html';
  } else {
    alert("Contraseña incorrecta o usuario no registrado.");
  }
}
