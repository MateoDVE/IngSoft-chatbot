
import nombre from "./Nombre";

const nombreInput = document.querySelector("#nombre-input");
const enviarButton = document.querySelector("#enviar-button");
const respuestaDiv = document.querySelector("#respuesta-div");

enviarButton.addEventListener("click", () => {
  const nombreValue = nombreInput.value;
  respuestaDiv.innerHTML = "<p>" + nombre(nombreValue) + "</p>";
});