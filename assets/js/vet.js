// Capturando elementos
const nav = document.querySelector('.nav');
const header = document.querySelector('header');

// Toggle de classe para mostrar/esconder o menu responsivo
header.addEventListener('click', () => {
    nav.classList.toggle('show');
});
