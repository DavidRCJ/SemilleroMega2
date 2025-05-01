document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnLogin");
  
    btnLogin.addEventListener("click", () => {
      const email = document.getElementById("floatingInput").value.trim();
      const password = document.getElementById("floatingPassword").value.trim();
  
      // Datos de ejemplo (esto lo reemplazarás luego por un API o base de datos)
      const validUser = {
        email: "user@mega.com",
        password: "mega2025"
      };
  
      if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      if (email === validUser.email && password === validUser.password) {
        // Redireccionar si es válido
        window.location.href = "./movies.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  });