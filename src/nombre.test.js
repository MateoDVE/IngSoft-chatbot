import { nombre } from "./Nombre";
import { obtenerSaludo, saludoPorGeneroEdad } from "./Nombre";



describe("Nombre", () => {
  it("deberia retornar el nombre", () => {
    expect(nombre("Mateo")).toEqual("Hola, Mateo");
  });
});

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

describe("Nombre (EN)", () => {
  it("should return 'Hello, Mateo'", () => {
    expect(nombre("Mateo", "en")).toEqual("Hello, Mateo");
  });
});

describe("obtenerSaludo (EN)", () => {
  it("returns 'Good morning' between 5 and 11", () => {
    expect(obtenerSaludo(8, "en")).toBe("Good morning");
  });

  it("returns 'Good afternoon' between 12 and 17", () => {
    expect(obtenerSaludo(15, "en")).toBe("Good afternoon");
  });

  it("returns 'Good evening' otherwise", () => {
    expect(obtenerSaludo(22, "en")).toBe("Good evening");
    expect(obtenerSaludo(3, "en")).toBe("Good evening");
  });
});

describe("saludoPorGeneroEdad (EN)", () => {
  it("returns 'Good morning Ms.' for female > 30", () => {
    const s = saludoPorGeneroEdad("Good morning", "femenino", 35, "en");
    expect(s).toBe("Good morning Ms.");
  });

  it("returns 'Good morning Mr.' for male > 30", () => {
    const s = saludoPorGeneroEdad("Good morning", "masculino", 40, "en");
    expect(s).toBe("Good morning Mr.");
  });

  it("returns 'Good morning Miss' for female <= 30", () => {
    const s = saludoPorGeneroEdad("Good morning", "femenino", 25, "en");
    expect(s).toBe("Good morning Miss");
  });

  it("returns 'Good morning young man' for male <= 30", () => {
    const s = saludoPorGeneroEdad("Good morning", "masculino", 20, "en");
    expect(s).toBe("Good morning young man");
  });
});