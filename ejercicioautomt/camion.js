"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    //constructor
    function Camion(capcarga) {
        this.capcarga = capcarga;
    }
    //metodos: getters y setters
    Camion.prototype.getCapcarga = function () {
        return this.capcarga;
    };
    Camion.prototype.setCapcarga = function (nuevocapcarga) {
        this.capcarga = nuevocapcarga;
    };
    return Camion;
}());
exports.Camion = Camion;
