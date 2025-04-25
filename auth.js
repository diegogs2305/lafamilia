// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZL5J8KvXq4O-siJFivVkOCqOpojcBoKM",
  authDomain: "pagina-web-b25b5.firebaseapp.com",
  projectId: "pagina-web-b25b5",
  storageBucket: "pagina-web-b25b5.firebasestorage.app",
  messagingSenderId: "491845378296",
  appId: "1:491845378296:web:e1827a07d157fa05c8db0d",
  measurementId: "G-86F0EJ46LS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para iniciar sesión
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario autenticado:', user.email);
      window.location.href = 'pagina-principal.html';
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error);
    });
}

// Función de cierre de sesión
export function logout() {
  signOut(auth).then(() => {
    console.log('Sesión cerrada');
    window.location.href = 'login.html';
  }).catch((error) => {
    console.error('Error al cerrar sesión:', error);
  });
}

