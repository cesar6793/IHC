document.addEventListener("DOMContentLoaded", function() {
  // Obtener el usuario almacenado en el LocalStorage
  var user = JSON.parse(localStorage.getItem("user"));

  
    // Mostrar los atributos del usuario en la página
    document.getElementById("nombreBadge").textContent = user.name;
    document.getElementById("universidadBadge").textContent = user.university;
    document.getElementById("emailBadge").textContent = user.email;
    document.getElementById("direccionBadge").textContent = user.address;
  
});