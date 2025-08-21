
function saludar(nombre) {
  if (!nombre || nombre.trim() === "") {
    return "Hola, por favor escribe tu nombre.";
  }
  return `Hola, ${nombre}`;
}
export default saludar;