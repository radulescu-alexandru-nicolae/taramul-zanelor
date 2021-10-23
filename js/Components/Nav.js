export default class Nav{
    constructor(){
        this.container=document.querySelector('.container');
        this.setNav();
        this.navFunction();
    }

    setNav=()=>{
        const nav=document.createElement('nav');
        nav.innerHTML=
        `
        <div class="container-nav ">
        <img src="poze/logo-1.png" alt="">
        <div class="navigation">
            <ul class="first-ul">
                <li class="acasa"> <a href="">Acasa</a></li>
                <li class="despre-noi">
                    <a href="" class="animatie-despre-noi">Despre noi</a>
                    <span></span>
                    <ul class="second-ul">
                        <div class="container-second-ul">
                            <li class="galerie">
                                <a href="">Galerie</a>
                            </li>
                            <li>
                                <a href="">Program</a>
                            </li>
                            <li><a href="">Preturi</a></li>
                            <li><a href="">Blog</a></li>
                        </div>
                    </ul>
                </li>
                <li><a href="">Clase</a></li>
                <li><a href="">Evenimente</a></li>
                <li><a href="">Profesori</a></li>
                <li><a href="">Inscrie-te acum!</a></li>
                <li><a href="">Contacteaza-ne</a></li>

        </div>
        <div class="nav-box">
            <div class="nav-box-svg-container">
                <svg class="search" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
            </div>
            <div class="meniu">
                <span></span>
            </div>
        </div>

    </div>
        `
        this.container.appendChild(nav);
    }

    navFunction=()=>{
        let meniu = document.querySelector('.meniu');
let span = meniu.querySelector('span');
let nav = document.querySelector('nav');
span.style.background = "black";
let first_ul = document.querySelector('.first-ul');
let container_second_ul = document.querySelector('.container-second-ul');
meniu.addEventListener('click', (e) => {
    if (span.style.background == "black") {
        span.style.background = "white";
        meniu.style.setProperty('--meniu-secondary', '30deg');
        meniu.style.setProperty('--meniu-primary', '-30deg');
        first_ul.style.opacity = "1";
        first_ul.style.transform = "translateY(0px)";
        first_ul.style.zIndex = "2";

    } else if (span.style.background == "white") {
        span.style.background = "black";
        meniu.style.setProperty('--meniu-secondary', '0deg');
        meniu.style.setProperty('--meniu-primary', '0deg');
        first_ul.style.opacity = "0";
        first_ul.style.transform = "translateY(100px)";
        first_ul.style.zIndex = "-2";

    }
})
const style = window.getComputedStyle(meniu);
window.onresize = function() {
    if (style.display === "none") {
        first_ul.style.transform = "translateY(0px)";
        first_ul.style.zIndex = "22";
        // second_ul.stle.transform = "translateY(50px)";
    }

}
let despre_noi = document.querySelector('.despre-noi');
let container_poze = document.querySelector('.container-poze');

despre_noi.addEventListener('mouseover', (e) => {
        if (e.target.tagName == 'A') {

            container_poze.style.zIndex = "1";
            despre_noi.style.zIndex = "200";

        }
    })
    /*search meniu ******************************** */


/* second meniu ******************************* */
let span_first_ul = document.querySelector('.first-ul span');
let second_ul = document.querySelector('.second-ul');
span_first_ul.style.background = "#ff4880";
span_first_ul.addEventListener('click', (e) => {
    if (span_first_ul.style.background == "rgb(255, 72, 128)") {
        span_first_ul.style.background = "rgb(38, 8, 102)";
        span_first_ul.style.transform = "rotate(180deg)";
        second_ul.style.height = "200px";
        container_second_ul.style.height = "140px";
    } else if (span_first_ul.style.background == "rgb(38, 8, 102)") {
        span_first_ul.style.background = "rgb(255, 72, 128)"
        span_first_ul.style.transform = "rotate(0deg)";
        second_ul.style.height = "0px";
        container_second_ul.style.height = "140px";
    }
})


window.addEventListener('resize', function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        // second_ul.style.transform = "translateY(100px)";
        // second_ul.style.opacity = "0";
        // container_second_ul.style.opacity = "0";
        second_ul.style.height = "200px";
        first_ul.style.opacity = "1";
    }
})
let header = document.querySelector('header');
let navigation = document.querySelector('.navigation');
// nav.addEventListener("mouseover", function(event) {

//     header.style.zIndex = "-1";

// })
// header.addEventListener("mouseover", function(event) {
//     header.style.zIndex = "222";
//     alert('a');


// })
nav.onmouseover = function() {
    header.style.zIndex = "-1";
}
nav.onmouseout = function() {
    header.style.zIndex = "2";
}

/*animatiiiii **************************** */

var scrollToTopBtn = document.querySelector(".up")
var rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    }
}