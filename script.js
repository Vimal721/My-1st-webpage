let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick =()=> {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');

}

window.onscroll= () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}

const sr= ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal ('.hover-text', {delay:200,origin: 'top'})
sr.reveal ('.home-img', {delay:400,origin: 'top'})
sr.reveal ('.about', '.services', '.cta', '.resume', '.contact', '.copyright', {delay:200, origin:'top'})
