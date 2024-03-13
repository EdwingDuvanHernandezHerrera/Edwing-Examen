// import { cambiarVista } from "../../../js/app"

export class PreguntaDosComponente extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.continuar();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                @import 'App/Componentes/pregunta2/pregunta2.css';
            </style>  
            <section class="sectionPrincipal">
                <h2>¿Que tipo de App Necesita?</h2>
                <div class="opciones">
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-2-1.png">
                        <p class="opciontexto">Aplicación Android</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-2-2.png">
                        <p class="opciontexto">Aplicación iOS</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-2-3.png">
                        <p class="opciontexto">Aplicación Windows Phone</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-2-4.png">
                        <p class="opciontexto">Aplicación Android + iOSPhone</p>
                    </div>
                </div>    
            </section>`
    }
    continuar(){
        const padre = document.querySelector(".opciones");
            cambiarVista(padre, 2);
    }
}

customElements.define("pag-preguntados", PreguntaDosComponente);
