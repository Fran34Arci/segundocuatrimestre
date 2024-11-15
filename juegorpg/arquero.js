"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, precision, flechasPlata, flechasOro) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas) || this;
        _this.nombre = nombre;
        _this.nivel = nivel;
        _this.puntosDeVida = puntosDeVida;
        _this.puntosGolpe = puntosGolpe;
        _this.cantidadVidas = cantidadVidas;
        _this.precision = precision;
        _this.flechasPlata = flechasPlata;
        _this.flechasOro = flechasOro;
        return _this;
    }
    //ataques de Arquero
    Arquero.prototype.atacar = function () {
        if (this.nivel == 1) {
            console.log("Ataque normal de Arquero");
            this.puntosGolpe = this.puntosGolpe + 10;
            this.precision = this.precision + 10;
            this.chequearNivel();
        }
        else if (this.nivel == 2) {
            console.log("Ataque ".concat(this.nivel, " de Arquero"));
            this.puntosGolpe = this.puntosGolpe + 15;
            this.precision = this.precision + 15;
            this.flechasPlata = true;
            this.chequearNivel();
        }
        else if (this.nivel == 3) {
            console.log("Ataque ".concat(this.nivel, " de Arquero"));
            this.puntosGolpe = this.puntosGolpe + 20;
            this.precision = this.precision + 20;
            this.flechasOro = true;
            this.chequearNivel();
        }
    };
    //ataques de Arquero
    Arquero.prototype.ataqueFlechasPlata = function () {
        if (this.precision >= 50 && this.flechasPlata == true) {
            this.precision = this.precision - 50;
            this.puntosGolpe = this.puntosGolpe + 10;
            console.log("Ataque con Flecha de Plata");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Plata");
        }
    };
    Arquero.prototype.ataqueFlechasOro = function () {
        if (this.precision >= 75 && this.flechasOro == true) {
            this.precision = this.precision - 75;
            this.puntosGolpe = this.puntosGolpe + 15;
            console.log("Ataque con Flecha de Oro");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Oro");
        }
    };
    //metodos: getters y setters 
    Arquero.prototype.getPrecision = function () {
        return this.precision;
    };
    Arquero.prototype.setPrecision = function (nuevoPrecision) {
        this.precision = nuevoPrecision;
    };
    Arquero.prototype.getFlechasPlata = function () {
        return this.flechasPlata;
    };
    Arquero.prototype.setFlechasPlata = function (nuevoFlechasPlata) {
        this.flechasPlata = nuevoFlechasPlata;
    };
    Arquero.prototype.getFlechasOro = function () {
        return this.flechasOro;
    };
    Arquero.prototype.setFlechasOro = function (nuevoflechasOro) {
        this.flechasOro = nuevoflechasOro;
    };
    Arquero.prototype.getDatosArquero = function () {
        return ("Nivel de Presicion : ".concat(this.getPrecision(), "\n        Flechas de Plata Desbloqeada: ").concat(this.getFlechasPlata(), "\n        Flechas Doradas Desbloqeada: ").concat(this.getFlechasOro(), "\n    "));
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
