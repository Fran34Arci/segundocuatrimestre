export { ArqueroEvolucion };
import { Arquero } from './arquero';
import { Personaje } from './personaje';

class ArqueroEvolucion {
    private flechasRubi: boolean;
    private llamadoLobo: boolean;
    private flechasDiamante: boolean;
    private arquero: Arquero;

    constructor(flechasRubi: boolean, llamadoLobo: boolean, flechasDiamante: boolean, arquero: Arquero) {
        this.flechasRubi = flechasRubi;
        this.llamadoLobo = llamadoLobo;
        this.flechasDiamante = flechasDiamante;
        this.arquero = arquero;
    }

    public atacarevo(): void {
        if (this.arquero.getNivel() == 4) {
            console.log("Ataque normal de Arquero Evolucionado");
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 50));
            this.arquero.setPrecision((this.arquero.getPrecision() + 150));
            this.arquero.chequearNivel();
        }
        else if (this.arquero.getNivel() == 5) {
            console.log(`Ataque ${this.arquero.getNivel()} de Arquero Evolucionado`);
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 75));
            this.arquero.setPrecision((this.arquero.getPrecision() + 250));
            this.flechasDiamante = true;
            this.arquero.chequearNivel();
        }
        else if (this.arquero.getNivel() >= 6) {
            console.log(`Ataque ${this.arquero.getNivel()} de Arquero Evolucionado`);
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 100));
            this.arquero.setPrecision((this.arquero.getPrecision() + 350));
            this.flechasRubi = true;
            this.llamadoLobo = true;
            this.arquero.chequearNivel();
        }
    }

    //ataques de Arquero Evolucionado
    public ataqueFlechasDiamante(): void {
        if (this.arquero.getPrecision() >= 50 && this.flechasDiamante == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 50));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 50));
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Flechas de Diamante`);
        }
    }

    public ataqueFlechasRubi(): void {
        if (this.arquero.getPrecision() >= 75 && this.flechasRubi == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 75));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 75));
            console.log("Ataque con Flecha de Rubi");
        }
        else { console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Rubi`); }
    }


    public ataqueLlamadoLobo(): void {
        if (this.arquero.getPrecision() >= 100 && this.llamadoLobo == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 100));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 100));
            console.log("Ataque Llamado Lobo");
        }
        else { console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Ataque Llamado Lobo`); }
    }

    //getters

    //getters setters
    public getFlechasDiamante(): boolean {
        return this.flechasDiamante;
    }
    public setFlechasDiamante(nuevoFlechasDiamante: boolean): void {
        this.flechasDiamante = nuevoFlechasDiamante;
    }
    public getFlechasRubi(): boolean {
        return this.flechasRubi;
    }
    public setFlechasRubi(nuevoflechasRubi: boolean): void {
        this.flechasRubi = nuevoflechasRubi;
    }
    public getLlamadoLobo(): boolean {
        return this.llamadoLobo;
    }
    public setLlamadoLobo(nuevollamadoLobo: boolean): void {
        this.llamadoLobo = nuevollamadoLobo;
    }

    public getDatosArqueroEvolucion(): string {
        return (`Nombre personaje: ${this.arquero.getNombre()}
                      Nivel del Personaje: ${this.arquero.getNivel()}
                      Puntos de Vida: ${this.arquero.getPuntosDeVida()}
                      Puntos por Golpe: ${this.arquero.getPuntosGolpe()}
                      Vidas: ${this.arquero.getCantidadVidas()}
                      Nivel de Presicion : ${this.arquero.getPrecision()}
                      Flechas de Plata Desbloqeada: ${this.arquero.getFlechasPlata()}
                      Flechas Doradas Desbloqeada: ${this.arquero.getFlechasOro()}
                      Flechas de Diamante Desbloqeada : ${this.getFlechasDiamante()}
                      Flechas de Plata Desbloqeada: ${this.getFlechasRubi()}
                      Flechas Ataque Llamado de lobo: ${this.getLlamadoLobo()}
              `)
    }

}