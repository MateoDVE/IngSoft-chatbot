// Importa la función nombre (Hola, X) y las funciones de saludo.
// Asegúrate que las rutas y extensiones existan.
import nombre from "./Nombre.js";
import { obtenerSaludo, saludoPorGeneroEdad } from "./Nombre.js";

// DOM
const nombreInput = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const enviar = document.querySelector("#enviar");
const div = document.querySelector("#respuesta-div");

// Evento
enviar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const hora = new Date().getHours();
  const saludo = obtenerSaludo(hora);
  const saludoAjustado = saludoPorGeneroEdad(
    saludo,
    genero.value,
    parseInt(edad.value, 10)
  );

  // Usa la función nombre() sobre el valor del input
  const saludoFinal = `${saludoAjustado} ${nombre(nombreInput.value)}`;
  div.innerHTML = `<p>${saludoFinal}</p>`;
});
