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
exports.Guerrero = void 0;
var personaje_1 = require("./personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    //constructor
    function Guerrero(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, fuerza, espadaGrande, hacha) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas) || this;
        _this.fuerza = fuerza;
        _this.espadaGrande = espadaGrande;
        _this.hacha = hacha;
        return _this;
    }
    Guerrero.prototype.atacar = function () {
        if (this.nivel == 1) {
            console.log("Ataque normal de guerrero");
            this.puntosGolpe = this.puntosGolpe + 10;
            this.fuerza = this.fuerza + 10;
            this.chequearNivel();
        }
        else if (this.nivel == 2) {
            console.log("Ataque ".concat(this.nivel, " de guerrero"));
            this.puntosGolpe = this.puntosGolpe + 15;
            this.fuerza = this.fuerza + 15;
            this.espadaGrande = true;
            this.chequearNivel();
        }
        else if (this.nivel >= 3) {
            console.log("Ataque ".concat(this.nivel, " de guerrero"));
            this.puntosGolpe = this.puntosGolpe + 20;
            this.fuerza = this.fuerza + 20;
            this.hacha = true;
            this.chequearNivel();
        }
    };
    //ataques de Guerrero
    Guerrero.prototype.ataqueEspadaGrande = function () {
        if (this.fuerza >= 50 && this.espadaGrande == true) {
            this.fuerza = this.fuerza - 50;
            this.puntosGolpe = this.puntosGolpe + 10;
            console.log("Ataque con Espada Grande");
        }
        else {
            console.log("tu nivel de  Fuerza es bajo no puedes ejecutar el ataque");
        }
    };
    Guerrero.prototype.ataqueHacha = function () {
        if (this.fuerza >= 75 && this.hacha == true) {
            this.fuerza = this.fuerza - 50;
            this.puntosGolpe = this.puntosGolpe + 15;
            console.log("Ataque con Hacha");
        }
        else {
            console.log("tu nivel de Fuerza es bajo no puedes ejecutar el ataque");
        }
    };
    //metodos: getters y setters 
    Guerrero.prototype.getFuerza = function () {
        return this.fuerza;
    };
    Guerrero.prototype.setFuerza = function (nuevoFuerza) {
        this.fuerza = nuevoFuerza;
    };
    Guerrero.prototype.getEspadaGrande = function () {
        return this.espadaGrande;
    };
    Guerrero.prototype.setEspadaGrande = function (nuevoespadaGrande) {
        this.espadaGrande = nuevoespadaGrande;
    };
    Guerrero.prototype.getHacha = function () {
        return this.hacha;
    };
    Guerrero.prototype.setHacha = function (nuevohacha) {
        this.hacha = nuevohacha;
    };
    Guerrero.prototype.getDatosGuerrero = function () {
        return ("Nivel de Fuerza: ".concat(this.getFuerza(), "\n        Espada Grande Desbloqeada:").concat(this.getEspadaGrande(), "\n        Hacha Desbloqeada: ").concat(this.getHacha(), "\n        "));
    };
    return Guerrero;
}(personaje_1.Personaje));
exports.Guerrero = Guerrero;
