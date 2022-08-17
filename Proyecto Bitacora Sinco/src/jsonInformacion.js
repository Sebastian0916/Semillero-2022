function jsonInformacion() {
  fetch("data/informacion-perfil.Json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then(function (jsonData) {
      document.querySelector(".nombre-empleado").innerText = jsonData.empleado.nombreCompleto
      document.querySelector(".dato-personal1").innerText = jsonData.area
      document.querySelector(".dato-personal2").innerText =`Cc `+jsonData.empleado.identificacion
      document.querySelector(".dato-personal3").innerText = jsonData.fechaIngreso
      document.querySelector(".dato-personal4").innerText = jsonData.empleado.correoElectronico
      document.querySelector(".hora2").innerText = jsonData.tipoCalendarioBase.descripcion
      document.querySelector("h5").innerText = jsonData.cargo
      document.querySelector(".expedicion").innerText = jsonData.nomina
      document.querySelector(".pago").innerText = `COP `+jsonData.salario.valor.toLocaleString()
      document.querySelector(".ordinario").innerText = jsonData.tipoDeSalario
      document.querySelector(".hora1").innerText = `Cop `+jsonData.valorHora.valor.toLocaleString()
      console.log(jsonData.empleado.nombreCompleto)
    })
    .catch(function (error) {
      console.log(error);
    });
}
jsonInformacion()