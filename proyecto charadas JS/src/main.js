//variables
const indexGame = document.querySelector("#game_settings");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const rulesBtn = document.querySelector("#btnRules");
const sectionSettings = document.getElementById("setting");
const rulesPoopUp = document.querySelector("#poop");
const closePopup = document.querySelector(".closeRules");
//funciones
function displaySettings() {
  sectionSettings.style.display = "flex";
  main.style.display = "none";
  footer.style.display = "flex";
}

function displayRules() {
  rulesPoopUp.style.display = "flex";
}
function closeRules() {
  rulesPoopUp.style.display = "none";
}
//eventos
indexGame.addEventListener("click", displaySettings);
rulesBtn.addEventListener("click", displayRules);
closePopup.addEventListener("click", closeRules);
var numerosqYaSalieron = [];
var yaSalieronTodos = false;
function json() {
  if (!yaSalieronTodos) {
    fetch("./src/wordsJS.JSON")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then(function (jsonData) {
        const MyData = jsonData;
        if (!yaSalieronTodos) {
         
          let aleatorio = Math.floor(
            (Math.random() * Object.keys(jsonData).length)+1            
          ).toString();
          var lenghtJs = Object.keys(jsonData).length;
          while (
            numerosqYaSalieron.filter((num) => num == aleatorio).length > 0 &&
            numerosqYaSalieron.length < lenghtJs &&
            yaSalieronTodos == false
          ) {
            aleatorio = Math.floor(
              (Math.random() * Object.keys(jsonData).length)+1
            ).toString();
          }
          if (numerosqYaSalieron.length == Object.keys(jsonData).length) {
            console.log("Ya salieron todos los elementos del array preubas");
            yaSalieronTodos = true;
          } else {
            var resp = jsonData["wordsJs" + aleatorio];
            numerosqYaSalieron.push(aleatorio);

            console.log("la palablar es " + resp);
          }
       
        } else {
          console.log("Ya salieron todos los elementos del array");
        }
      });
  } else {
    console.log("Ya salieron todos los elementos del array");
  }
  //console.log(" la palabra es " + random);
}
json()