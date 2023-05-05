const boton = document.getElementById("button")
boton addEventListener("click")
  function validarol(){
   if(document.getElementById('estudiante') && document.getElementById('estudiante').value == variableemail){
    window alert('E-mail o rol incorrecto)')
    location.replace('estudiante.html')
  }
  else{
    location.replace('docente.html')
  }
  
}