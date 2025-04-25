// Función de iniciar sesión
function iniciarSesion() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Asegurarse de que ambos campos están completos
  if (!email || !password) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  // Aquí puedes integrar con Firebase u otro sistema de autenticación.
  // Ejemplo usando Firebase:
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Al iniciar sesión correctamente
      console.log("Usuario iniciado sesión:", userCredential.user);
      // Redirigir a la página de bienvenida (index.html)
      window.location.href = "index.html";
    })
    .catch(error => {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    });
}

// Función de registrar usuario
function registrarUsuario() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Asegurarse de que ambos campos están completos
  if (!email || !password) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  // Aquí puedes integrar con Firebase u otro sistema de autenticación.
  // Ejemplo usando Firebase:
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Al registrar correctamente
      console.log("Usuario registrado:", userCredential.user);
      // Redirigir a la página de inicio de sesión
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error("Error al registrar usuario:", error);
      alert("Error al registrar. Intenta nuevamente.");
    });
}
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>

// Función para cerrar sesión
function logout() {
  firebase.auth().signOut()
    .then(() => {
      console.log("Sesión cerrada");
      // Redirigir al login después de cerrar sesión
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error("Error al cerrar sesión:", error);
    });
}

