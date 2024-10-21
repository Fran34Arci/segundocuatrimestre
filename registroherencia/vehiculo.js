"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, patente, annio, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.annio = annio;
        this.tipo = tipo;
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
    Vehiculo.prototype.getTipo = function () {
        return this.tipo;
    };
    Vehiculo.prototype.setTipo = function (nuevoTipo) {
        this.tipo = nuevoTipo;
    };
    Vehiculo.prototype.getAnnio = function () {
        return this.annio;
    };
    Vehiculo.prototype.setAnnio = function (nuevoAnnio) {
        this.annio = nuevoAnnio;
    };
    Vehiculo.prototype.getDatos = function () {
        return ("Marca: ".concat(this.getMarca(), "\n      Modelo: ").concat(this.getModelo(), " \n      Patente: ").concat(this.getPatente(), "\n      Annio: ").concat(this.getAnnio(), "\n      "));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
