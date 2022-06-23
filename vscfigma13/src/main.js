window.localStorage.clear();
let tipoLocalStor = "impacto";
let keyLocalStorage = ""
function impacto() {
  tipoLocalStor = "impacto";
  document.getElementById("tablaUno").style.display = "";
  document.getElementById("tablaDos").style.display = "none";
  document.getElementById("tablaTres").style.display = "none";
  document.getElementById("tablaCuatro").style.display = "none";
}

function probabilidades() {
  tipoLocalStor = "probabilidades";
  document.getElementById("tablaUno").style.display = "none";
  document.getElementById("tablaDos").style.display = "";
  document.getElementById("tablaTres").style.display = "none";
  document.getElementById("tablaCuatro").style.display = "none";
}

function tipo() {
  tipoLocalStor = "tipo";
  document.getElementById("tablaUno").style.display = "none";
  document.getElementById("tablaDos").style.display = "none";
  document.getElementById("tablaTres").style.display = "";
  document.getElementById("tablaCuatro").style.display = "none";
}

const createEl = (tagName, clase, texto, parent) => {
  let element = document.createElement(`${tagName}`);
  element.classList.add(`${clase}`);
  element.innerText = `${texto}`;
  parent.append(element);
};
// createEl("h1","titulo","ejemplo de JS", document.querySelector("#derecha"))
function evaluacion() {
  tipoLocalStor = "evaluacion";
  document.getElementById("tablaUno").style.display = "none";
  document.getElementById("tablaDos").style.display = "none";
  document.getElementById("tablaTres").style.display = "none";
  document.getElementById("tablaCuatro").style.display = "";
}

function nuevo() {
  document.getElementById("cuadro").style.display = "flex";
}

function cerrar() {
  document.getElementById("cuadro").style.display = "none";
}

function Guardar() {
  const codigo = document.getElementById("TxtCodigo").value;
  const descripcion = document.getElementById("TxtDescripcion").value;
  const valor = document.getElementById("TxtValor").value;
  
  let datos = [];
  let dato = {
    codigo: codigo,
    descripcion: descripcion,
    valor: valor,
  };
  
  // const localStorage = window.localStorage;
  keyLocalStorage = "localhost_" + tipoLocalStor;
  datos = JSON.parse(localStorage.getItem(keyLocalStorage)) || [];
  datos.push(dato);
  // array a JSON
  let datoJson = JSON.stringify(datos);
  localStorage.setItem(keyLocalStorage, datoJson);
  console.log(localStorage.getItem(keyLocalStorage));

  tablaUsada =
    tipoLocalStor == "impacto"
      ? "tablaUno"
      : tipoLocalStor == "probabilidades"
      ? "tablaDos"
      : tipoLocalStor == "tipo"
      ? "tablaTres"
      : tipoLocalStor == "evaluacion"
      ? "tablaCuatro"
      : "";

  let tbody = document.querySelector("#" + tablaUsada + " tbody");
  tbody.innerHTML = "";
  let aId = JSON.parse(localStorage.getItem(keyLocalStorage));
  let cantidad = aId.length;
  for (let i = 0; i < cantidad; i++) {
    let fila = document.createElement("tr");
    fila.setAttribute("dato-id",i);

    let celdaCodigo = document.createElement("td");
    let nodoCeldaCodigo = document.createTextNode(aId[i].codigo);
    celdaCodigo.appendChild(nodoCeldaCodigo);
    fila.appendChild(celdaCodigo);

    let celdaDescripcion = document.createElement("td");
    let nodoCeldaDescripcion = document.createTextNode(aId[i].descripcion);
    celdaDescripcion.appendChild(nodoCeldaDescripcion);
    fila.appendChild(celdaDescripcion);

    let celdaValor = document.createElement("td");
    let nodoCeldaValor = document.createTextNode(aId[i].valor);
    celdaValor.appendChild(nodoCeldaValor);
    fila.appendChild(celdaValor);

    let celdaAccion = document.createElement("td");
    let celdaAccionTrash = document.createElement("button");
    let celdaAccionPen = document.createElement("button");
    celdaAccionTrash.textContent = "Eliminar";
    celdaAccionPen.textContent = "Editar";
    celdaAccion.appendChild(celdaAccionTrash);
    celdaAccion.appendChild(celdaAccionPen);
    fila.appendChild(celdaAccion);

    tbody.appendChild(fila);
    celdaAccionPen.addEventListener("click", (editar) => {
      document.getElementById("cuadro").style.display="block"
      let celda = editar.target.parentNode.parentNode
      let CeldaEditar = celda.getAttribute("dato.id")
      Actualizar(CeldaEditar)
    });
    celdaAccionTrash.addEventListener("click", (event) => {
      let row = event.target.parentNode.parentNode;
      let datoRow = row.getAttribute("dato-id")
      row.remove();
      Eliminar(datoRow)
    });
  }
}

console.log(keyLocalStorage)
function Eliminar(datoId) {
  let datoObjArr = JSON.parse(localStorage.getItem(keyLocalStorage));
  let datoIndexArr = datoObjArr.findIndex((element) => element.datoId == datoId);
  datoObjArr.splice(datoIndexArr, 1);
  let datoJson = JSON.stringify(datoObjArr);
  localStorage.setItem(keyLocalStorage, datoJson);
}

function Actualizar(editId) {
  let datoObjArrEdit = JSON.parse(localStorage.getItem(keyLocalStorage));
  let datoIndexArrEdit = datoObjArrEdit.findIndex((element) => element.editId == editId);
  let dt =  datoObjArrEdit[datoIndexArrEdit];
  // dt.codigo = ""
  // dt.descripcion = ""
  // dt.valor = ""
  console.log(dt)
  let datoJsonEdit = JSON.stringify(datoObjArrEdit);
  localStorage.setItem(keyLocalStorage, datoJsonEdit);
}