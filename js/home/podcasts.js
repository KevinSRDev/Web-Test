// Podcasts
const visualPod = document.querySelector('.boxImgCardPod img');
const tituloPodcast = document.querySelector('.reproductorPod h3');
const nombreAutor = document.querySelector('.reproductorPod p');

const progresoPod = document.getElementById('progresoPod');
const podcasts = document.getElementById('podcasts');

const iconoControlPod = document.getElementById('iconoControlP');
const botonReproducirPausarPod = document.querySelector('.controlesPod button.boton-reproducir-pausarP');

const botonAtrasP = document.querySelector('.controlesPod button.atrasP');
const botonSiguienteP = document.querySelector('.controlesPod button.siguienteP');


// Galeria de Podcasts
const galeriaVisual = [
    {
        imagen:'src/img/pod/podcasts-1.jpg'
    },
    {
        imagen:'src/img/pod/podcasts-2.jpg'
    },
    {
        imagen:'src/img/pod/podcasts-3.jpg'
    },
    {
        imagen:'src/img/pod/podcasts-4.jpg'
    },
    {
        imagen:'src/img/pod/podcasts-5.jpg'
    }
]
const podcastsGaleria = [
    {
        tituloP:'Bifurcated Internet',
        nombreP:'Overlords',
        fuenteP:'src/podcasts/FMA Overlords - Bifurcated Internet.mp3'
    },
    {
        tituloP:'Everyone Benefits',
        nombreP:'Overlords',
        fuenteP:'src/podcasts/FMA Overlords - Everyone Benefits.mp3'
    },
    {
        tituloP:'In The Beginning',
        nombreP:'Overlords',
        fuenteP:'src/podcasts/FMA Overlords - In The Beginning.mp3'
    },
    {
        tituloP:'Make A Difference',
        nombreP:'Overlords',
        fuenteP:'src/podcasts/FMA Overlords - Make A Difference.mp3'
    },
    {
        tituloP:'Net Neutrality Defined',
        nombreP:'Overlords',
        fuenteP:'src/podcasts/FMA Overlords - Net Neutrality Defined.mp3'
    }
]

let visualActual = 0;
let indicePodcastsActual = 0;

function updateSongInfoPod(){
    visualPod.src = galeriaVisual[visualActual].imagen;
    tituloPodcast.textContent = podcastsGaleria[indicePodcastsActual].tituloP;
    nombreAutor.textContent = podcastsGaleria[indicePodcastsActual].nombreP;
    podcasts.src = podcastsGaleria[indicePodcastsActual].fuenteP;
    podcasts.addEventListener('loadeddata', function(){});
};


podcasts.addEventListener('loadedmetadata', function(){
    progresoPod.max = podcasts.duration;
    progresoPod.value = podcasts.currentTime;
})


botonReproducirPausarPod.addEventListener('click', reproducirPausarP);

function reproducirPausarP(){

    if(podcasts.paused){

        reproducirPodcasts();

    } else {

        pausarPodcasts();
    }
};


function reproducirPodcasts(){

    podcasts.play();

    iconoControlPod.classList.add('bi-pause-fill')
    iconoControlPod.classList.remove('bi-play-fill')
};
function pausarPodcasts(){

    podcasts.pause();

    iconoControlPod.classList.remove('bi-pause-fill')
    iconoControlPod.classList.add('bi-play-fill')
};

podcasts.addEventListener('timeupdate', function(){
    
    if(!podcasts.paused){
        progresoPod.value = podcasts.currentTime;
    }
});

progresoPod.addEventListener('input', function(){
    podcasts.currentTime = progresoPod.value;
});

botonSiguienteP.addEventListener('click', ()=>{
    indicePodcastsActual = (indicePodcastsActual + 1) % podcastsGaleria.length;
    visualActual = (visualActual + 1) % galeriaVisual.length;
    updateSongInfoPod();
    reproducirPodcasts();
})
botonAtrasP.addEventListener('click', ()=>{
    indicePodcastsActual = (indicePodcastsActual - 1 + podcastsGaleria.length) % podcastsGaleria.length;
    visualActual = (visualActual - 1 + galeriaVisual.length) % galeriaVisual.length;
    updateSongInfoPod();
    reproducirPodcasts();
})

updateSongInfoPod();