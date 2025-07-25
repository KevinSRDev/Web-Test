// Musica
const tituloCancion = document.querySelector('.reproductorMp3 h1');
const nombreArtista = document.querySelector('.reproductorMp3 p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const iconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonSiguiente = document.querySelector('.controles button.siguiente');

// Galeria de Musica
const canciones = [
    {
        titulo:'Its My Life',
        nombre:'Bon Jovi',
        fuente:'src/music/Bon Jovi  Its My Life Official Music Video.mp3'
    },
    {
        titulo:'Snap Out Of It',
        nombre:'Arctic Monkeys',
        fuente:'src/music/Arctic Monkeys  Snap Out Of It Official Audio.mp3'
    },
    {
        titulo:'Andante',
        nombre:'Achachak',
        fuente:'src/music/Achachak - Andante.mp3'
    },
    {
        titulo:'Todo de Ti',
        nombre:'Rauw Alejandro',
        fuente:'src/music/Rauw Alejandro - Todo de Ti (Video Oficial)(MP3_320K).mp3'
    },
    {
        titulo:'Mírala Como Anda',
        nombre:'Los Dotores De La Carranga',
        fuente:'src/music/Los Dotores De La Carranga - Mírala Como Anda(MP3_160K).mp3'
    },
    {
        titulo:'Es Épico',
        nombre:'Canserbero',
        fuente:'src/music/Es Épico - Canserbero _ vídeo motion comic (REMAKE)(MP3_320K).mp3'
    },
]

let indiceCancionActual = 0;

function updateSongInfo(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata', function(){});
};

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
})


botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){

    if(cancion.paused){

        reproducirCancion();

    } else {

        pausarCancion();
    }
};


function reproducirCancion(){

    cancion.play();

    iconoControl.classList.add('bi-pause-fill')
    iconoControl.classList.remove('bi-play-fill')
};
function pausarCancion(){

    cancion.pause();

    iconoControl.classList.remove('bi-pause-fill')
    iconoControl.classList.add('bi-play-fill')
};

cancion.addEventListener('timeupdate', function(){
    
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

botonSiguiente.addEventListener('click', ()=>{
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    updateSongInfo();
    reproducirCancion();
})
botonAtras.addEventListener('click', ()=>{
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    updateSongInfo();
    reproducirCancion();
})


updateSongInfo();