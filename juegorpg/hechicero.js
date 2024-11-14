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
exports.Hechicero = void 0;
var personaje_1 = require("./personaje");
var Hechicero = /** @class */ (function (_super) {
    __extends(Hechicero, _super);
    //constructor
    function Hechicero(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, mana, manaFuego, manaTrueno) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas) || this;
        _this.mana = mana;
        _this.manaFuego = manaFuego;
        _this.manaTrueno = manaTrueno;
        return _this;
    }
    Hechicero.prototype.atacar = function () {
        if (this.nivel == 1) {
            console.log("Ataque normal de hechicero");
            this.puntosGolpe = this.puntosGolpe + 10;
            this.mana = this.mana + 10;
            this.chequearNivel();
        }
        else if (this.nivel == 2) {
            console.log("Ataque ".concat(this.nivel, " de hechicero"));
            this.puntosGolpe = this.puntosGolpe + 15;
            this.mana = this.mana + 150;
            this.manaFuego = this.manaFuego + 150;
            this.chequearNivel();
        }
        else if (this.nivel >= 3) {
            console.log("Ataque ".concat(this.nivel, " de hechicero"));
            this.puntosGolpe = this.puntosGolpe + 20;
            this.mana = this.mana + 200;
            this.manaFuego = this.manaFuego + 200;
            this.manaTrueno = this.manaTrueno + 250;
            this.chequearNivel();
        }
    };
    //ataques de Hechicero
    Hechicero.prototype.ataqueFuego = function () {
        if (this.manaFuego >= 50 && this.mana >= 15) {
            this.mana = this.mana - 15;
            this.manaFuego = this.manaFuego - 50;
            this.puntosGolpe = this.puntosGolpe + 10;
            console.log("Ataque bola de fuego");
        }
        else {
            console.log("tu nivel de mana y/o mana de Fuego es bajo no puedes ejecutar el ataque");
        }
    };
    Hechicero.prototype.ataqueTrueno = function () {
        if (this.manaTrueno >= 75 && this.mana >= 20) {
            this.mana = this.mana - 20;
            this.manaTrueno = this.manaTrueno - 75;
            this.puntosGolpe = this.puntosGolpe + 15;
            console.log("Ataque de trueno");
        }
        else {
            console.log("tu nivel de mana y/o mana de Trueno es bajo no puedes ejecutar el ataque");
        }
    };
    //metodos: getters y setters 
    Hechicero.prototype.getMana = function () {
        return this.mana;
    };
    Hechicero.prototype.setMana = function (nuevoMana) {
        this.mana = nuevoMana;
    };
    Hechicero.prototype.getManaFuego = function () {
        return this.manaFuego;
    };
    Hechicero.prototype.setManaFuego = function (nuevomanaFuego) {
        this.manaFuego = nuevomanaFuego;
    };
    Hechicero.prototype.getManaTrueno = function () {
        return this.manaTrueno;
    };
    Hechicero.prototype.setManaTrueno = function (nuevomanaTrueno) {
        this.manaTrueno = nuevomanaTrueno;
    };
    Hechicero.prototype.getDatosHechicero = function () {
        return ("Nivel de Mana: ".concat(this.getMana(), "\n        Nivel de Mana Fuego: ").concat(this.getManaFuego(), "\n        Nivel de Mana Trueno: ").concat(this.getManaTrueno(), "\n        "));
    };
    return Hechicero;
}(personaje_1.Personaje));
exports.Hechicero = Hechicero;
