let slider = document.querySelector(".slider");
let cajaTestimonio = document.querySelectorAll(".slider .cont-slide")
let contador = 1;
let tamañoCarrusel = cajaTestimonio[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function(){
    tamañoCarrusel = cajaTestimonio[0].clientWidth; 
})


setInterval(function tiempo() {
    slides();
}, intervalo);


function slides() {
    slider.style.transform = 'translateX('+ (- tamaÃ±oCarrusel * contador) +'px)';
    slider.style.transition = 'transform 1s';
    contador+=1; 

    if(contador === cajaTestimonio.length){
        contador = 0;
        setTimeout(function(){
            slider.style.transform = 'translateX (0 px)';
            slider.style.transition = 'transform 0s';
        },intervalo)    
    }
}

