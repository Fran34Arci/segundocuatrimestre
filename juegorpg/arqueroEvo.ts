export {ArqueroEvolucion};
import {Arquero} from './arquero';

class ArqueroEvolucion{
    
    private flechasRubi: boolean;
    private llamadoLobo: boolean;
    private flechasDiamante:boolean;
    //herencia por composicion
   private arquero: Arquero;

   
constructor(arquero: Arquero){

this.arquero =arquero;
this.flechasDiamante = false;
this.flechasRubi = false;
this.llamadoLobo = false;
}

public atacar () {
    if(this.arquero.getNivel() <= 3){ 
        console.log("Ataque normal de Arquero Evolucionado");
        this.arquero.setPuntosGolpe ((this.arquero.getPuntosGolpe() +50));
        this.arquero.setPrecision((this.arquero.getPrecision() + 50));
        this.arquero.chequearNivel();

     }
else if(this.arquero.getNivel() <= 4){
        console.log(`Ataque ${this.arquero.getNivel()} de Arquero Evolucionado`);
        this.arquero.setPuntosGolpe ((this.arquero.getPuntosGolpe() +75));
        this.arquero.setPrecision((this.arquero.getPrecision() + 75));
        this.flechasDiamante = true;
        this.arquero.chequearNivel();
     }
else if(this.arquero.getNivel() >= 5){
    console.log(`Ataque ${this.arquero.getNivel()} de Arquero Evolucionado`);
    this.arquero.setPuntosGolpe ((this.arquero.getPuntosGolpe() +100));
    this.arquero.setPrecision((this.arquero.getPrecision() + 100));
    this.flechasRubi = true;
    this.llamadoLobo = true;
    this.arquero.chequearNivel();
 }
}
    
public defenzaEvo(){
    this.arquero.defender();
}

public esquivarEvo(){
    this.arquero.esquivar();
}
public ataqueFlechasPlata() {
    this.arquero.ataqueFlechasPlata();
}
public ataqueFlechasOro() {
    this.arquero.ataqueFlechasOro();
  }

//ataques de Arquero Evolucionado
public ataqueFlechasDiamante() {
if(this.arquero.getPrecision()>=50 && this.flechasDiamante ==true){
    this.arquero.setPrecision((this.arquero.getPrecision() - 50));
    this.arquero.setPuntosGolpe ((this.arquero.getPuntosGolpe() +50));
    console.log("Ataque con Flechas de Diamante");
}
else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);

}
}

public ataqueFlechasRubi() {

    if (this.arquero.getPrecision() >=75 && this.flechasRubi==true){
        this.arquero.setPrecision((this.arquero.getPrecision() - 75));
        this.arquero.setPuntosGolpe ((this.arquero.getPuntosGolpe() +75));
        console.log("Ataque con Flecha de Rubi");
    }

else{console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);}
    }

    public ataqueLlamadoLobo(this,arquero) {
        if (this.precision >=100 && this.llamadoLobo==true){
            this.arquero.setPrecision((this.arquero.getPrecision() - 100));
            this.arquero.setPuntosGolpe ((this.arquero.getPuntosGolpe() +100));
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