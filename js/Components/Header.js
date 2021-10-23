export default class Header{
    constructor(){

        this.container=document.querySelector('.container');
this.setHeader();
    }

    setHeader=()=>{
        const header=document.createElement('header');
        header.innerHTML=
        `
        <section class="container-header background">
        <div class="container-poze">
            <div class="container-bird">
                <img src="poze/birth.png" alt="">
            </div>
            <div class="container-nori">
                <img src="poze/image-clound.png" alt="">
            </div>
        </div>

        <section class="second-container button_title_desc">
            <div class="container-title">
                <h3>Gradinita Taramul zanelor</h3>
            </div>
            <div class="container-descriere">
                <h2>Exploram curiosi,descoperim cu uimire,cantam tare,dansam liber,crestem armonios</h2>
            </div>
            <div class="afla-mai-multe">
                <a href="">
                    <span>Afla Mai Multe</span>
                    <span>	
                        &#10132;</span>
                </a>
            </div>
        </section>
    </section>
        `;
        this.container.appendChild(header);
    }

}