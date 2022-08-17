const diasNumeros = document.querySelector('.recta-numeros')
function jsonDiasTrabajados() {
  fetch("data/lineas-de-dias.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      data.map((obj) => { 
        const dia =  document.createElement('div')
        dia.innerText = obj.dia
        dia.classList.add('caja')
        diasNumeros.appendChild(dia)
        if(obj.evento  ==  "T"){
            dia.style.color = "#ABACAD"
        }
        else if(obj.evento == "D"){
            dia.style.color = "black"
            dia.style.fontWeight = "900"
        }
        else if(obj.evento == "V"){
            dia.style.backgroundColor = "#ffffaf"
            dia.style.color = "#F3B610"   
        }
      });
    });
}
jsonDiasTrabajados();