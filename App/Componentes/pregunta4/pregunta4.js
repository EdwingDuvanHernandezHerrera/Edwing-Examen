// import { cambiarVista } from "../../../js/app";

export class PreguntaCuatroComponente extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.continuar();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                @import 'App/Componentes/pregunta4/pregunta4.css';
            </style>  
            <section class="sectionPrincipal">
                <h2>¿Como deseas monetizar?</h2>
                <div class="opciones">
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-4-1.png">
                        <p class="opciontexto">Aplicación gratuita con publicidad</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-4-2.png">
                        <p class="opciontexto">Aplicación de pago</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-4-3.png">
                        <p class="opciontexto">Compras dentro de la app</p>
                    </div>
                    <div class="opcion">
                        <img class="opcionImg" alt="" src="../../storage/img/answer-4-4.png">
                        <p class="opciontexto">Otros / No lo sé todavía</p>
                    </div>
                </div>    
            </section>`
    }
    continuar(){
        const padre = document.querySelector(".opciones");
            cambiarVista(padre, 4);
    }
}

customElements.define("pag-preguntacuatro", PreguntaCuatroComponente);
