function loginUser() {
    // Obtener los valores ingresados por el usuario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Verificar las credenciales del usuario
    if (checkCredentials(email, password)) {
      // Redireccionar al perfil del usuario
      window.location.href = "perfil.html";
    } else {
      alert("Credenciales incorrectas. Inténtelo de nuevo.");
    }
  }
  
  function checkCredentials(email, password) {
    // Obtener la lista de usuarios registrados desde el almacenamiento local
    var userList = JSON.parse(localStorage.getItem("users"));
  
    // Verificar si las credenciales coinciden con algún usuario registrado
    if (userList) {
      for (var i = 0; i < userList.length; i++) {
        if (userList[i].email === email && userList[i].password === password) {
          return true;
        }
      }
    }
  
    return false;
  }
  