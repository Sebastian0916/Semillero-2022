function jsonDatosDePagos() {
  fetch("data/lineas-de-pagos.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      data.causacionesPorItems.map((obj) => {
        const valNum = parseFloat(obj.totalPorItem.valor)
        let obsevacionesJson = ""
        let tipoItem = obj.idItem.toUpperCase() + obj.evento.guid.split("-")[0];
        let tipoItemText = obj.idItem.toUpperCase();
        let definicionColor = tipoItemText.indexOf("SAL") >= 0 ? "#447DA9" : tipoItemText.indexOf("TRA") >= 0 ? "#447DA9" : tipoItemText.indexOf("VAC") >= 0 ? "#F3B754" : tipoItemText.indexOf("SEG") >= 0 ? "#F14C60" : "";

        const divVal = document.createElement("div");
        divVal.id = "val";
        divVal.classList.add("valCont");

        const divClass = document.createElement("div");
        divClass.classList.add("val" );

        const spnValor = document.createElement("span");
        spnValor.classList.add("spnVal");
        spnValor.append(document.createTextNode(tipoItemText));

        const h3Val = document.createElement("h3");
        h3Val.classList.add("h3descrip");
        h3Val.append(document.createTextNode(obj.item));

        if (obj.observacion != null) {
          obsevacionesJson = obj.observacion
        }

        const spanVal = document.createElement("span");
        spanVal.classList.add("spanDescrip");
        spanVal.append(document.createTextNode(obsevacionesJson));
        let lengthObservaciones = obj.item.length * 8.5
        let minMarg = lengthObservaciones < 100 ? 100 : lengthObservaciones
        spanVal.style.marginLeft = minMarg + "px"
        spanVal.style.marginTop = "45px"

        const imgVal = document.createElement("img");
        imgVal.src = "imagenes/Imagen4.png";
        imgVal.classList.add("bandera");
        imgVal.style.backgroundColor = definicionColor;

        divClass.append(spnValor)
        divClass.append(h3Val)
        divClass.append(spanVal)
        divClass.append(imgVal)
        divVal.append(divClass);

        const divValDesc = document.createElement("div");
        divValDesc.classList.add("vrMes");

        const h3ValDesc = document.createElement("h3");
        h3ValDesc.classList.add("mes-pago");
        const sueldo = obj.totalPorItem.valor.toLocaleString();
        if (valNum < 0) {
          h3ValDesc.style.color = definicionColor
        }
        h3ValDesc.append(document.createTextNode(sueldo));

        const divValCuadros = document.createElement("div");
        divValCuadros.classList.add("cuadros-pagos");

        const imgValDesc = document.createElement("img");
        imgValDesc.src = "imagenes/Imagen5.png";
        imgValDesc.classList.add("fondo1");

        divValDesc.append(h3ValDesc)
        divValDesc.append(imgValDesc)
        divVal.append(divValDesc)
        divVal.append(divValCuadros)

        const divTotalDias = document.createElement("div");
        divTotalDias.classList.add("totalDias");
        divTotalDias.innerText = obj.dias

        divVal.append(divTotalDias)
        document.getElementById("tabla-bitacora").append(divVal);

        let lenRec = document.getElementsByClassName("recta-numeros")[0].children.length
        for (i = 0; i < lenRec; i++) {
          const cuadroValores = document.createElement('div')
          cuadroValores.classList.add('cuadroPagos')
          cuadroValores.classList.add('CP' + tipoItem + '_' + (i + 1))
          divValCuadros.append(cuadroValores)
        }
        for (let key in obj.detalles) {
          let elem = document.getElementsByClassName('CP' + tipoItem + '_' + key)[0];
          let detalles = obj.detalles[key];
          elem.style.backgroundColor = definicionColor
          if (detalles.estado.descripcion.toUpperCase() == "PAGADO") {
            elem.style.borderLeft = 'solid #cecece 0.1px'
            elem.style.opacity = '0.7';
            elem.style.cursor = "pointer"
            const imgValChulo = document.createElement("img");
            imgValChulo.src = "imagenes/vector.svg";
            imgValChulo.style.margin = "8px";

            elem.append(imgValChulo)
            const hoverElm = document.createElement("div")
            hoverElm.append(document.createTextNode(`$ ` + obj.detalles[key].dinero.valor.toLocaleString()))
            hoverElm.classList.add('valHover')
            hoverElm.style.display = "none"
            hoverElm.style.zIndex = "1"
            hoverElm.style.background = definicionColor
            hoverElm.style.marginTop = "-30px"
            hoverElm.style.position = "absolute"


            elem.append(hoverElm)
            elem.addEventListener('mouseover', (obja) => {
              if (obja.target.getElementsByClassName('valHover').length > 0) {
                obja.target.getElementsByClassName('valHover')[0].style.display = "flex"
                obja.target.style.opacity = "1";
              }
            })
            elem.addEventListener('mouseout', (obja) => {
              if (obja.target.getElementsByClassName('valHover').length > 0) {
                obja.target.getElementsByClassName('valHover')[0].style.display = "none"
                obja.target.style.opacity = "0.7";
              }
            })
          }
          else if (detalles.estado.descripcion.toUpperCase() == "EN LIQUIDACIÓN") {
            elem.style.borderLeft = 'solid #d6d6d6 0.1px'
          }
        }
      });
    });
}
jsonDatosDePagos();