function registerUser() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var university = document.getElementById("university").value;

  // Crear un objeto con los datos del usuario
  var user = {
    name: name,
    email: email,
    password: password,
    address: address,
    university: university
  };

  // Obtener la lista de usuarios del almacenamiento local
  var userList = JSON.parse(localStorage.getItem("users")) || [];

  // Agregar el nuevo usuario a la lista
  userList.push(user);

  // Guardar la lista de usuarios actualizada en el almacenamiento local
  localStorage.setItem("users", JSON.stringify(userList));

  // Redireccionar al index
  window.location.href = "index.html";
}
