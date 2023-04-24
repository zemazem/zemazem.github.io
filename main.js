let btnLike = document.querySelector('#like');
let like = document.querySelector('.image');
let disl = document.querySelector('#disl');
let disltxt= document.querySelector('.dis');

btnLike.addEventListener('click', ()=>{
    like.classList.toggle('dnon');
})

disl.addEventListener('click', ()=>{
    disltxt.classList.toggle('dnon');
})
