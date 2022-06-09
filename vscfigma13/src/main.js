
function impacto() {
  document.getElementById("tablaUno").style.display = "";
  document.getElementById("tablaDos").style.display = "none";
  document.getElementById("tablaTres").style.display = "none";
  document.getElementById("tablaCuatro").style.display = "none";
}

function probabilidades() {
  document.getElementById("tablaUno").style.display = "none";
  document.getElementById("tablaDos").style.display = "";
  document.getElementById("tablaTres").style.display = "none";
  document.getElementById("tablaCuatro").style.display = "none";
}

function tipo() {
  document.getElementById("tablaUno").style.display = "none";
  document.getElementById("tablaDos").style.display = "none";
  document.getElementById("tablaTres").style.display = "";
  document.getElementById("tablaCuatro").style.display = "none";
}

function evaluacion() {
  document.getElementById("tablaUno").style.display = "none";
  document.getElementById("tablaDos").style.display = "none";
  document.getElementById("tablaTres").style.display = "none";
  document.getElementById("tablaCuatro").style.display = "";
}

function nuevo() {
  const joder = document.getElementById("cuadro");
  joder.classList.toggle("hidde");
}
