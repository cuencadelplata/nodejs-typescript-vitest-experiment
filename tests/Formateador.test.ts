import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";
import { Formateador } from "../src/Formateador";

describe("Formateador", () => {
  

    test("Formatear nombre de profesor", () => {
    
    var profesor1 = new Profesor('Profesor 1');
    var formateador = new Formateador();

    expect(formateador.formatearProfesor(profesor1)).toBe('Profesor: Profesor 1');
  });
  

  test("Formatear nombre de alumno", () => {
    
    var alumno1 = new Alumno('Alumno 1', 20);
    var formateador = new Formateador();
    
    expect(formateador.formatearAlumno(alumno1)).toBe('Alumno: Alumno 1');
  });


   test("Formatear nombre de persona", () => {
    
    var profesor1 = new Profesor('Profesor 2');
    var alumno1 = new Alumno('Alumno 2', 20);
    
    var formateador = new Formateador();
    
    expect(formateador.formatear(profesor1)).toBe('Profesor: Profesor 2');
    expect(formateador.formatear(alumno1)).toBe('Alumno: Alumno 2');
  });


   test("Demo sobrecargado con string", () => {
    
    var formateador = new Formateador();

    expect(formateador.demo("Hola")).toBe('Demo: Hola');
  });

   test("Demo sobrecargado con number", () => {
    
    var formateador = new Formateador();

    expect(formateador.demo(42)).toBe('Demo: 42');
  });



});
