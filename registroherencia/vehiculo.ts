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
    
    private Auto; //composicion de la clase Auto
    private Camion; //composicion de la clase Camion
    private Moto; //composicion de la clase Moto



    //constructor
    constructor(marca: string , modelo: string , patente:string, annio: string, Auto?:string, Camion?:string, Moto?:string ) {
        
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.annio = annio;

        this.Auto = Auto;
        this.Camion = Camion;
        this.Moto = Moto;
        
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

public getAnnio(): string {
    return this.annio;
}
public setAnnio(nuevoAnnio: string): void {
        this.annio = nuevoAnnio;
}


public setAuto(nuevoAuto: Auto): void {
    this.Auto = nuevoAuto;
}
public setCamion(nuevoCamion: Camion): void {
    this.Camion = nuevoCamion;
}

public setMoto(nuevoMoto: Moto): void {
    this.Moto = nuevoMoto;
}

public getAuto(): string {
    return this.Auto;
}
public getCamion(): string {
    return this.Camion;
}
public getMoto(): string {
    return this.Moto;
}


public getDatos() {
    return(
     `Marca: ${this.getMarca()}
      Modelo: ${this.getModelo()} 
      Patente: ${ this.getPatente()}
      Annio: ${this.getAnnio()}
      Caracteristicas del Auto: ${this.getAuto()}
      Caracteristicas del Camion: ${this.getCamion()}
      Caracteristicas de la Moto: ${this.getMoto()}`
    )
    
}
  
}


