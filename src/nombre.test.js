
import nombre from "./Nombre.js";

describe("Nombre", () => {
  it("deberia retornar el nombre", () => {
    expect(nombre("Mateo")).toEqual("Mateo");
  });
});
