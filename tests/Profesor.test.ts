import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Profesor";

describe("Profesor", () => {


  test("Un profesor debe tener un nombre", () => {
    
    var profesor1 = new Profesor('Profesor 1');

    expect(profesor1.nombre).toBe('Profesor 1');
  });

});
