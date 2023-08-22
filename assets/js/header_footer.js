const loadComponent = async (pathHMTL, domElement) => {
    let arq = await fetch(pathHMTL);
    let component = await arq.text();

    document.querySelector(domElement).insertAdjacentHTML("beforeend", component);
}

await loadComponent("assets/components/footer.html", "footer");
await loadComponent("assets/components/header.html", "header");



document.getElementById("menu-mobile-icon").addEventListener("click", (event) => {
    document.getElementById("menu_nav").classList.toggle("menu-visible");
    document.getElementById("menu-mobile-icon").classList.toggle("visible");
    document.getElementById("close-menu-mobile-icon").classList.toggle("visible");
});

document.getElementById("close-menu-mobile-icon").addEventListener("click", (event) => {
    document.getElementById("menu_nav").classList.toggle("menu-visible");
    document.getElementById("menu-mobile-icon").classList.toggle("visible");
    document.getElementById("close-menu-mobile-icon").classList.toggle("visible");
});
