"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    //constructor
    function Moto(cilindrada, rodado) {
        this.rodado = rodado;
        this.cilindrada = cilindrada;
    }
    //metodos: getters y setters
    Moto.prototype.getRodado = function () {
        return this.rodado;
    };
    Moto.prototype.setRodado = function (nuevorodado) {
        this.rodado = nuevorodado;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Moto.prototype.setCilindrada = function (nuevocilindrada) {
        this.cilindrada = nuevocilindrada;
    };
    return Moto;
}());
exports.Moto = Moto;
