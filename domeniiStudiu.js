const tabel = document.querySelector('.container-tabel-domenii');
const img = document.querySelector('.container-poza-domenii img');
tabel.addEventListener('click', (e) => {
    if (e.target.className == 'plus') {
        let container = e.target.parentNode.parentNode.parentNode.parentNode;
        let sectiune = e.target.parentNode.parentNode.parentNode;
        let plus = sectiune.querySelector('.plus');
        let exit = sectiune.querySelector('.exit-domenii');
        container.style.maxHeight = "1200px";
        plus.style.display = "none";
        exit.style.display = "unset";
        let textExtins = container.querySelector('.text-extins');
        textExtins.style.display = "unset";
        img.style.transform = "scale(1.2)";
    } else if (e.target.className == 'exit-domenii') {
        let container = e.target.parentNode.parentNode.parentNode.parentNode;
        let sectiune = e.target.parentNode.parentNode.parentNode;
        let plus = sectiune.querySelector('.plus');
        let exit = sectiune.querySelector('.exit-domenii');
        container.style.maxHeight = "120px";
        plus.style.display = "unset";
        exit.style.display = "none";
        let textExtins = container.querySelector('.text-extins');
        textExtins.style.display = "none";
        img.style.transform = "scale(1)";

    }

})