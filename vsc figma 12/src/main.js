function bolita() {
  const cero = document.getElementsByClassName("bola")[0];
  cero.classList.toggle("hidde"); 
}
let arrayPlayData = [];
fetch("./src/playData.json")
  .then((response) => {
    return response.json();
  })
  .then(  function (jsondata) {
    for(let prop in jsondata){
         let opt = document.createElement("option");
        opt.value = prop;
        let textOpt = document.createTextNode(jsondata[prop]);
        opt.appendChild(textOpt);
      document.getElementById("moneda").appendChild(opt);
      }
      console.log(jsondata)
  }) 
