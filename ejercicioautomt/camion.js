"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    //constructor
    function Camion(capCarga) {
        this.capCarga = capCarga;
    }
    //metodos: getters y setters
    Camion.prototype.getCapcarga = function () {
        return this.capCarga;
    };
    Camion.prototype.setCapcarga = function (nuevoCapCarga) {
        this.capCarga = nuevoCapCarga;
    };
    return Camion;
}());
exports.Camion = Camion;
