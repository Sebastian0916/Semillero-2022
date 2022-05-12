let cont1 = 0
let cont2 = 0
 function IniciarJuego(tipo) {
  const comp = getRndInteger();
  let resultado = "";
  console.log("la computadora escogio " + comp);
  switch (tipo) {
    case 1:
     resultado = comp == 1 ? "EMPATE" : comp == 2 ? "TU GANAS" : "TU PIERDES";
     cont1 = cont1 +(comp ==  1 || comp == 3 ? 0 : 1)
     cont2 = cont2 +(comp ==  1 || comp == 2 ? 0 : 1)
      console.log(resultado);
      break;
    case 2:
     resultado = comp == 1 ? "TU PIERDES" : comp == 2 ? "EMPATE" : "TU GANAS";
     cont1 = cont1 +(comp ==  1 || comp == 2 ? 0 : 1)
     cont2 = cont2 +(comp ==  3 || comp == 2 ? 0 : 1)
      console.log(resultado);
      break;
    case 3:
     resultado = comp == 1 ? "TU GANAS" : comp == 2 ? "TU PIERDES" : "EMPATE";
     cont1 = cont1 +(comp ==  2 || comp == 3 ? 0 : 1)
     cont2 = cont2 +(comp ==  1 || comp == 3 ? 0 : 1)
      console.log(resultado);
      break;
  }
  console.log("ganadas usuario " + cont1)
  console.log("ganadas comp " + cont2)
  document.getElementById("elementos").style.display = "none";
  document.getElementById("second").style.display = "";
  document.getElementsByClassName("puntuacion").innerText=cont1
  const img1 = document.getElementsByClassName('img1')[0].getElementsByTagName("img")[0]
  const img2 = document.getElementsByClassName('img2')[0].getElementsByTagName("img")[0]
  var sourceimg = tipo==1?"src/icon-paper.svg":tipo==2?"src/icon-rock.svg": "src/icon-scissors.svg"
  img1.setAttribute("src", sourceimg)
  var sourceimg2 = comp ==1?"src/icon-paper.svg":comp==2?"src/icon-rock.svg": "src/icon-scissors.svg"
  img2.setAttribute("src", sourceimg2)
  document.getElementById("spnResult").innerText=resultado


  var colorImg = tipo==1?"fondo-azul":tipo==2?"fondo-rojo2": "fondo-amarillo"
  var imgParent1 =  img1.parentElement.parentElement;
  imgParent1.classList.remove("fondo-azul")
  imgParent1.classList.remove("fondo-rojo2")
  imgParent1.classList.remove("fondo-amarillo")
  imgParent1.classList.add(colorImg)

  var colorImg2 = comp==1?"fondo-azul":comp==2?"fondo-rojo2": "fondo-amarillo"
  var imgParent2 =  img2.parentElement.parentElement;
  imgParent2.classList.remove("fondo-azul")
  imgParent2.classList.remove("fondo-rojo2")
  imgParent2.classList.remove("fondo-amarillo")
  imgParent2.classList.add(colorImg2)
}

function ReiniciarJuego(){
    document.getElementById("elementos").style.display = "";
    document.getElementById("second").style.display = "none";
}

function getRndInteger() {
  const max = 3;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reglas() {
  const imgreglas = document.getElementsByClassName("img-reglas")[0];
  imgreglas.classList.toggle("hidde");
}





function IniciarJuego(tipo, comp) {
    comp = 1;
    switch (tipo) {
      case 1:
        if (comp == 1) {
          console.log("empate");
        }
        if (comp == 2) {
          console.log("gano");
        }
        if (comp == 3) {
          console.log("pierde");
        }
        break;
      case 2:
        if (comp == 1) {
          console.log("pierde");
        }
        if (comp == 2) {
          console.log("empate");
        }
        if (comp == 3) {
          console.log("gana");
        }
        break;
      case 3:
        if (comp == 1) {
          console.log("gana");
        }
        if (comp == 2) {
          console.log("pierde");
        }
        if (comp == 3) {
          console.log("empate");
        }
         break;
     }
  }
  