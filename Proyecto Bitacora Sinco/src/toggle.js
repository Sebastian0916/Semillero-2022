const cambioPeriodo = document.querySelector(".periodo");
const cambioMes = document.querySelector(".meses");

cambioPeriodo.addEventListener("click", () => {
  removeClasElem();
});

cambioMes.addEventListener("click", () => {
  removeClasElem();
});

function removeClasElem() {
  cambioPeriodo.classList.toggle("hidden");
  cambioMes.classList.toggle("hidden");
}
