export {Vehiculo};
import {Auto} from './auto';
import {Camion} from './camion';
import {Moto} from './moto';


class Vehiculo {
    //atributos o variables internas
    private marca: string ;
    private modelo: string;
    private patente: string;
    private annio: string;
    private tipo: string;
      
    constructor(marca: string , modelo: string , patente:string, annio: string, tipo: string) { 
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.annio = annio;
        this.tipo = tipo;
    }
  
 //metodos: getters y setters
public getMarca(): string {
    return this.marca;
}
public setMarca(nuevoMarca: string ): void {
        this.marca = nuevoMarca;
}
     
public getModelo(): string {
    return this.modelo;
}
public setModelo(nuevoModelo: string): void {
        this.modelo = nuevoModelo;
} 

public  getPatente(): string {
    return this.patente;
}
public setPatente(nuevoPatente: string): void {
        this.patente = nuevoPatente;
}

public getTipo(): string {
    return this.tipo;
}
public setTipo(nuevoTipo: string): void {
        this.tipo = nuevoTipo;
}

public getAnnio(): string {
    return this.annio;
}
public setAnnio(nuevoAnnio: string): void {
        this.annio = nuevoAnnio;
}

public getDatos() {
    return(
     `Marca: ${this.getMarca()}
      Modelo: ${this.getModelo()} 
      Patente: ${ this.getPatente()}
      Annio: ${this.getAnnio()}
      `
    ) 
}
  
}


