// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZL5J8KvXq4O-siJFivVkOCqOpojcBoKM",
  authDomain: "pagina-web-b25b5.firebaseapp.com",
  projectId: "pagina-web-b25b5",
  storageBucket: "pagina-web-b25b5.firebasestorage.app",
  messagingSenderId: "491845378296",
  appId: "1:491845378296:web:e1827a07d157fa05c8db0d",
  measurementId: "G-86F0EJ46LS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para registro de usuario
function registerUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "" || password === "") {
    alert('Por favor, ingresa ambos campos.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Usuario registrado:", user);
      alert('¡Registro exitoso!');
      window.location.href = "login.html"; // Redirige al login después de registrarse
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al registrar:', errorMessage);
      alert('Error en el registro: ' + errorMessage);
    });
}

// Función para iniciar sesión
function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "" || password === "") {
    alert('Por favor, ingresa ambos campos.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Usuario iniciado sesión:", user);
      alert('¡Inicio de sesión exitoso!');
      window.location.href = "pagina-bienvenida.html";  // Redirige después del login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al iniciar sesión:', errorMessage);
      alert('Error en el inicio de sesión: ' + errorMessage);
    });
}

// Asegurarse de que el formulario de registro ejecute la función al enviar
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se recargue
  registerUser(); // Llama a la función registerUser
});

// Asegurarse de que el formulario de login ejecute la función al enviar
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se recargue
  loginUser(); // Llama a la función loginUser
});



