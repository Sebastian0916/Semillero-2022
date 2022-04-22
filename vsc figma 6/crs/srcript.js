let nombre = document.getElementById("Name");
let errorNombre = document.getElementById("nombre");
let apellido = document.getElementById("lastName");
let errorNombre2 = document.getElementById("segundoNombre");
let email = document.getElementById("email");
let error = document.getElementById("correo");
let contraseña = document.getElementById("password");
let errorContraseña = document.getElementById("contraseña");

const validar_nombre = function () {
  const regexN = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
  if (regexN.test(nombre.value)) {
    errorNombre.style.display = "none";
  } else {
    errorNombre.style.display = "";
  }
};
nombre.addEventListener("keydown", validar_nombre);

const apellido1 = function () {
  const regexS = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

  if (regexS.test(apellido.value)) {
    errorNombre2.style.display = "none";
  } else {
    errorNombre2.style.display = "";
  }
};
apellido.addEventListener("keydown", apellido1);

const validar = function () {
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  const regexo =
    /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.[a-zA-Z]{1,3}$/;
  if (regex.test(email.value) || regexo.test(email.value)) {
    error.style.display = "none";
  } else {
    error.style.display = "";
    error.style.outlineColor = "#ff7978"
  }
};
email.addEventListener("keydown", validar);

const validar_contraseña = function () {
  const regexn = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if (regexn.test(password.value)) {
    console.log("no se encontro contraseña");
    errorContraseña.style.display = "none";
  } else {
    errorContraseña.style.display = "";
  }
};
contraseña.addEventListener("keydown", validar_contraseña);
