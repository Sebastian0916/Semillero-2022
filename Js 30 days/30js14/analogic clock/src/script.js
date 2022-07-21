//variables
let secondHand = document.querySelector('.second-hand');
let minsHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
//funciones

function setDate(){
    const now = new Date()
    const second = now.getSeconds()
    const SecondsDegress = ((second/60)*360) + 90;
    secondHand.style.transform = `rotate(${SecondsDegress}deg)`;

    const mins = now.getMinutes()
    const minsDegrees = ((mins/60)*360) + ((second/60)*6)+90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours()
    const hoursDegrees = ((hours/12)*360) + ((mins/60)*30)+90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
//eventos-invocaciones
setInterval(setDate)
setDate()