import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("simple suma", () => {
    var resultado = 1 + 2;
    expect(resultado).toBe(3);
  });

  test("Un alumno debe tener un nombre", () => {
    
    var alumno1 = new Alumno('UCP', 20);

    expect(alumno1.nombre).toBe('UCP');
  });


  /* test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);

    const resultado = alumno.esMayorDeEdad();

    expect(resultado).toBe(true);
  });
 */

    test("Un alumno debe tener un legajo", () => {
    
    var alumno1 = new Alumno('UCP', 20);
    alumno1.legajo = "123456789";

    expect(alumno1.legajo).toBe('123456789');
  });
});
