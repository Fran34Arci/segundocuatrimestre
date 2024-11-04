export { ArqueroEvolucion };
import { Arquero } from './arquero';

class ArqueroEvolucion extends Arquero {
    //atributos o variables internas
    private flechasRubi: boolean;
    private llamadoLobo: boolean;
    private flechasDiamante: boolean;
    //constructor
    constructor(nombre,nivel, puntosDeVida, puntosGolpe, cantidadVidas, precision, flechasPlata, flechasOro) {
        super(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, precision, flechasPlata, flechasOro);

        this.flechasDiamante = false;
        this.flechasRubi = false;
        this.llamadoLobo = false;
    }

    static evolucionar(arquero) {
        return new ArqueroEvolucion(arquero.nombre,arquero.nivel, arquero.puntosDeVida, arquero.puntosGolpe, arquero.cantidadVidas, arquero.precision, arquero.flechasPlata, arquero.flechasOro);

    }

    public atacar() {
        if (super.getNivel() <= 3) {
            console.log("Ataque normal de Arquero Evolucionado");
            super.setPuntosGolpe((super.getPuntosGolpe() + 50));
            super.setPrecision((super.getPrecision() + 150));
            super.chequearNivel();
        }
        else if (super.getNivel() <= 4) {
            console.log(`Ataque ${super.getNivel()} de Arquero Evolucionado`);
            super.setPuntosGolpe((super.getPuntosGolpe() + 75));
            super.setPrecision((super.getPrecision() + 250));
            this.flechasDiamante = true;
            super.chequearNivel();
        }
        else if (super.getNivel() >= 5) {
            console.log(`Ataque ${super.getNivel()} de Arquero Evolucionado`);
            super.setPuntosGolpe((super.getPuntosGolpe() + 100));
            super.setPrecision((super.getPrecision() + 350));
            this.flechasRubi = true;
            this.llamadoLobo = true;
            super.chequearNivel();
        }
    }
    public defenzaEvo() {
        super.defender();
    }
    public esquivarEvo() {
        super.esquivar();
    }
    public ataqueFlechasPlata() {
        super.ataqueFlechasPlata();
    }
    public ataqueFlechasOro() {
        super.ataqueFlechasOro();
    }
    //ataques de Arquero Evolucionado
    public ataqueFlechasDiamante() {
        if (super.getPrecision() >= 50 && this.flechasDiamante == true) {
            super.setPrecision((super.getPrecision() - 50));
            super.setPuntosGolpe((super.getPuntosGolpe() + 50));
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`);
        }
    }

    public ataqueFlechasRubi() {
        if (super.getPrecision() >= 75 && this.flechasRubi == true) {
            super.setPrecision((super.getPrecision() - 75));
            super.setPuntosGolpe((super.getPuntosGolpe() + 75));
            console.log("Ataque con Flecha de Rubi");
        }
        else { console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`); }
    }

    public ataqueLlamadoLobo() {
        if (super.getPrecision() >= 100 && this.llamadoLobo == true) {
            super.setPrecision((super.getPrecision() - 100));
            super.setPuntosGolpe((super.getPuntosGolpe() + 100));
            console.log("Ataque Llamado Lobo");
        }
        else { console.log(`tu nivel de Precision es bajo no puedes ejecutar el ataque`); }
    }
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

    public getDatosArqueroEvolucion() {
  return ( `Nombre personaje: ${super.getNombre()}
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