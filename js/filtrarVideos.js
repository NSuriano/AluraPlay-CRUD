import { conexionAPI } from "./conexionAPI.js";
import crearCards from "./mostrarVideos.js";

async function filtrarVideos(evento) {
   
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);
    const lista = document.querySelector("[data-lista]");
   
    while(lista.firstChild) {
     lista.removeChild(lista.firstChild);
    }
    
    busqueda.forEach(video => lista.appendChild(crearCards(video.titulo,video.descripcion,video.url,video.imagen)));

    if(busqueda.length == 0) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No se encontraron videos que coincidan con ${datosDeBusqueda}</h2>`;
    }
        
 }

const boton = document.querySelector("[data-boton]");
boton.addEventListener("click", evento => filtrarVideos(evento));