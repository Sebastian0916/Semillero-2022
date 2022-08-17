function ocultar() {
  document.querySelector("#perfil").style.display = "none";
  const abrir = document.querySelectorAll(".abrir");
  const ocultar = document.querySelectorAll(".cerrar");
  for (i = 0; i < abrir.length; i++) {
    abrir[i].style.display = "";
    ocultar[i].style.display = "none";
  }
}
function mostrar() {
  document.querySelector("#perfil").style.display = "";
  const abrir = document.querySelectorAll(".abrir");
  const ocultar = document.querySelectorAll(".cerrar");
  for (i = 0; i < abrir.length; i++) {
    abrir[i].style.display = "none";
    ocultar[i].style.display = "";
  }
}


