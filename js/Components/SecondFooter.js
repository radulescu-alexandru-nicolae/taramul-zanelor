export default class SecondFooter{
    constructor(){
        this.container=document.querySelector('.container');
        this.setSecondFooter();
    }
    setSecondFooter=()=>{
        const sFooter=document.createElement('footer');
        sFooter.className='second-footer';

        sFooter.innerHTML=
        
        `
        &copy;2021 Gradinita Taramul Zanelor,toate drepturile rezervate.
        `;
        this.container.appendChild(sFooter);
    }
}