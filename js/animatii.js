let afla_mai_mult = document.querySelector('.afla-mai-multe a');
let container_title = document.querySelector('.container-title');
let container_descriere = document.querySelector('.container-descriere');
let container_animatie_ghidarea1 = document.querySelector('.container-animatie-ghidare1');
let ghidarea_second = document.querySelector('.ghidarea-second');
let container_img = document.querySelector('.container-copil img ');
let container_conectare = document.querySelector('.conectarea');
let incredere_actiune = document.querySelector('.incredere');
let dezvoltare_actiune = document.querySelector('.dezvoltarea');
let invatare_title = document.querySelector('.title-invatare-joaca');
let nav_animatie = document.querySelector('nav');
let container_padure = document.querySelector('.container-padure');
let despre_noi_animatie = document.querySelector('.despre-noi');
let despre_noi_second_ul = document.querySelector('.second-ul');
document.addEventListener('scroll', function(e) {
    afla_mai_mult.style.transform = "rotate(0deg) translate(0px,0px)";
    container_title.style.transform = "translateY(0px)"
    container_descriere.style.transform = "translateY(0px)";
    nav_animatie.style.position = "fixed";

})
if (window.matchMedia("(min-width: 1200px)").matches) {
    despre_noi_animatie.addEventListener("mouseover", function(event) {
        if (event.target.tagName == "A") {
            if (event.target.className == "animatie-despre-noi") {
                despre_noi_second_ul.style.opacity = "1";
            }
        }
    })
    despre_noi_animatie.addEventListener("mouseleave", function(event) {
        despre_noi_second_ul.style.opacity = "0";

    })
}
window.onscroll = function(e) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        if (window.scrollY > 1200 && window.scrollY < 1400) {
            container_animatie_ghidarea1.style.transform = "translateY(0px)";
            ghidarea_second.style.transform = "translateX(0px) rotate(0deg)";
            container_conectare.style.transform = "translateY(0)";
        } else if (window.scrollY > 2700 && window.scrollY < 2900) {
            container_img.style.transform = "scale(1)";
            container_conectare.style.transform = "translateY(0)";
            incredere_actiune.style.opacity = "1";
            incredere_actiune.style.transform = "translate(0)";
            dezvoltare_actiune.style.opacity = "1";
            dezvoltare_actiune.style.transform = "translate(0)";
        } else if (window.scrollY > 4500 && window.scrollY < 5000) {
            invatare_title.style.transform = "scale(1)";
            invatare_title.querySelector('img').style.opacity = "1";
        } else if (window.scrollY > 6200) {
            container_padure.style.transform = "translateX(0)";
            container_padure.style.opacity = "1";
        }

    } else {
        if (window.matchMedia("(max-width:1200px)".matches)) {
            if (window.scrollY > 2300 && window.scrollY < 2500) {
                container_animatie_ghidarea1.style.transform = "translateY(0px)";
                ghidarea_second.style.transform = "translateX(0px) rotate(0deg)";

            } else if (window.scrollY > 3300 && window.scrollY < 3400) {
                container_img.style.transform = "scale(1)";
                container_conectare.style.transform = "translateY(0)";
                incredere_actiune.style.opacity = "1";
                incredere_actiune.style.transform = "translate(0)";
                dezvoltare_actiune.style.opacity = "1";
                dezvoltare_actiune.style.transform = "translate(0)";
            } else if (window.scrollY > 7800 && window.scrollY < 8200) {
                invatare_title.style.transform = "scale(1)";
                invatare_title.querySelector('img').style.opacity = "1";

            } else if (window.scrollY > 10300) {
                container_padure.style.transform = "translateX(0)";
                container_padure.style.opacity = "1";
            }


        }
    }
};