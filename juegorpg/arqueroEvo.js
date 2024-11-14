"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArqueroEvolucion = void 0;
var ArqueroEvolucion = /** @class */ (function () {
    function ArqueroEvolucion(flechasRubi, llamadoLobo, flechasDiamante, arquero) {
        this.flechasRubi = flechasRubi;
        this.llamadoLobo = llamadoLobo;
        this.flechasDiamante = flechasDiamante;
        this.arquero = arquero;
    }
    ArqueroEvolucion.prototype.atacarevo = function () {
        if (this.arquero.getNivel() == 4) {
            console.log("Ataque normal de Arquero Evolucionado");
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 50));
            this.arquero.setPrecision((this.arquero.getPrecision() + 150));
            this.arquero.chequearNivel();
        }
        else if (this.arquero.getNivel() == 5) {
            console.log("Ataque ".concat(this.arquero.getNivel(), " de Arquero Evolucionado"));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 75));
            this.arquero.setPrecision((this.arquero.getPrecision() + 250));
            this.flechasDiamante = true;
            this.arquero.chequearNivel();
        }
        else if (this.arquero.getNivel() >= 6) {
            console.log("Ataque ".concat(this.arquero.getNivel(), " de Arquero Evolucionado"));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 100));
            this.arquero.setPrecision((this.arquero.getPrecision() + 350));
            this.flechasRubi = true;
            this.llamadoLobo = true;
            this.arquero.chequearNivel();
        }
    };
    //ataques de Arquero Evolucionado
    ArqueroEvolucion.prototype.ataqueFlechasDiamante = function () {
        if (this.arquero.getPrecision() >= 50 && this.flechasDiamante == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 50));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 50));
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Flechas de Diamante");
        }
    };
    ArqueroEvolucion.prototype.ataqueFlechasRubi = function () {
        if (this.arquero.getPrecision() >= 75 && this.flechasRubi == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 75));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 75));
            console.log("Ataque con Flecha de Rubi");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Rubi");
        }
    };
    ArqueroEvolucion.prototype.ataqueLlamadoLobo = function () {
        if (this.arquero.getPrecision() >= 100 && this.llamadoLobo == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 100));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 100));
            console.log("Ataque Llamado Lobo");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Ataque Llamado Lobo");
        }
    };
    //getters
    //getters setters
    ArqueroEvolucion.prototype.getFlechasDiamante = function () {
        return this.flechasDiamante;
    };
    ArqueroEvolucion.prototype.setFlechasDiamante = function (nuevoFlechasDiamante) {
        this.flechasDiamante = nuevoFlechasDiamante;
    };
    ArqueroEvolucion.prototype.getFlechasRubi = function () {
        return this.flechasRubi;
    };
    ArqueroEvolucion.prototype.setFlechasRubi = function (nuevoflechasRubi) {
        this.flechasRubi = nuevoflechasRubi;
    };
    ArqueroEvolucion.prototype.getLlamadoLobo = function () {
        return this.llamadoLobo;
    };
    ArqueroEvolucion.prototype.setLlamadoLobo = function (nuevollamadoLobo) {
        this.llamadoLobo = nuevollamadoLobo;
    };
    ArqueroEvolucion.prototype.getDatosArqueroEvolucion = function () {
        return ("Nombre personaje: ".concat(this.arquero.getNombre(), "\n                      Nivel del Personaje: ").concat(this.arquero.getNivel(), "\n                      Puntos de Vida: ").concat(this.arquero.getPuntosDeVida(), "\n                      Puntos por Golpe: ").concat(this.arquero.getPuntosGolpe(), "\n                      Vidas: ").concat(this.arquero.getCantidadVidas(), "\n                      Nivel de Presicion : ").concat(this.arquero.getPrecision(), "\n                      Flechas de Plata Desbloqeada: ").concat(this.arquero.getFlechasPlata(), "\n                      Flechas Doradas Desbloqeada: ").concat(this.arquero.getFlechasOro(), "\n                      Flechas de Diamante Desbloqeada : ").concat(this.getFlechasDiamante(), "\n                      Flechas de Plata Desbloqeada: ").concat(this.getFlechasRubi(), "\n                      Flechas Ataque Llamado de lobo: ").concat(this.getLlamadoLobo(), "\n              "));
    };
    return ArqueroEvolucion;
}());
exports.ArqueroEvolucion = ArqueroEvolucion;
