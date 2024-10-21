export {Moto};
import { Vehiculo } from "./vehiculo";

class Moto extends Vehiculo {
    //atributos o variables internas
   
    protected rodado: number;
    protected cilindrada: number;
   
    
    //constructor
    constructor(marca, modelo, patente, annio, tipo, cilindrada:number, rodado: number) {
        super(marca, modelo, patente, annio, tipo);
        
        this.rodado= rodado;
        this.cilindrada= cilindrada;
  
    }

    //metodos: getters y setters
    public getRodado(): number{
        return this.rodado;
    }
    public setRodado(nuevoRodado: number ): void {
            this.rodado= nuevoRodado;
    }
         
    public getCilindrada(): number{
        return this.cilindrada;
    }
    public setCilindrada(nuevoCilindrada: number ): void {
            this.cilindrada= nuevoCilindrada;
    }
    
    public getDatosMoto() {
        return(
         `Nº Cilindrada: ${this.getCilindrada()}
          Nº Rodado: ${this.getRodado()}
         `
        )
    }
   
    }
 