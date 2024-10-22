
export {Arquero};
import {Personaje} from "./personaje";

    class Arquero extends Personaje {
        //atributos o variables internas
      
        private precision: number;
        private flechasPlata: boolean;
        private flechasOro: boolean;
            //constructor
            constructor(nombre,  puntosDeVida, puntosGolpe,cantidadVidas, precision, flechasPlata, flechasOro) {
            super(nombre, puntosDeVida, puntosGolpe,cantidadVidas);
            this.precision = precision;
            this.flechasPlata = flechasPlata;
            this.flechasOro = flechasOro;
       }


       public atacar () {
        if(this.nivel == 1){ 
            console.log("Ataque normal de Arquero");
            this.puntosGolpe = this.puntosGolpe + 10;
            this.precision = this.precision + 10;
            this.chequearNivel();
         }
    else if(this.nivel == 2){
            console.log(`Ataque ${this.nivel} de Arquero`);
            this.puntosGolpe = this.puntosGolpe + 15;
            this.precision = this.precision + 15;
            this.flechasPlata = true;
            this.chequearNivel();
         }
    else if(this.nivel == 3){
        console.log(`Ataque ${this.nivel} de Arquero`);
        this.puntosGolpe = this.puntosGolpe + 20;
        this.precision = this.precision + 20;
        this.flechasOro = true;
        this.chequearNivel();
     }
    }


//ataques de Arquero
public ataqueFlechasPlata() {
    if(this.precision >=50 && this.flechasPlata ==true){
        this.precision- 50;
        this.puntosGolpe +10;
        console.log("Ataque con Flecha de Plata");
}
else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);

}
}

public ataqueFlechasOro() {
        if (this.precision >=75 && this.flechasOro==true){
            this.precision- 50;
            this.puntosGolpe +15;
            console.log("Ataque con Flecha de Oro");
        }

    else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);}
        }

    //metodos: getters y setters 
    public getPrecision(): number {
        return this.precision;
    }
    public setPrecision(nuevoPrecision:number): void {
            this.precision= nuevoPrecision;
    }
    public getFlechasPlata(): boolean {
        return this.flechasPlata;
    }
    public setFlechasPlata(nuevoFlechasPlata:boolean): void {
            this.flechasPlata= nuevoFlechasPlata;
    }
    public getFlechasOro(): boolean {
        return this.flechasOro;
    }
    public setFlechasOro(nuevoflechasOro:boolean): void {
            this.flechasOro= nuevoflechasOro;
    }
   
        public getDatosArquero() {
        return(
        `Nivel de Presicion : ${this.getPrecision()}
        Flechas de Plata Desbloqeada: ${this.getFlechasPlata()}
        Flechas Doradas Desbloqeada: ${this.getFlechasOro()}
        `)
    }

        
}