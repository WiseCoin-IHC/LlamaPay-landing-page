import Formulario from "./formulario.js";

const btnAbrirPopUP = document.querySelector("#btn-new");
const btnCerrarPopUP = document.querySelector("#btn-close");

const modal =  document.querySelector("#modal");

const elem = document.querySelector("#Objetivos")

btnAbrirPopUP.addEventListener("click", ()=>{
    modal.showModal();
});

btnCerrarPopUP.addEventListener("click", ()=> {
    modal.close();
});

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", event=>{
    event.preventDefault();
    const target = event.target;

    const agregar = new Formulario(target.nombreFormulario.value, target.montoFormulario.value, target.fechaFormulario.value, target.descripcionFormulario.value);
    mostrar(agregar);
    formulario.reset(); // resetea el formulario
    modal.close();
});

let IdContador = 0;

function mostrar(obj) {
    IdContador++;

    Objetivos.innerHTML += `
    <div class="card-Objetivos" id="${IdContador}">
        <img src="../Img/x-lg.svg" alt="Eliminar">
        <h3>${obj.getNombre()}</h3>
        <p>El Monto a Ahorrar es: S/.${obj.getMonto()}</p>
        <p>La Fecha Límite es: ${obj.getFecha()}</p>
        <p>${obj.getDescripcion()}</p>
    </div>
    `
};

Objetivos.addEventListener("click", (event)=>{
    if(event.srcElement.nodeName == "IMG"){
        eliminar(event.target.parentNode.id);
    };
});

let eliminar = (id) => {
    let ObjEliminar = document.getElementById(id);
    Objetivos.removeChild(ObjEliminar);
}
