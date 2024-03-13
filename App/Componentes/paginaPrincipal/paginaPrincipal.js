import { cambiarVista } from "../../../js/app.js"


export class PaginaPrincipalComponente extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.empezar();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                @import 'App/Componentes/paginaPrincipal/paginaPrincipal.css';
            </style>    
            <main>
                <div class="containerPrincipal">
                    <img class="imagenPrincipal" src="../../storage/img/answer-1-1.png" alt="">
                    <h1 class="tituloPrincipal1">¿Cuánto cuesta desarrollar mi</h1>
                    <h1 class="tituloPrincipal2">app GBP?</h1>
                    <p class="parrafoPrincipal" >Calcula de forma rápida el costo para crear tu app, contestando estas sencillas preguntas.</p>
                    <button class="botonPrincipal">Empezar</button>
                </div>
            </main>`
    }

    empezar(){
        const botonPrincipal = document.querySelector(".botonPrincipal");
        botonPrincipal.addEventListener("click", () => {
            cambiarVista(null, 0);
        })
    }
}

customElements.define("pagina-principal", PaginaPrincipalComponente);
