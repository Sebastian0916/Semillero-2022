const btndark = document.querySelector('#btn')
const main = document.querySelector('main')
const header = document.querySelector('#content')
const h1 = document.querySelector('h1')
const card = document.querySelectorAll('article')


    btndark.addEventListener('click', e =>{
    main.classList.toggle('darkmode')
    header.classList.toggle('darkmode')
    h1.classList.toggle('darkmode')
    for(i=0; i<card.length;i++){
        card[i].classList.toggle('darkmode')
    }
})
