// Capturando elementos
const nav = document.querySelector('.nav');
const header = document.querySelector('header');

// Toggle de classe para mostrar/esconder o menu responsivo
header.addEventListener('click', () => {
    nav.classList.toggle('show');
});



// Função para aumentar a imagem e mudar a cor do título
    function addEffectsToServices() {
        const services = document.querySelectorAll('.serviços1, .serviços2, .serviços3');

        services.forEach(service => {
            const image = service.querySelector('img');
            const title = service.querySelector('h2');

            service.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.1)';
                title.style.color = 'black';
            });

            service.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)';
                title.style.color = '';
            });
        });
    }

    // Chamada da função quando a página é carregada
    window.addEventListener('load', () => {
        addEffectsToServices();
    });


