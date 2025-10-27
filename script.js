document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Simple example (not secure)
  if (username === "admin" && password === "1234") {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
  }
  const firebaseConfig = {
    apiKey: "AIzaSyDZABhaqGERqi1-8EZWu00m1BWkUfzaf-U",
    authDomain: "belanjawanapp.firebaseapp.com",
    projectId: "belanjawanapp",
    storageBucket: "belanjawanapp.firebasestorage.app",
    messagingSenderId: "259698450299",
    appId: "1:259698450299:web:a95acc84293973aaf127de",
    measurementId: "G-9720KP3RJN"
  };
});
