// import { cambiarVista } from "../../../js/app";

export class PreguntaCincoComponente extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.continuar();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                @import 'App/Componentes/pregunta5/pregunta5.css';
            </style>  
            <section class="sectionPrincipal">
                <h2>¿Tu App necesita sistema de Autenticación de usuarios?</h2>
                <div class="opciones">
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-5-1.png">
                        <p class="opciontexto">Sí, con redes sociales y email</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-5-2.png">
                        <p class="opciontexto">Sí, con email</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-5-3.png">
                        <p class="opciontexto">No</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-5-4.png">
                        <p class="opciontexto">No lo sé todavía</p>
                    </div>
                </div>    
            </section>`
    }
    continuar(){
        const padre = document.querySelector(".opciones");
            cambiarVista(padre, 5);
    }
}

customElements.define("pag-preguntacinco", PreguntaCincoComponente);
