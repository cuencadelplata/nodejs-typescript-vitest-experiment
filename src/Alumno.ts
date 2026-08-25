import { Persona } from "./Persona";


export class Alumno 
        extends Persona {

 public legajo: string;

  constructor(
    public nombre: string,
    public edad: number
  ) {

    super(nombre);
    
    this.tipo = "Alumno";

  }

}

