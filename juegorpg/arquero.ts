export { Arquero };
import { Personaje } from "./personaje";
import { ArqueroEvolucion } from "./arqueroEvo";

class Arquero extends Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;
    protected puntosGolpe: number;
    protected cantidadVidas: number;
    protected precision: number;
    protected flechasPlata: boolean;
    protected flechasOro: boolean;
    protected evolucion: ArqueroEvolucion;

    constructor(nombre: string, nivel: number, puntosDeVida: number, puntosGolpe: number, cantidadVidas: number, precision: number, flechasPlata: boolean, flechasOro: boolean) {
        super(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas);
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.puntosGolpe = puntosGolpe;
        this.cantidadVidas = cantidadVidas;
        this.precision = precision;
        this.flechasPlata = flechasPlata;
        this.flechasOro = flechasOro;
        this.evolucion = new ArqueroEvolucion(false, false, false, this);
    }

    //ataques de Arquero
    public atacar() {
        if (this.nivel == 1) {
            console.log("Ataque normal de Arquero");
            this.puntosGolpe = this.puntosGolpe + 10;
            this.precision = this.precision + 10;
            this.chequearNivel();
        }
        else if (this.nivel == 2) {
            console.log(`Ataque ${this.nivel} de Arquero`);
            this.puntosGolpe = this.puntosGolpe + 15;
            this.precision = this.precision + 15;
            this.flechasPlata = true;
            this.chequearNivel();
        }
        else if (this.nivel == 3) {
            console.log(`Ataque ${this.nivel} de Arquero`);
            this.puntosGolpe = this.puntosGolpe + 20;
            this.precision = this.precision + 20;
            this.flechasOro = true;
            this.chequearNivel();
        }
    }

    //ataques de Arquero
    public ataqueFlechasPlata() {
        if (this.precision >= 50 && this.flechasPlata == true) {
            this.precision = this.precision - 50;
            this.puntosGolpe = this.puntosGolpe + 10;
            console.log("Ataque con Flecha de Plata");
        }
        else {
            console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Plata`);
        }
    }

    public ataqueFlechasOro() {
        if (this.precision >= 75 && this.flechasOro == true) {
            this.precision = this.precision - 75;
            this.puntosGolpe = this.puntosGolpe + 15;
            console.log("Ataque con Flecha de Oro");
        }

        else { console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Oro`); }
    }

    //metodos: getters y setters 
    public getPrecision(): number {
        return this.precision;
    }
    public setPrecision(nuevoPrecision: number): void {
        this.precision = nuevoPrecision;
    }
    public getFlechasPlata(): boolean {
        return this.flechasPlata;
    }
    public setFlechasPlata(nuevoFlechasPlata: boolean): void {
        this.flechasPlata = nuevoFlechasPlata;
    }
    public getFlechasOro(): boolean {
        return this.flechasOro;
    }
    public setFlechasOro(nuevoflechasOro: boolean): void {
        this.flechasOro = nuevoflechasOro;
    }

    public getEvolucion(): ArqueroEvolucion {
        return this.evolucion;
    }

    public getDatosArquero(): string {
        return (
            `Nivel de Presicion : ${this.getPrecision()}
        Flechas de Plata Desbloqeada: ${this.getFlechasPlata()}
        Flechas Doradas Desbloqeada: ${this.getFlechasOro()}
    `)
    }

    //Funciones arqueroevolucion
    public getDatosArqueroEvolucion(): string {
        return this.evolucion.getDatosArqueroEvolucion();
    }

    public atacarEvolucionado() {
        this.evolucion.atacarevo();
    }

    public ataqueFlechasDiamante() {
        this.evolucion.ataqueFlechasDiamante();
    }

    public ataqueFlechasRubi() {
        this.evolucion.ataqueFlechasRubi();
    }

    public ataqueLlamadoLobo() {
        this.evolucion.ataqueLlamadoLobo();
    }

}