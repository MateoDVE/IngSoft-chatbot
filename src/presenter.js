
import { buildGreeting } from "./Nombre.js";

// DOM
const nombreInput = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const enviar = document.querySelector("#enviar");
const div = document.querySelector("#respuesta-div");
const lang = document.querySelector("#lang");


enviar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const hora = new Date().getHours();

  const saludoFinal = buildGreeting({
    name: nombreInput.value,
    genero: genero.value,             
    edad: parseInt(edad.value, 10) || 0,
    hora,
    lang: lang.value,                
  });

  div.innerHTML = `<p>${saludoFinal}</p>`;
});
