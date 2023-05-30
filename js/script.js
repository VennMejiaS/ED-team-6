const boton = document.getElementById("button");
boton.addEventListener("click", ingresar);

function ingresar() {
  const email = document.getElementById("e-mail").value;
  const url = `https://team-6-back.onrender.com/docs/#/User/get_api_users`; 
  
  fetch('https://team-6-back.onrender.com/docs/#/User/get_api_users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const estudianteEmail = data.estudianteEmail; 
      const docenteEmail = data.docenteEmail; 
      const rol = data.rol; 

      console.log(email, estudianteEmail, docenteEmail, rol); 

      if (email === estudianteEmail && rol === 'estudiante') {
        // Redirigir a estudiante.html si el correo y el rol son correctos para un estudiante
        location.replace('estudiante.html');
      } else if (email === docenteEmail && rol === 'docente') {
        // Redirigir a docente.html si el correo y el rol son correctos para un docente
        location.replace('docente.html');
      } else {
        // Mostrar alerta si el correo o el rol son incorrectos
        alert('E-mail o rol incorrecto');
      }
    })
}

// Obtén una referencia al botón "Ingresar"
const botonIngresar = document.getElementById('btn-ingresar');

// Agrega un evento de clic al botón
botonIngresar.addEventListener('click', function() {
  // Redirige a la página "estudiante.html"
  window.location.href = '../estudiante.html';
});