let contadorUser = 0
let contadorPc = 0

 function IniciarJuego(tipo) {
  const comp = getRndInteger();
  let resultado = "";
  console.log("la computadora escogio " + comp);
  switch (tipo) {
    case 1:
     resultado = comp == 1 ? "EMPATE" : comp == 2 ? "TU GANAS" : "TU PIERDES";
     contadorUser = contadorUser +(comp ==  1 || comp == 3 ? 0 : 1)
     contadorPc = contadorPc +(comp ==  1 || comp == 2 ? 0 : 1)
      console.log(resultado);
      break;
    case 2:
     resultado = comp == 1 ? "TU PIERDES" : comp == 2 ? "EMPATE" : "TU GANAS";
     contadorUser = contadorUser +(comp ==  1 || comp == 2 ? 0 : 1)
     contadorPc = contadorPc +(comp ==  3 || comp == 2 ? 0 : 1)
      console.log(resultado);
      break;
    case 3:
     resultado = comp == 1 ? "TU GANAS" : comp == 2 ? "TU PIERDES" : "EMPATE";
     contadorUser = contadorUser +(comp ==  2 || comp == 3 ? 0 : 1)
     contadorPc = contadorPc +(comp ==  1 || comp == 3 ? 0 : 1)
      console.log(resultado);
      break;
  }
  console.log("ganadas usuario " + contadorUser)
  console.log("ganadas comp " + contadorPc)


  document.getElementById("elementos").style.display = "none";
  document.getElementById("second").style.display = "";
  document.getElementById("triangle").style.display="none"
  document.getElementById("puntuacion").innerText=contadorUser
  document.getElementById("puntuacioncomp").innerText=contadorPc

  
document.getElementsByClassName("div1").style.display="fixed"


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
    document.getElementById("triangle").style.display=""

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