export {Camion};
import { Vehiculo } from "./vehiculo";

class Camion extends Vehiculo {
    //atributos o variables internas
  
    protected capCarga: number;
       //constructor
        constructor(marca, modelo, patente, annio, tipo,capCarga:number) {
        super(marca, modelo, patente, annio, tipo);
            
        this.capCarga = capCarga;
   }

    //metodos: getters y setters
    public getCapCarga(): number {
        return this.capCarga;
    }
    public setCapCarga(nuevoCapCarga: number ): void {
            this.capCarga = nuevoCapCarga;
    }
     
    public getDatosCamion() {
        return(
         `Nº Carga: ${this.getCapCarga()}`
        )
    }

}


