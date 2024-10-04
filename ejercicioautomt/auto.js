"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    //constructor
    function Auto(numPuertas) {
        this.numPuertas = numPuertas;
    }
    //metodos: getters y setters
    Auto.prototype.getnumpuertas = function () {
        return this.numPuertas;
    };
    Auto.prototype.setnumpuertas = function (nuevoNumPuertas) {
        this.numPuertas = nuevoNumPuertas;
    };
    return Auto;
}());
exports.Auto = Auto;
