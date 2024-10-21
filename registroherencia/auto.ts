export {Auto};
import { Vehiculo } from "./vehiculo";

    class Auto extends Vehiculo {
        //atributos o variables internas
      
        protected numPuertas: number;
            //constructor
            constructor(marca, modelo, patente, annio,tipo, numPuertas: number) {
            super(marca, modelo, patente,annio, tipo);
             this.numPuertas = numPuertas;
                
       }

    //metodos: getters y setters 
    public getNumPuertas(): number {
        return this.numPuertas;
    }
    public setNumPuertas(nuevoNumPuertas:number): void {
            this.numPuertas = nuevoNumPuertas;
    }

    public getDatosAuto() {
        return(
         `Nº Puertas: ${this.numPuertas}`
        )
    }
}