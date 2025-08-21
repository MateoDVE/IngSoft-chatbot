
import nombre from "./Nombre.js";

describe("Saludo con nombre", () => {
  it("deberia retornar un saludo con el nombre", () => {
    expect(nombre("Mateo")).toEqual("Hola, Mateo");
  });

  it("deberia pedir el nombre si no se proporciona", () => {
    expect(nombre("")).toEqual("Hola, por favor escribe tu nombre.");
  });
});
