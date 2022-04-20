// function validarCorreo(campo) {
//   let lbl = document.getElementById('labelError')
//   let error = document.getElementById('imgError')
//   if (campo.value.indexOf("@") > 0) {
//     // console.log("correo valido");
//     lbl.style.display="none"
//     error.style.display="none"
//   } else {
//     // console.log("correo invalido");
//     lbl.style.display=""
//     error.style.display=""
//   }
// }
let email = document.getElementById("formulario");
let span = document.getElementsByTagName("span");

const validar = function () {
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  const regexo =
    /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
  if (regex.test(email.value) || regexo.test(email.value)) {
    span[0].innerText = "your email is valid";
    span[0].style.color = "";
  } else {
    span[0].innerText = "your email is invalid";
    span[0].style.color = "#ee979b";
    span[0].style.top = "300px"
    span[0].style.fontSize ="10px"
  }
};
email.addEventListener("keydown", validar);
