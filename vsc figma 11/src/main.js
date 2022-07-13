let nombre = document.querySelector(".nombre");
let compania = document.querySelector(".nombreCompania");
let descripcion = document.querySelector(".descripcion");
let numero = document.querySelector(".numero");
let correo = document.querySelector(".correo");

const validarNombre = function () {
  const regexN = /^([A-Z]{1}[a-znáéíóú]+[\s]*)+$/;
  if (regexN.test(nombre.value)) {
    nombre.style.borderColor = "#4ED34C";
  } else {
    nombre.style.borderColor = "#FD2D5F";
  }
};
nombre.addEventListener("keydown", validarNombre);

const validarNit = function () {
  if (isNaN(compania.value)) {
    compania.style.borderColor = "#4ED34C";
  } else {
    compania.style.borderColor = "#FD2D5F";
    alert("falta texto")
  }
};
compania.addEventListener("keydown", validarNit);

const validarDescripcion = function () {
    if (isNaN(descripcion.value)) {
      descripcion.style.borderColor = "#4ED34C";
    } else {
      descripcion.style.borderColor = "#FD2D5F";
    }
  };
  descripcion.addEventListener("keydown", validarDescripcion);

const validarNumero = function () {
  const regexT = /^[0-9]+$/;
  if (regexT.test(numero.value)) {
    numero.style.borderColor = "#4ED34C";
  } else {
    numero.style.borderColor = "#FD2D5F";
  }
};
numero.addEventListener("keydown", validarNumero);

const validarCorreo = function () {
  const regexC = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  const regexCo =
    /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.[a-zA-Z]{1,3}$/;
  if (regexC.test(correo.value) || regexCo.test(correo.value)) {
    correo.style.borderColor = "#4ED34C";
  } else {
    correo.style.borderColor = "#FD2D5F";
  }
};
correo.addEventListener("keydown", validarCorreo);
