 window.localStorage.clear();
var tipoLocalStor = "impacto";
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
  document.getElementById('tablaCuatro').style.display = "";
  
}

function nuevo() {
  document.getElementById("cuadro").style.display = "flex";
}

function cerrar() {  document.getElementById("cuadro").style.display = "none";
}

function Guardar(e) {

  const codigo = document.getElementById("TxtCodigo").value
  const descripcion = document.getElementById("TxtDescripcion").value
  const valor  = document.getElementById("TxtValor").value
  
  let datos = [];
  let dato = {
    codigo:codigo,
    descripcion: descripcion,
    valor:valor,
  };

  const localStorage = window.localStorage;
  const keyLocalStorage = "localhost_" + tipoLocalStor;
  if (localStorage.getItem(keyLocalStorage) === null) {
    datos.push(dato);
    localStorage.setItem(keyLocalStorage, JSON.stringify(datos));
  } else {
    datos = JSON.parse(localStorage.getItem(keyLocalStorage));
    datos.push(dato);
    localStorage.setItem(keyLocalStorage, JSON.stringify(datos));
  }
  console.log(localStorage.getItem(keyLocalStorage));


  tablaUsada =  
  (tipoLocalStor == "impacto") ? "tablaUno": 
  (tipoLocalStor == "probabilidades") ? "tablaDos" : 
  (tipoLocalStor == "tipo") ? "tablaTres" :
  (tipoLocalStor == "evaluacion") ? "tablaCuatro":""
  
  
  let tbody = document.querySelector("#"+tablaUsada+" tbody");
  tbody.innerHTML = "";
  let aId = JSON.parse(localStorage.getItem(keyLocalStorage));
  let cantidad = aId.length;
  for(let i = 0; i <cantidad; i++){
    let fila = document.createElement('tr');

    let celdaCodigo = document.createElement('td');
    let nodoCeldaCodigo = document.createTextNode(aId[i].codigo)
    celdaCodigo.appendChild(nodoCeldaCodigo);
    fila.appendChild(celdaCodigo);

    let celdaDescripcion = document.createElement('td')
    let nodoCeldaDescripcion = document.createTextNode(aId[i].descripcion)
    celdaDescripcion.appendChild(nodoCeldaDescripcion)
    fila.appendChild(celdaDescripcion)

    let celdaValor = document.createElement('td')
    let nodoCeldaValor = document.createTextNode(aId[i].valor)
    celdaValor.appendChild(nodoCeldaValor)
    fila.appendChild(celdaValor)

    let celdaAccion = document.createElement('td')
    let celdaAccionTrash = document.createElement('img')
    let celdaAccionPen = document.createElement('img')
    celdaAccionTrash.src = './imagenes/bin.png'
    celdaAccionPen.src = './imagenes/pen.png'
    celdaAccion.appendChild(celdaAccionTrash)
    celdaAccion.appendChild(celdaAccionPen)
    fila.appendChild(celdaAccion)
    
     tbody.appendChild(fila)

  }
}

