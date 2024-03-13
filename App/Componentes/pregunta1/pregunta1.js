// import { cambiarVista } from "../../../js/app"

export class PreguntaUnoComponente extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.continuar();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                @import 'App/Componentes/pregunta1/pregunta1.css';
            </style>  
            <section class="sectionPrincipal">
                <h2>¿Qué nivel de calidad estás buscando?</h2>
                <div class="opciones">
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-1-1.png">
                        <p class="opciontexto">Calidad óptima</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-1-2.png">
                        <p class="opciontexto">Buena relación  calidad/precio</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-1-3.png">
                        <p class="opciontexto">No me importa tanto la calidad</p>
                    </div>
                </div>    
            </section>`
    }
    continuar(){
        const padre = document.querySelector(".opciones");
            cambiarVista(padre, 1);
    }
}

customElements.define("pag-preguntauno", PreguntaUnoComponente);
