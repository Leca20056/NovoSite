// três constantes para referenciar as "ITEM" divs Projetos

const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');
const salao = document.getElementById('salao');

const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamentos = document.querySelector('.movieCasamentos');
const movieBufett = document.querySelector('.movieBuffet');
const movieSalao = document.querySelector('.movieSalao');


// eveto de clik
album.addEventListener('click', () =>{
   album.classList.toggle('active');
   movieAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () =>{
    casamentos.classList.toggle('active');
    movieCasamentos.classList.toggle('active');
    });
buffet.addEventListener('click' ,() =>{
     buffet.classList.toggle('active');
     movieBufett.classList.toggle('active');
    });
salao.addEventListener('click',() =>{
    salao.classList.toggle('active');
    movieSalao.classList.toggle('active');
});