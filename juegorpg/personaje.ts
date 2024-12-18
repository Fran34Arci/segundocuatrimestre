export { Personaje };
import { Hechicero } from './hechicero';
import { Guerrero } from './guerrero';
import { Arquero } from './arquero';

abstract class Personaje {
    protected nombre: string;
    protected nivel : number;
    protected puntosDeVida: number;
    protected puntosGolpe: number;
    protected cantidadVidas: number;
    //constructor
    constructor(nombre:string, nivel:number, puntosDeVida:number, puntosGolpe:number, cantidadVidas:number) {
        this.nivel= nivel;
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
        this.puntosGolpe = puntosGolpe;
        this.cantidadVidas = cantidadVidas;
    }

    public chequearNivel() {
        if (this.puntosGolpe >= 50) {
            this.puntosGolpe = this.puntosGolpe - 50;
            this.nivel++
        }
    }

    abstract atacar(): void;

    public defender() {
        console.log("Defenza normal");
        this.puntosDeVida = this.puntosDeVida - 1;
    }
    public esquivar() {
        console.log("Esquivaste el ataque no recibes daño");
    }
    //metodos: getters y setters 
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }
    public getNivel(): number {
        return this.nivel;
    }
    public setNivel(nuevonivel: number): void {
        this.nivel = nuevonivel;
    }
    public getPuntosDeVida(): number {
        return this.puntosDeVida;
    }
    public setPuntosDeVida(nuevopuntosDeVida: number): void {
        this.puntosDeVida = nuevopuntosDeVida;
    }
    public getPuntosGolpe(): number {
        return this.puntosGolpe;
    }
    public setPuntosGolpe(nuevopuntosGolpe: number): void {
        this.puntosGolpe = nuevopuntosGolpe;
    }
    public getCantidadVidas(): number {
        return this.cantidadVidas;
    }
    public setCantidadVidas(nuevocantidadVidas: number): void {
        this.cantidadVidas = nuevocantidadVidas;
    }
    public getDatos(): string {
        return (
            `Nombre personaje: ${this.getNombre()}
        Nivel del Personaje: ${this.getNivel()}
        Puntos de Vida: ${this.getPuntosDeVida()}
        Puntos por Golpe: ${this.getPuntosGolpe()}
        Vidas: ${this.getCantidadVidas()}
        `)
    }
}