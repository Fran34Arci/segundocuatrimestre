"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    //constructor
    function Camion(capCarga) {
        this.capCarga = capCarga;
    }
    //metodos: getters y setters
    Camion.prototype.getCapCarga = function () {
        return this.capCarga;
    };
    Camion.prototype.setCapCarga = function (nuevoCapCarga) {
        this.capCarga = nuevoCapCarga;
    };
    Camion.prototype.getDatosCamion = function () {
        return ("N\u00BA Carga: ".concat(this.getCapCarga()));
    };
    return Camion;
}());
exports.Camion = Camion;
