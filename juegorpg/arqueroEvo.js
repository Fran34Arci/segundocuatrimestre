"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArqueroEvolucion = void 0;
var ArqueroEvolucion = /** @class */ (function () {
    function ArqueroEvolucion(arquero) {
        this.arquero = arquero;
        this.flechasDiamante = false;
        this.flechasRubi = false;
        this.llamadoLobo = false;
    }
    ArqueroEvolucion.prototype.atacar = function () {
        if (this.arquero.getNivel() <= 3) {
            console.log("Ataque normal de Arquero Evolucionado");
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 50));
            this.arquero.setPrecision((this.arquero.getPrecision() + 50));
            this.arquero.chequearNivel();
        }
        else if (this.arquero.getNivel() <= 4) {
            console.log("Ataque ".concat(this.arquero.getNivel(), " de Arquero Evolucionado"));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 75));
            this.arquero.setPrecision((this.arquero.getPrecision() + 75));
            this.flechasDiamante = true;
            this.arquero.chequearNivel();
        }
        else if (this.arquero.getNivel() >= 5) {
            console.log("Ataque ".concat(this.arquero.getNivel(), " de Arquero Evolucionado"));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 100));
            this.arquero.setPrecision((this.arquero.getPrecision() + 100));
            this.flechasRubi = true;
            this.llamadoLobo = true;
            this.arquero.chequearNivel();
        }
    };
    ArqueroEvolucion.prototype.defenzaEvo = function () {
        this.arquero.defender();
    };
    ArqueroEvolucion.prototype.esquivarEvo = function () {
        this.arquero.esquivar();
    };
    ArqueroEvolucion.prototype.ataqueFlechasPlata = function () {
        this.arquero.ataqueFlechasPlata();
    };
    ArqueroEvolucion.prototype.ataqueFlechasOro = function () {
        this.arquero.ataqueFlechasOro();
    };
    //ataques de Arquero Evolucionado
    ArqueroEvolucion.prototype.ataqueFlechasDiamante = function () {
        if (this.arquero.getPrecision() >= 50 && this.flechasDiamante == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 50));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 50));
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque");
        }
    };
    ArqueroEvolucion.prototype.ataqueFlechasRubi = function () {
        if (this.arquero.getPrecision() >= 75 && this.flechasRubi == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 75));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 75));
            console.log("Ataque con Flecha de Rubi");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque");
        }
    };
    ArqueroEvolucion.prototype.ataqueLlamadoLobo = function (arquero) {
        if (this.precision >= 100 && this.llamadoLobo == true) {
            this.arquero.setPrecision((this.arquero.getPrecision() - 100));
            this.arquero.setPuntosGolpe((this.arquero.getPuntosGolpe() + 100));
            console.log("Ataque Llamado Lobo");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque");
        }
    };
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
        return ("Flechas de Diamante Desbloqeada : ".concat(this.getFlechasDiamante(), "\n        Flechas de Plata Desbloqeada: ").concat(this.getFlechasRubi(), "\n        Flechas Ataque Llamado de lobo: ").concat(this.getLlamadoLobo(), "\n    "));
    };
    return ArqueroEvolucion;
}());
exports.ArqueroEvolucion = ArqueroEvolucion;
