export { Guerrero };
import { Personaje } from "./personaje";

class Guerrero extends Personaje {
    //atributos o variables internas
    private fuerza: number;
    private espadaGrande: boolean;
    private hacha: boolean;
    //constructor
    constructor(nombre, nivel,puntosDeVida, puntosGolpe, cantidadVidas, fuerza, espadaGrande, hacha) {
        super(nombre,nivel, puntosDeVida, puntosGolpe, cantidadVidas);
        this.fuerza = fuerza;
        this.espadaGrande = espadaGrande;
        this.hacha = hacha;
    }

    public atacar() {
        if (this.nivel == 1) {
            console.log("Ataque normal de guerrero");
            this.puntosGolpe = this.puntosGolpe + 10;
            this.fuerza = this.fuerza + 10;
            this.chequearNivel();
        }
        else if (this.nivel == 2) {
            console.log(`Ataque ${this.nivel} de guerrero`);
            this.puntosGolpe = this.puntosGolpe + 15;
            this.fuerza = this.fuerza + 15;
            this.espadaGrande = true;
            this.chequearNivel();
        }
        else if (this.nivel == 3) {
            console.log(`Ataque ${this.nivel} de guerrero`);
            this.puntosGolpe = this.puntosGolpe + 20;
            this.fuerza = this.fuerza + 20;
            this.hacha = true;
            this.chequearNivel();
        }
    }
    //ataques de Guerrero
    public ataqueEspadaGrande() {
        if (this.fuerza >= 50 && this.espadaGrande == true) {
            this.fuerza = this.fuerza - 50;
            this.puntosGolpe = this.puntosGolpe + 10;
            console.log("Ataque con Espada Grande");
        }
        else {
            console.log(`tu nivel de  Fuerza es bajo no puedes ejecutar el ataque`);

        }
    }

    public ataqueHacha() {
        if (this.fuerza >= 75 && this.hacha == true) {
            this.fuerza = this.fuerza - 50;
            this.puntosGolpe = this.puntosGolpe + 15;
            console.log("Ataque con Hacha");
        }

        else { console.log(`tu nivel de Fuerza es bajo no puedes ejecutar el ataque`); }
    }
    //metodos: getters y setters 
    public getFuerza(): number {
        return this.fuerza;
    }
    public setFuerza(nuevoFuerza: number): void {
        this.fuerza = nuevoFuerza;
    }
    public getEspadaGrande(): boolean {
        return this.espadaGrande;
    }
    public setEspadaGrande(nuevoespadaGrande: boolean): void {
        this.espadaGrande = nuevoespadaGrande;
    }
    public getHacha(): boolean {
        return this.hacha;
    }
    public setHacha(nuevohacha: boolean): void {
        this.hacha = nuevohacha;
    }
    public getDatosGuerrero() {
        return (
            `Nivel de Fuerza: ${this.getFuerza()}
        Espada Grande Desbloqeada:${this.getEspadaGrande()}
        Hacha Desbloqeada: ${this.getHacha()}
        `)
    }
}