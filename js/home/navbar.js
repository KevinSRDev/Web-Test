const openButton = document.getElementById('open-SideBar-btn')
const navbar = document.getElementById('navBarM')
const media = window.matchMedia("(width < 600px)")
const icono = document.getElementById('miIcono');
const texto = document.getElementById('miTexto');

icono.addEventListener('mouseover', () => {
  texto.style.display = 'flex';
});

icono.addEventListener('mouseout', () => {
  texto.style.display = 'none';
});

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches
    console.log(isMobile)

    if (isMobile) {
        navbar.setAttribute('inert', '')
    }
    else {
        // desktop device
        navbar.removeAttribute('inert')
    }
}

function openSideBar() {
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}

function closeSideBar() {
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}


// Inavilita la Nav al dar el primer click :: hay que solucionar

// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(Link => {
//     Link.addEventListener('click', () => {
//         closeSideBar()
//     })
// })

updateNavbar(media)
