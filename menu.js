let menu = document.getElementsByClassName("menu-header")[0]
let enlaces = document.getElementById("enlaces");
let contadorMenu = 1;

menu.addEventListener("click", function () {
    enlaces.classList.toggle('menudos');

    contadorMenu++;
})


enlaces.addEventListener('click', function (e) {
    enlaces.classList.toggle('menudos');
});