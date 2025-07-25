const botonLinkNew = document.getElementById('btn-link-new')

botonLinkNew.addEventListener('click', linkNoticia)

function linkNoticia(){
   window.location.href = '../pages/viewNoticia.html'
}