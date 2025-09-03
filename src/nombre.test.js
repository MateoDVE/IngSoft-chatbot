import nombre from "./Nombre";

describe("Nombre", () => {
  it("deberia retornar el nombre", () => {
    expect(nombre("Mateo")).toEqual("Hola, Mateo");
  });
});

import { obtenerSaludo, saludoPorGeneroEdad } from "../Nombre";

describe("obtenerSaludo", () => {
  it("debería retornar 'Buenos días' si la hora está entre 5 y 11", () => {
    expect(obtenerSaludo(8)).toBe("Buenos días");
  });

  it("debería retornar 'Buenas tardes' si la hora está entre 12 y 17", () => {
    expect(obtenerSaludo(15)).toBe("Buenas tardes");
  });

  it("debería retornar 'Buenas noches' en cualquier otro horario", () => {
    expect(obtenerSaludo(22)).toBe("Buenas noches");
    expect(obtenerSaludo(3)).toBe("Buenas noches");
  });
});

describe("saludoPorGeneroEdad", () => {
  it("debería retornar 'Buenos días Sra.' para mujer mayor de 30", () => {
    const saludo = saludoPorGeneroEdad("Buenos días", "femenino", 35);
    expect(saludo).toBe("Buenos días Sra.");
  });

  it("debería retornar 'Buenos días Sr.' para hombre mayor de 30", () => {
    const saludo = saludoPorGeneroEdad("Buenos días", "masculino", 40);
    expect(saludo).toBe("Buenos días Sr.");
  });

  it("debería retornar 'Buenos días señorita' para mujer menor o igual a 30", () => {
    const saludo = saludoPorGeneroEdad("Buenos días", "femenino", 25);
    expect(saludo).toBe("Buenos días señorita");
  });

  it("debería retornar 'Buenos días joven' para hombre menor o igual a 30", () => {
    const saludo = saludoPorGeneroEdad("Buenos días", "masculino", 20);
    expect(saludo).toBe("Buenos días joven");
  });
});