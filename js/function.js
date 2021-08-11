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
let search_meniu = document.querySelector(".search-meniu");
let exit_search_meniu = search_meniu.querySelector('.exit');
let search = document.querySelector('.search');
exit_search_meniu.addEventListener('click', (e) => {
    search_meniu.style.zIndex = "-1";
    search_meniu.style.transform = "scale(0)";
    search_meniu.style.opacity = "0";
})
search.addEventListener('click', (e) => {
    search_meniu.style.zIndex = "100";
    search_meniu.style.transform = "scale(1)";
    search_meniu.style.opacity = "1";
})

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