"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    //constructor
    function Auto(numPuertas) {
        this.numPuertas = numPuertas;
    }
    //metodos: getters y setters
    Auto.prototype.getNumPuertas = function () {
        return this.numPuertas;
    };
    Auto.prototype.setNumPuertas = function (nuevoNumPuertas) {
        this.numPuertas = nuevoNumPuertas;
    };
    Auto.prototype.getDatosAuto = function () {
        return ("N\u00BA Puertas: ".concat(this.getNumPuertas()));
    };
    return Auto;
}());
exports.Auto = Auto;
