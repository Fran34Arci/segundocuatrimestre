export {Hechicero};
import {Personaje} from "./personaje";

    class Hechicero extends Personaje {
        //atributos o variables internas
      
        private mana: number;
        private manaFuego: number;
        private manaTrueno: number;

            //constructor
            constructor(nombre,puntosDeVida, puntosGolpe,cantidadVidas, mana, manaFuego,manaTrueno) {
            super(nombre, puntosDeVida, puntosGolpe,cantidadVidas);
            this.mana = mana;
            this.manaFuego = manaFuego;
            this.manaTrueno = manaTrueno;
       }


       public atacar () {
    if(this.nivel == 1){ 
       console.log("Ataque normal de hechicero");
       this.puntosGolpe = this.puntosGolpe + 10;
       this.mana = this.mana + 10;
       this.chequearNivel();
     }
else if(this.nivel == 2){
        console.log(`Ataque ${this.nivel} de hechicero`);
        this.puntosGolpe = this.puntosGolpe + 15;
        this.mana = this.mana + 15;
        this.manaFuego =this.manaFuego + 15;
        this.chequearNivel();
     }
else if(this.nivel == 3){
    console.log(`Ataque ${this.nivel} de hechicero`);
    this.puntosGolpe = this.puntosGolpe + 20;
    this.mana = this.mana + 20;
    this.manaFuego = this.manaFuego + 20;
    this.manaTrueno = this.manaTrueno + 25;
    this.chequearNivel();
 }
}

        //ataques de Hechicero

       public ataqueFuego() {
        if(this.manaFuego >=50 && this.mana >=15){
            this.mana = this.mana -15;
            this.manaFuego = this.manaFuego -50;
            this.puntosGolpe = this.puntosGolpe +10;

        console.log("Ataque bola de fuego");
    }
else{console.log(`tu nivel de mana y/o mana de Fuego es bajo no puedes ejecutar el ataque`);}
}

        public ataqueTrueno() {
            if(this.manaFuego >=75 && this.mana >=20){
                this.mana = this.mana -20;
                this.manaTrueno = this.manaTrueno- 75;
                this.puntosGolpe = this.puntosGolpe +15;
                console.log("Ataque de trueno");
            }
        else{console.log(`tu nivel de mana y/o mana de Trueno es bajo no puedes ejecutar el ataque`);}
            }



    //metodos: getters y setters 
    public getMana(): number {
        return this.mana;
    }
    public setMana(nuevoMana:number): void {
            this.mana= nuevoMana;
    }
    public getManaFuego(): number {
        return this.manaFuego;
    }
    public setManaFuego(nuevomanaFuego:number): void {
            this.manaFuego= nuevomanaFuego;
    }
    public getManaTrueno(): number {
        return this.manaTrueno;
    }
    public setManaTrueno(nuevomanaTrueno:number): void {
            this.manaTrueno= nuevomanaTrueno;
    }
    public getDatosHechicero() {
        return(
         `Nivel de Mana: ${this.getMana()}
        Nivel de Mana Fuego: ${this.getManaFuego()}
        Nivel de Mana Trueno: ${this.getManaTrueno()}
        `)
}
    }