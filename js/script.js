// tres constantes para referenciar as "ITEM" divs Projetos
const album = document.getElementById('albumFotos');

const casamento = document.getElementById('casamento');

const buffet = document.getElementById('buffet');

const salao = document.getElementById('salao');


const movieAlbum = document.querySelector('.movieAlbum');

const movieCasamento = document.querySelector('.movieCasamento');

const movieBuffet = document.querySelector('.movieBuffet');

const movieSalao = document.querySelector('.movieSalao');





// evento de click
album.addEventListener('click',() =>{
    album.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});
casamento.addEventListener('click',() =>{
    casamento.classList.toggle('active');
    movieCasamento.classList.toggle('active');
});
buffet.addEventListener('click',() =>{
    buffet.classList('active');
    movieBuffet.classList.toggle('active');
});
salao.addEventListener('click',() =>{
    salao.classList('active');
    movieSalao.classList.toggle('active');
});