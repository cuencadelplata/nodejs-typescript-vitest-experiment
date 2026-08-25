import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Persona } from "./Persona";

export class Formateador {


  constructor() {

  }

  
  //OPcion 1
  public formatearAlumno(valor: Alumno): string {
    return `Alumno: ${valor.nombre}`;
  }

  public formatearProfesor(valor: Profesor): string {
    return `Profesor: ${valor.nombre}`;
  }


   public demo(valor: string): string {
    return `Demo: ${valor}`;
  }

  public demo(valor: number): string {
    return `Demo: ${valor}`;
  }
    
    


  //Opcion 2
  public formatear(valor: Persona): string {

    //var tipo = valor.tipo;

    return `${valor.tipo}: ${valor.nombre}`;
  }


}

