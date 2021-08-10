const first_ul_poze = document.querySelector('.first-galerie-ul');
const lista_li = first_ul_poze.querySelectorAll('li');
const container_poze_galerie = document.querySelectorAll('.container-poza-img');
const span_lista_li = document.querySelectorAll('.first-galerie-ul span');

first_ul_poze.addEventListener('click', (e) => {
    if (e.target.tagName == 'SPAN') {
        displayPozeNone();
        if (e.target.className == "activitati") {
            displayPozeNumbar(4);
            listacolor();
            stilizareLi(1);
        } else if (e.target.className == "all") {
            displayPozeNumbar(7);
            listacolor();
            stilizareLi(0);
        } else if (e.target.className == "iesiri") {
            displayPozeNone();
            listacolor();
            stilizareLi(4);
            container_poze_galerie[1].style.display = "unset";
        } else if (e.target.className == "clase") {
            displayPozeNumbar(7);
            listacolor();
            stilizareLi(2);
            container_poze_galerie[1].style.display = "none";
            container_poze_galerie[2].style.display = "none";
        } else if (e.target.className == "evenimente") {
            displayPozeNone();
            listacolor();
            stilizareLi(3);
            container_poze_galerie[4].style.display = "unset";
            container_poze_galerie[5].style.display = "unset";
        }
    }
})

function displayPozeNone() {
    for (let i = 0; i < container_poze_galerie.length; i++) {
        container_poze_galerie[i].style.display = "none";
    }
}

function displayPozeNumbar(nr) {
    for (let i = 0; i < container_poze_galerie.length; i++) {

        if (i !== nr) {

            container_poze_galerie[i].style.display = "unset";
        }
    }
}


function listacolor() {
    for (let i = 0; i < lista_li.length; i++) {
        lista_li[i].style.background = "rgba(119, 119, 119, 0.12)";
        span_lista_li[i].style.color = "#271344";
    }
}

function stilizareLi(numar) {
    for (let i = 0; i < lista_li.length; i++) {
        if (i == numar) {
            lista_li[i].style.background = "#ff4880";
            span_lista_li[i].style.color = "white";
        }
    }
}