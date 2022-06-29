const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((LocalmediaStream) => {
        console.log(LocalmediaStream);
        video.srcObject = LocalmediaStream;
        paintCanvas()
    })
    .catch(() => alert("no tiene acceso de camara"));
}

function paintCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.Width = width;
  canvas.Heigth = height

  setInterval(() =>{
    ctx.drawImage(video,0,0,width,height)
    let pixeles = ctx.getImageData(0,0,width,height)
    pixeles.redEfect(pixeles)
    ctx.putImageData(pixeles,0,0)
    console.log(pixeles)
  },16)
}
function redEfect(pixeles){
    for(i=0;i<pixeles.data.length;i + 4){
        pixeles.data[i] = pixeles.data[i] = 200;
    }
}
function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'foto')
    link.innerHTML =  `<img src="${data}" alt="descargar">`
    strip.insertBefore(link, strip.firstChild)
    console.log(data)
}
getVideo();
video.addEventListener('canplay', paintCanvas)