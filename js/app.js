import '../App/Componentes/paginaPrincipal/paginaPrincipal.js'
import '../App/Componentes/pregunta1/pregunta1.js'
import '../App/Componentes/pregunta2/pregunta2.js'
import '../App/Componentes/pregunta3/pregunta3.js'
import '../App/Componentes/pregunta4/pregunta4.js'
import '../App/Componentes/pregunta5/pregunta5.js'


export function cambiarVista(padre, pregunta){
    const sectionPrincipal = document.querySelector("#contenedor");
    sectionPrincipal.innerHTML = "";
    if(pregunta === 0){
        sectionPrincipal.innerHTML = "<pag-preguntauno></pag-preguntauno>";
    }

    padre.addEventListener("click", (evento) => {
        if(evento.target.classList.contains("opcion")){
            switch(pregunta){
                case 1:
                    sectionPrincipal.innerHTML = "<pag-preguntados></pag-preguntados>";
                case 2:
                    sectionPrincipal.innerHTML = "<pag-preguntados></pag-preguntatres>";
                case 3:
                    sectionPrincipal.innerHTML = "<pag-preguntados></pag-preguntacuatro>";
                case 4:
                    sectionPrincipal.innerHTML = "<pag-preguntados></pag-preguntacinco>";
                case 5:
                    sectionPrincipal.innerHTML = "<pag-preguntados></pag-final>";                        
            }
        }
    })

}

// document.addEventListener("DOMContentLoaded", () => {
//     const sectionPrincipal = document.querySelector("#contenedor");
//     sectionPrincipal.innerHTML = "<pagina-principal></pagina-principal>";
// })

