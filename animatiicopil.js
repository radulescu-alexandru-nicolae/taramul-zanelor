let incredere = document.querySelector('.incredere');
let dezvoltare = document.querySelector('.dezvoltarea');

window.onscroll = function(e) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        if (window.scrollY < 1200) {}
    } else {
        if (window.matchMedia("(max-width:1200px)".matches)) {
            if (window.scrollY > 3500) {
                container_animatie_ghidarea1.style.transform = "translateY(0px)";
                ghidarea_second.style.transform = "translateX(0px) rotate(0deg)";
                container_img.style.transform = "scale(1)";
                container_conectare.style.transform = "translateY(0)";
            }
        }
    }
};