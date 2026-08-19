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

    test("Test de identidad", () => {
    
    var alumno1 = new Alumno('Juan Perez', 20);
    var alumno2 = new Alumno('Juan Perez', 20);
   
    var sonIguales1y2 = (alumno1 == alumno2);

    expect(sonIguales1y2).toBe(false);

    var alumno3 = alumno1;
    
    var sonIguales1y3 = (alumno1 == alumno3);
    expect(sonIguales1y3).toBe(true);

    alumno1.nombre = "Maria DB";
    expect(alumno1.nombre).toBe("Maria DB");
    expect(alumno3.nombre).toBe("Maria DB");
  });



    test("Un alumno debe tener un legajo", () => {
    
    var alumno1 = new Alumno('UCP', 20);
    alumno1.legajo = "123456789";

    expect(alumno1.legajo).toBe('123456789');
  });
});
