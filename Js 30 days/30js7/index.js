let cuentaRegresiva;
const pantallaTiempoRestante = document.querySelector('.pantallatiempoRestante');
const pantallaTiempoFinal = document.querySelector('.pantallaTiempoFinal');
const botones = document.querySelectorAll('[data-tiempo]');
const formulario = document.querySelector('#formularioPersonalizado');


function Temporizador(segundos){
    clearInterval(cuentaRegresiva)
    const ahora = Date.now()
    const tiempoDespues = ahora + segundos * 1000
    MostrarTiempoRestante(segundos)
    MostrarTiempoFinalizacion(tiempoDespues)
     cuentaRegresiva = setInterval(()=>{
         const segundosRestantes = Math.round((tiempoDespues - Date.now()) / 1000);
         if(segundosRestantes < 0){
         clearInterval(cuentaRegresiva)
         return};
         MostrarTiempoRestante(segundosRestantes)
     },1000);
}

function MostrarTiempoRestante(segundos){
    const minutos = Math.floor(segundos/ 60);
    const segundosRestantes = segundos % 60;
    const pantalla = `${minutos}:${segundos < 10 ?'0':''}${segundosRestantes}`;
    pantallaTiempoRestante.textContent =    pantalla;
    document.title = pantalla;
}
function MostrarTiempoFinalizacion(marcaTiempo){
    const final = new Date(marcaTiempo);
    const hora = final.getHours();
    const horaAjustada = hora > 12 ? hora - 12 : hora;
    const minutos = final.getMinutes();
    pantallaTiempoFinal.textContent = `vuelve a las ${horaAjustada}:${minutos < 10 ? '0' : ''}${minutos}`

}

function IniciarTemporizador(){
    const segundos = parseInt(this.dataset.tiempo)
    Temporizador(segundos)
}




botones.forEach(boton =>boton.addEventListener('click', IniciarTemporizador));
formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const mins = parseInt(this.minutos.value)
    console.log(typeof mins);
    Temporizador(mins* 60)
    this.reset()
});