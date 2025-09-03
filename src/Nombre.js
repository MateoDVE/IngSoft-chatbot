function nombre(a) {
  return "Hola, " + a; 
}
export default nombre;

export function obtenerSaludo(hora) {
  let resultado = 'Buenas noches';
  if (hora >= 5 && hora < 12) {
    resultado = 'Buenos días';
  } else if (hora >= 12 && hora < 18) {
    resultado = 'Buenas tardes';
  }
  return resultado;
}

export function saludoPorGeneroEdad(saludo, genero, edad) {
  if (edad > 30) {
    if (genero === 'femenino') {
      return `${saludo} Sra.`;
    }
    return `${saludo} Sr.`;
  }
  if (genero === 'femenino') {
    return `${saludo} señorita`;
  }
  return `${saludo} joven`;
}