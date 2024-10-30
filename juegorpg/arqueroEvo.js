"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArqueroEvolucion = void 0;
var ArqueroEvolucion = /** @class */ (function () {
    //herencia por composicion
    function ArqueroEvolucion(arquero) {
        Object.assign(this, arquero);
        this.flechasDiamante = true;
        this.flechasRubi = true;
        this.llamadoLobo = true;
    }
    ArqueroEvolucion.prototype.ataqueEvo = function (arquero) {
        if (this.nivel == 3) {
            console.log("Ataque Arquero Evolucion");
            this.puntosGolpe = this.puntosGolpe + 100;
            this.precision = this.precision + 100;
            this.chequearNivel1(arquero);
        }
        else if (this.nivel == 4) {
            console.log("Ataque ".concat(this.nivel, " de Arquero Evolucion"));
            this.puntosGolpe = this.puntosGolpe + 150;
            this.precision = this.precision + 150;
            this.flechasPlata = true;
            this.chequearNivel1(arquero);
        }
        else if (this.nivel == 5) {
            console.log("Ataque ".concat(this.nivel, " de Arquero Evolucion"));
            this.puntosGolpe = this.puntosGolpe + 200;
            this.precision = this.precision + 200;
            this.flechasOro = true;
            this.chequearNivel1(arquero);
        }
    };
    ArqueroEvolucion.prototype.defenzaEvo = function (arquero) {
        console.log("Defenza normal");
        this.puntosDeVida = this.puntosDeVida - 1;
    };
    ArqueroEvolucion.prototype.esquivarEvo = function (arquero) {
        console.log("Esquivaste el ataque no recibes daño");
    };
    ArqueroEvolucion.prototype.chequearNivel1 = function (arquero) {
        if (this.puntosGolpe >= 50) {
            this.puntosGolpe = this.puntosGolpe - 50;
            this.nivel++;
        }
    };
    //ataques de Arquero Evolucionado
    ArqueroEvolucion.prototype.ataqueFlechasDiamante = function (arquero) {
        if (this.precision >= 50 && this.flechasDiamante == true) {
            this.precision = this.precision - 50;
            this.puntosGolpe = this.puntosGolpe + 50;
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque");
        }
    };
    ArqueroEvolucion.prototype.ataqueFlechasRubi = function (arquero) {
        if (this.precision >= 75 && this.flechasRubi == true) {
            this.precision = this.precision - 75;
            this.puntosGolpe = this.puntosGolpe + 75;
            console.log("Ataque con Flecha de Rubi");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque");
        }
    };
    ArqueroEvolucion.prototype.ataqueLlamadoLobo = function (arquero) {
        if (this.precision >= 100 && this.llamadoLobo == true) {
            this.precision = this.precision - 100;
            this.puntosGolpe = this.puntosGolpe + 100;
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
        return ("Flechas de Diamante Desbloqeada : ".concat(this.getFlechasDiamante(), "\n        Flechas de Plata Desbloqeada: ").concat(this.getFlechasRubi(), "\n        Flechas Doradas Desbloqeada: ").concat(this.getLlamadoLobo(), "\n    "));
    };
    return ArqueroEvolucion;
}());
exports.ArqueroEvolucion = ArqueroEvolucion;
