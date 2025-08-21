import nombre from "./Nombre";

describe("Nombre", () => {
  it("deberia retornar el nombre", () => {
    expect(nombre("Mateo")).toEqual("Hola, Mateo");
  });
});
  