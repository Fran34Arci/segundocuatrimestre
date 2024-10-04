"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    //constructor
    function Vehiculo(marca, modelo, patente, annio, Auto, Camion, Moto) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.annio = annio;
        this.Auto = Auto;
        this.Camion = Camion;
        this.Moto = Moto;
    }
    //metodos: getters y setters
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (nuevoMarca) {
        this.marca = nuevoMarca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (nuevoPatente) {
        this.patente = nuevoPatente;
    };
    Vehiculo.prototype.getAnnio = function () {
        return this.annio;
    };
    Vehiculo.prototype.setAnnio = function (nuevoAnnio) {
        this.annio = nuevoAnnio;
    };
    Vehiculo.prototype.getAuto = function () {
        return this.Auto;
    };
    Vehiculo.prototype.getCamion = function () {
        return this.Camion;
    };
    Vehiculo.prototype.getMoto = function () {
        return this.Moto;
    };
    Vehiculo.prototype.getDatos = function () {
        return ("Marca: ".concat(this.getMarca(), "\n      Modelo: ").concat(this.getModelo(), " \n      Patente: ").concat(this.getPatente(), "\n      Annio: ").concat(this.getAnnio(), "\n      Auto: ").concat(this.getAuto(), "\n      Camion: ").concat(this.getCamion(), "\n      Moto: ").concat(this.getMoto()));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
