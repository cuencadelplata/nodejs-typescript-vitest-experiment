import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Materia";

describe("Materia", () => {


  test("Una materia debe tener un nombre", () => {
    
    var materia1 = new Materia('Paradigmas III');

    expect(materia1.nombre).toBe('Paradigmas III');
  });

});
