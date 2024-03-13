// import { cambiarVista } from "../../../js/app"

export class PreguntaTresComponente extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.continuar();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                @import 'App/Componentes/pregunta3/pregunta3.css';
            </style>  
            <section class="sectionPrincipal">
                <h2>¿Que diseño desea que tenga el App?</h2>
                <div class="opciones">
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-3-1.png">
                        <p class="opciontexto">Interfaz sencilla</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-3-2.png">
                        <p class="opciontexto">Interfaz personalizada</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-3-3.png">
                        <p class="opciontexto">Interfaz replicada de la web</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-3-4.png">
                        <p class="opciontexto">No necesito diseño</p>
                    </div>
                </div>    
            </section>`
    }
    continuar(){
        const padre = document.querySelector(".opciones");
            cambiarVista(padre, 3);
    }
}

customElements.define("pag-preguntatres", PreguntaTresComponente);
