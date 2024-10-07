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
    Moto.prototype.setRodado = function (nuevoRodado) {
        this.rodado = nuevoRodado;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Moto.prototype.setCilindrada = function (nuevoCilindrada) {
        this.cilindrada = nuevoCilindrada;
    };
    Moto.prototype.getDatosMoto = function () {
        return ("N\u00BA Cilindrada: ".concat(this.getCilindrada(), "\n          N\u00BA Rodado: ").concat(this.getRodado(), "\n         "));
    };
    return Moto;
}());
exports.Moto = Moto;
