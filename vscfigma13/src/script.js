const optionsArray = [...document.querySelectorAll("aside")],
  thArray = [...document.querySelectorAll("th")],
  thead = document.querySelector("thead"),
  tbody = document.querySelector("tbody"),
  module = document.getElementById("module"),
  newBtn = document.getElementById("newBtn"),
  xBtn = document.getElementById("x"),
  moduleHeader = document.getElementById("moduleHeader"),
  tableHeader = document.getElementById("tableHeader"),
  val1Label = document.getElementById("val1Label"),
  val2Container = document.getElementById("val2Container"),
  moduleBtn = document.getElementById("moduleBtn"),
  desc = document.getElementById("desc"),
  val1 = document.getElementById("val1"),
  val2 = document.getElementById("val2"),
  trash = document.querySelector(".trash"),
  pencil = document.querySelector(".pencil");

let ImpactArray = [],
  probArray = [],
  typeArray = [],
  evalArray = [];

function InitialMenu() {
  //Asignar evento para llenar el cuerpo de la tabla
  optionsArray.map((option) => { option.addEventListener("click", (e) => CreateTable(e))
      // asignar eventos iconos
      let icons = [...document.querySelectorAll("img")];
      icons.forEach((icon) => {
        icon.addEventListener("click", () => {
          if (icon.classList.contains("trash")) {
            deleteData(icon.id);
          } else {
            module.classList.toggle("hidden");
            editData(icon.id);
            xBtn.onclick = () => module.classList.toggle("hidden");
          }
        });
      });
    });
}
document.body.addEventListener("click", (e) => {
  if (e.target !== newBtn && e.target !== xBtn) {
    return;
  }
  desc.value = "";
  val1.value = "";
  val2.value = "";
  module.classList.toggle("hidden");
});
moduleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createData();
  module.reset();
});
function CreateTable(e) {
  tHeadMaker(e.target);
  tBodyMaker(e.target.innerText);
}

function getData() {
  let tableData = localStorage.getItem(
    document.querySelector("#tableHeader").innerText
  );
  return JSON.parse(tableData);
}
function otherTables(option) {
  if (thArray.length > 4) thArray.pop();
  thArray.map((th) => {
    let thTemplate = document.createElement("th");
    thTemplate.innerText = th.innerText;
    thead.append(thTemplate);
    thArray[1].style.width = "329px";
    thArray[2].style.width = "132px";
    if (option == "TIPOS DE RIESGO") {
      newBtn.style.width = "100px";
      newBtn.innerText = "Nuevo Tipo";
      thArray[2].innerText = "Interno";
      val1Label.innerText = "Interno";
    } else {
      newBtn.style.width = "70px";
      newBtn.innerText = "Nuevo";
      thArray[2].innerText = "Valor";
    }
    thArray[3].innerText = "Accion";
  });
}
function evalRiskTable() {
  if (thArray.length < 5) {
    let newTh = document.createElement("th");
    newBtn.innerText = "Nueva";
    newTh.innerText = "Accion";
    thArray.push(newTh);
  }
  thArray.map((th) => {
    let thTemplate = document.createElement("th");
    thTemplate.innerText = th.innerText;
    thead.append(thTemplate);
    thArray[0].style.width = "131px";
    thArray[1].style.width = "195px";
    thArray[2].style.width = "202px";
    thArray[2].innerText = "Valor Minimo";
    thArray[3].innerText = "Valor Maximo";
    thArray[3].style.width = "202px";
    thArray[4] ? (thArray[4].style.width = "114px") : "";
  });
}
function createData() {
  switch (moduleHeader.innerText) {
    case "IMPACTOS":
      ImpactArray.push({
        code: Math.floor(Math.random() * 100),
        desc: desc.value,
        val: val1.value,
      });
      localStorage.setItem("IMPACTOS", JSON.stringify(ImpactArray));      
      break;
    case "PROBABILIDADES":
      probArray.push({
        code: Math.floor(Math.random() * 100),
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("PROBABILIDADES", JSON.stringify(probArray));
      break;
      case "TIPOS DE RIESGO":
      typeArray.push({
        code: Math.floor(Math.random() * 100),
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("TIPOS DE RIESGO", JSON.stringify(typeArray));
      break;
      default:
    "EVALUACION DE RIESGO"
      evalArray.push({
        code: Math.floor(Math.random() * 100),
        desc: desc.value,
        val: val1.value,
        val2: val2.value,
      });
      localStorage.setItem("EVALUACION DE RIESGO", JSON.stringify(evalArray));
      break;
  }
}
function tHeadMaker(option) {
  moduleHeader.innerText = option.innerText;
  tableHeader.innerText = option.innerText;
  switch (option.innerText) {
    case "EVALUACION DE RIESGO":
      thead.innerHTML = "";
      tbody.innerHTML = "";
      val2Container.classList.remove("hidden");
      val1Label.innerText = "Valor Minimo";
      // moduleHeader.innerText = option.innerText;
      evalRiskTable();
      break;
    default:
      thead.innerHTML = "";
      tbody.innerHTML = "";
      val2Container.classList.add("hidden");
      val1Label.innerText = "Valor";
      otherTables(option.innerText);
      break;
  }
}
function tBodyMaker( currentOption) {
  // console.log(getData(target.innerText), target);
  if (currentOption === "EVALUACION DE RIESGO") {
    getData(currentOption.innerText).map((currentObj) => {
      tbody.innerHTML += `<tr>
        <td>${currentObj.code}</td>
        <td>${currentObj.desc}</td>
        <td>${currentObj.val}</td>
        <td>${currentObj.val2}</td>
        <td>
        <img class="pencil" id="${currentObj.code}" src="./imagenes/pen.png"/>
        <img class="trash" id="${currentObj.code}" src="./imagenes/bin.png>
        </td>
       </tr>`;
    });
  }
  else{ getData(currentOption.innerText).map((currentObj) => {
    tbody.innerHTML += `<tr><td>${currentObj.code}</td>
       <td>${currentObj.desc}</td>
       <td>${currentObj.val}</td>
       <td>${currentObj.val2}</td>
       <td>
       <img class="pencil" id="${currentObj.code}" src="./imagenes/pen.png"/>
       <img class="trash" id="${currentObj.code}" src="./imagenes/bin.png">
       </td>
       </tr>`;
  });
}
}
function deleteData(id) {
  let currentArray = getData();
  let newArray = currentArray.filter((obj) => obj.code !== parseInt(id));
  localStorage.setItem(`${moduleHeader.innerText}`, JSON.stringify(newArray));
  location.reload();
}
function editData(id) {
  let currentArray = getData();
  let currentObj = currentArray.find((obj) => obj.code === parseInt(id));
  switch (moduleHeader.innerText) {
    case "EVALUACION DE RIESGO":
      desc.value = currentObj.desc;
      val1.value = currentObj.val;
      
      break;
    default:
      desc.value = currentObj.desc;
      val1.value = currentObj.val;
      break;
  }
}
window.onload = InitialMenu();
