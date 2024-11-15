export { ArqueroEvolucion };
import { Arquero } from './arquero';


class ArqueroEvolucion extends Arquero {
    private flechasRubi: boolean = false;
    private llamadoLobo: boolean = false;
    private flechasDiamante: boolean = false;


    constructor(nombre: string, nivel: number, puntosDeVida: number, puntosGolpe: number, cantidadVidas: number, precision: number, flechasPlata: boolean, flechasOro: boolean) {
        super(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, precision, flechasPlata, flechasOro);
        this.flechasRubi = false;
        this.llamadoLobo = false;
        this.flechasDiamante = false;
    }



    public atacarevo(): void {
        if (super.getNivel() == 4) {
            console.log("Ataque normal de Arquero Evolucionado");
            super.setPuntosGolpe((super.getPuntosGolpe() + 50));
            super.setPrecision((super.getPrecision() + 150));
            super.chequearNivel();
        }
        else if (super.getNivel() == 5) {
            console.log(`Ataque ${super.getNivel()} de Arquero Evolucionado`);
            super.setPuntosGolpe((super.getPuntosGolpe() + 75));
            super.setPrecision((super.getPrecision() + 250));
            this.flechasDiamante = true;
            super.chequearNivel();
        }
        else if (super.getNivel() >= 6) {
            console.log(`Ataque ${super.getNivel()} de Arquero Evolucionado`);
            super.setPuntosGolpe((super.getPuntosGolpe() + 100));
            super.setPrecision((super.getPrecision() + 350));
            this.flechasRubi = true;
            this.llamadoLobo = true;
            super.chequearNivel();
        }
    }

    //ataques de Arquero Evolucionado
    public ataqueFlechasDiamante(): void {
        if (super.getPrecision() >= 50 && this.flechasDiamante == true) {
            super.setPrecision((super.getPrecision() - 50));
            super.setPuntosGolpe((super.getPuntosGolpe() + 50));
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Flechas de Diamante`);
        }
    }

    public ataqueFlechasRubi(): void {
        if (super.getPrecision() >= 75 && this.flechasRubi == true) {
            super.setPrecision((super.getPrecision() - 75));
            super.setPuntosGolpe((super.getPuntosGolpe() + 75));
            console.log("Ataque con Flecha de Rubi");
        }
        else { console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Rubi`); }
    }


    public ataqueLlamadoLobo(): void {
        if (super.getPrecision() >= 100 && this.llamadoLobo == true) {
            super.setPrecision((super.getPrecision() - 100));
            super.setPuntosGolpe((super.getPuntosGolpe() + 100));
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
        return (`Nombre personaje: ${super.getNombre()}
                      Nivel del Personaje: ${super.getNivel()}
                      Puntos de Vida: ${super.getPuntosDeVida()}
                      Puntos por Golpe: ${super.getPuntosGolpe()}
                      Vidas: ${super.getCantidadVidas()}
                      Nivel de Presicion : ${super.getPrecision()}
                      Flechas de Plata Desbloqeada: ${super.getFlechasPlata()}
                      Flechas Doradas Desbloqeada: ${super.getFlechasOro()}
                      Flechas de Diamante Desbloqeada : ${this.getFlechasDiamante()}
                      Flechas de Plata Desbloqeada: ${this.getFlechasRubi()}
                      Flechas Ataque Llamado de lobo: ${this.getLlamadoLobo()}
              `)
    }

}