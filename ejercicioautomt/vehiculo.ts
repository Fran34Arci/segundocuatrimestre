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
    constructor(marca: string , modelo: string , patente:string, annio: string, Auto?:Auto, Camion?:Camion, Moto?:Moto ) {
        
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.annio = annio;

        this.Auto = Auto;
        this.Camion = Camion;
        this.Moto= Moto;
        
    }
   
  

 //metodos: getters y setters
getMarca(): string {
    return this.marca;
}
setMarca(nuevomarca: string ): void {
        this.marca = nuevomarca;
}
     
getModelo(): string {
    return this.modelo;
}
setModelo(nuevomodelo: string): void {
        this.modelo = nuevomodelo;
} 

getPatente(): string {
    return this.patente;
}
setPatente(nuevopatente: string): void {
        this.patente = nuevopatente;
}

getAnnio(): string {
    return this.annio;
}
setAnnio(nuevoannio: string): void {
        this.annio = nuevoannio;
}

getAuto(): string {
    return this.Auto;
}
getCamion(): string {
    return this.Camion;
}
getMoto(): string {
    return this.Moto;
}


getDatos() {
    return {
      marca: this.getMarca(),
      modelo: this.getModelo(),
      patente: this.getPatente(),
      año: this.getAnnio(),
      Auto: this.getAuto(),
      Camion: this.getCamion(),
      Moto: this.getMoto(),
    
    };
}


}
