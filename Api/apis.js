//Se crean constantes para guardar datos de conexión al servidor
// const IP = "154.38.171.54"; 
const IP = "localhost"; 

const puerto = 3000;
const URL = "http://" + IP + ":" + puerto;

//Se crea constante para enviar el formato en que se enviará la información
const cabecera = new Headers({
    "Content-Type": "application/json"
});


//Se crea solicitud GET
async function getData(endPoint){
   const data = await fetch(`${URL}/${endPoint}`);
   let dataJson = await data.json();
   return dataJson
}


//Se crea solicitud PUSH
function postData(inputsForm, endPoint){
    fetch(`${URL}/${endPoint}`, {
        method: "POST",
        headers: cabecera,
        body: JSON.stringify(inputsForm)
    })
}