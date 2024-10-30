export {ArqueroEvolucion};
import {Arquero} from './arquero';

class ArqueroEvolucion{

    private arquero:Arquero;

    private flechasRubi: boolean;
    private llamadoLobo: boolean;
    private flechasDiamante:boolean;
   

//herencia por composicion

constructor(arquero){

Object.assign(this,arquero);

this.flechasDiamante = true;
this.flechasRubi = true;
this.llamadoLobo = true;
}


public ataqueEvo(this,arquero) {

    if(this.nivel == 3){ 
        console.log("Ataque Arquero Evolucion");
        this.puntosGolpe = this.puntosGolpe + 100;
        this.precision = this.precision + 100;
        this.chequearNivel1(arquero);
     }
else if(this.nivel == 4){
        console.log(`Ataque ${this.nivel} de Arquero Evolucion`);
        this.puntosGolpe = this.puntosGolpe + 150;
        this.precision = this.precision + 150;
        this.flechasPlata = true;
        this.chequearNivel1(arquero);
     }
else if(this.nivel == 5){
    console.log(`Ataque ${this.nivel} de Arquero Evolucion`);
    this.puntosGolpe = this.puntosGolpe + 200;
    this.precision = this.precision + 200;
    this.flechasOro = true;
    this.chequearNivel1(arquero);
 }
}
    
public defenzaEvo(this,arquero){
    console.log("Defenza normal");
    this.puntosDeVida = this.puntosDeVida -1;
}

public esquivarEvo (this,arquero){
    console.log("Esquivaste el ataque no recibes daño");
}

public chequearNivel1(this,arquero){
    if( this.puntosGolpe >= 50){ 
       this.puntosGolpe = this.puntosGolpe -50;
       this.nivel ++} 
     }



//ataques de Arquero Evolucionado
public ataqueFlechasDiamante(this,arquero) {
if(this.precision >=50 && this.flechasDiamante ==true){
    this.precision = this.precision - 50;
    this.puntosGolpe = this.puntosGolpe +50;
    console.log("Ataque con Flechas de Diamante");
}
else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);

}
}

public ataqueFlechasRubi(this,arquero) {
    if (this.precision >=75 && this.flechasRubi==true){
        this.precision = this.precision - 75;
        this.puntosGolpe = this.puntosGolpe +75;
        console.log("Ataque con Flecha de Rubi");
    }

else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);}
    }

    public ataqueLlamadoLobo(this,arquero) {
        if (this.precision >=100 && this.llamadoLobo==true){
            this.precision = this.precision - 100;
            this.puntosGolpe = this.puntosGolpe + 100;
            console.log("Ataque Llamado Lobo");
        }
    
    else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);}
        }



//getters setters
public getFlechasDiamante(): boolean {
    return this.flechasDiamante;
}
public setFlechasDiamante(nuevoFlechasDiamante:boolean): void {
        this.flechasDiamante= nuevoFlechasDiamante;
}

public getFlechasRubi(): boolean {
    return this.flechasRubi;
}
public setFlechasRubi(nuevoflechasRubi:boolean): void {
        this.flechasRubi= nuevoflechasRubi;
}
public getLlamadoLobo(): boolean {
    return this.llamadoLobo;
}
public setLlamadoLobo(nuevollamadoLobo:boolean): void {
        this.llamadoLobo= nuevollamadoLobo;
}

public getDatosArqueroEvolucion() {
    return(
    `Flechas de Diamante Desbloqeada : ${this.getFlechasDiamante()}
        Flechas de Plata Desbloqeada: ${this.getFlechasRubi()}
        Flechas Ataque Llamado de lobo: ${this.getLlamadoLobo()}
    `)
}

}