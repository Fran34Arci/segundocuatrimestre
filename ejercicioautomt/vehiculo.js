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
    Vehiculo.prototype.setMarca = function (nuevomarca) {
        this.marca = nuevomarca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (nuevomodelo) {
        this.modelo = nuevomodelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (nuevopatente) {
        this.patente = nuevopatente;
    };
    Vehiculo.prototype.getAnnio = function () {
        return this.annio;
    };
    Vehiculo.prototype.setAnnio = function (nuevoannio) {
        this.annio = nuevoannio;
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
        return {
            marca: this.getMarca(),
            modelo: this.getModelo(),
            patente: this.getPatente(),
            año: this.getAnnio(),
            Auto: this.getAuto(),
            Camion: this.getCamion(),
            Moto: this.getMoto(),
        };
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
