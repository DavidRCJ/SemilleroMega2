document.addEventListener("DOMContentLoaded", () => {
    const fullName = document.getElementById("fullName");
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");
    const about = document.getElementById("about");
  
    const btnGuardar = document.getElementById("btnGuardar");
    const btnEditar = document.getElementById("btnEditar");
    const btnSalir = document.getElementById("btnSalir");
  
    const profileImg = document.getElementById("profileImg");
    const imgInput = document.getElementById("imgInput");
    
   
    
///////////////////////////////////////////////////////////////////////    

    //  Cargar datos desde localStorage al inicio
    const savedData = JSON.parse(localStorage.getItem("userProfile"));
    if (savedData) {
      fullName.value = savedData.fullName;
      userName.value = savedData.userName;
      email.value = savedData.email;
      phoneNumber.value = savedData.phoneNumber;
      about.value = savedData.about;
        // Deshabilitar campos al inicio
      toggleInputs(true);
    }
  
    // Validación y guardado
    btnGuardar.addEventListener("click", () => {
      const profile = {
        fullName: fullName.value.trim(),
        userName: userName.value.trim(),
        email: email.value.trim(),
        phoneNumber: phoneNumber.value.trim(),
        about: about.value.trim()
      };
  
      if (!validateFields(profile)) return;
  
      console.log("Datos guardados:", profile);
  
      localStorage.setItem("userProfile", JSON.stringify(profile));
      toggleInputs(true);
      alert("¡Perfil guardado!");
    });
  
    // Editar
    btnEditar.addEventListener("click", () => {
      toggleInputs(false);
    });
  
    // Salir (cerrar sesión → redirigir a Home)
    btnSalir.addEventListener("click", () => {
      localStorage.removeItem("userProfile");
      window.location.href = "index.html"; // Ajustá esto si tu home es otro
    });
  
    function toggleInputs(disabled) {
      fullName.disabled = disabled;
      userName.disabled = disabled;
      email.disabled = disabled;
      phoneNumber.disabled = disabled;
      about.disabled = disabled;
    }
  
    function validateFields(data) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d+$/;
  
      if (!data.fullName || !data.userName || !data.email || !data.phoneNumber) {
        alert("Todos los campos deben estar completos.");
        return false;
      }
  
      if (!emailRegex.test(data.email)) {
        alert("Email inválido.");
        return false;
      }
  
      if (!phoneRegex.test(data.phoneNumber)) {
        alert("El número de teléfono debe contener solo dígitos.");
        return false;
      }
  
      return true;
    }
  });

 // Mostrar imagen guardada si existe
   const savedImg = localStorage.getItem("profileImage");
   if (savedImg) {
     profileImg.src = savedImg;
   }
   
   // Al seleccionar una imagen
   imgInput.addEventListener("change", (e) => {
     const file = e.target.files[0];
     if (file && file.type.startsWith("image/")) {
       const reader = new FileReader();
       reader.onload = () => {
         const imageData = reader.result;
         profileImg.src = imageData;
         localStorage.setItem("profileImage", imageData);
       };
       reader.readAsDataURL(file);
     } else {
       alert("Seleccioná una imagen válida.");
     }
   });
  