const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {
    const menuSuperior = document.getElementById('menu-superior');
    menuSuperior.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);