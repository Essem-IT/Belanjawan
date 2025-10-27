// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ✅ Corrected Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDZABhaqGERqi1-8EZWu00m1BWkUfzaf-U",
  authDomain: "belanjawanapp.firebaseapp.com",
  projectId: "belanjawanapp",
  storageBucket: "belanjawanapp.appspot.com",  // ✅ Fixed here
  messagingSenderId: "259698450299",
  appId: "1:259698450299:web:a95acc84293973aaf127de",
  measurementId: "G-9720KP3RJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("signupBtn").addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Account created successfully!";
    message.style.color = "green";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Login successful!";
    message.style.color = "green";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
});
