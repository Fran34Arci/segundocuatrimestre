"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    //constructor
    function Personaje(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas) {
        this.nivel = nivel;
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
        this.puntosGolpe = puntosGolpe;
        this.cantidadVidas = cantidadVidas;
    }
    Personaje.prototype.chequearNivel = function () {
        if (this.puntosGolpe >= 50) {
            this.puntosGolpe = this.puntosGolpe - 50;
            this.nivel++;
        }
    };
    Personaje.prototype.defender = function () {
        console.log("Defenza normal");
        this.puntosDeVida = this.puntosDeVida - 1;
    };
    Personaje.prototype.esquivar = function () {
        console.log("Esquivaste el ataque no recibes daño");
    };
    //metodos: getters y setters 
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.setNivel = function (nuevonivel) {
        this.nivel = nuevonivel;
    };
    Personaje.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    Personaje.prototype.setPuntosDeVida = function (nuevopuntosDeVida) {
        this.puntosDeVida = nuevopuntosDeVida;
    };
    Personaje.prototype.getPuntosGolpe = function () {
        return this.puntosGolpe;
    };
    Personaje.prototype.setPuntosGolpe = function (nuevopuntosGolpe) {
        this.puntosGolpe = nuevopuntosGolpe;
    };
    Personaje.prototype.getCantidadVidas = function () {
        return this.cantidadVidas;
    };
    Personaje.prototype.setCantidadVidas = function (nuevocantidadVidas) {
        this.cantidadVidas = nuevocantidadVidas;
    };
    Personaje.prototype.getDatos = function () {
        return ("Nombre personaje: ".concat(this.getNombre(), "\n        Nivel del Personaje: ").concat(this.getNivel(), "\n        Puntos de Vida: ").concat(this.getPuntosDeVida(), "\n        Puntos por Golpe: ").concat(this.getPuntosGolpe(), "\n        Vidas: ").concat(this.getCantidadVidas(), "\n        "));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
