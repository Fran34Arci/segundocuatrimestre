"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    //constructor
    function Auto(numpuertas) {
        this.numpuertas = numpuertas;
    }
    //metodos: getters y setters
    Auto.prototype.getnumpuertas = function () {
        return this.numpuertas;
    };
    Auto.prototype.setnumpuertas = function (nuevonumpuertas) {
        this.numpuertas = nuevonumpuertas;
    };
    return Auto;
}());
exports.Auto = Auto;
