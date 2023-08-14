// Seleciona o elemento da imagem do logo
let logoImage = document.getElementById('pata');

// Adiciona um ouvinte de evento para o evento "mouseover"
logoImage.addEventListener('mouseover', function() {
    logoImage.style.transform = 'scale(1.1)'; // Aumenta a escala da imagem
});

// Adiciona um ouvinte de evento para o evento "mouseout"
logoImage.addEventListener('mouseout', function() {
    logoImage.style.transform = 'scale(1)'; // Retorna à escala normal da imagem
});


// Adicionando o evento para a imagem do osso
const ossoImage = document.getElementById("osso");
ossoImage.addEventListener("mouseenter", () => {
    ossoImage.style.transform = "scale(1.1)";
});

ossoImage.addEventListener("mouseleave", () => {
    ossoImage.style.transform = "scale(1)";
});


// Seleciona o elemento do título
let title = document.querySelector('h1');

// Adiciona um ouvinte de evento para o evento "mouseover"
title.addEventListener('mouseover', function() {
    title.style.color = 'black'; // Altera a cor do título
});

// Adiciona um ouvinte de evento para o evento "mouseout"
title.addEventListener('mouseout', function() {
    title.style.color = 'white'; // Retorna à cor original do título
});


// Seleciona os elementos do menu
let menuItems = document.querySelectorAll('.nav a');

// Adiciona um ouvinte de evento para cada item do menu
menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.color = 'rgb(255,20,147)'; // Altera a cor do item do menu
    });

    item.addEventListener('mouseout', function() {
        item.style.color = 'white'; // Retorna à cor original do item do menu
    });
});



// Capturando elementos
const nav = document.querySelector('.nav');
const header = document.querySelector('header');

// Toggle de classe para mostrar/esconder o menu responsivo
header.addEventListener('click', () => {
    nav.classList.toggle('show');
});
