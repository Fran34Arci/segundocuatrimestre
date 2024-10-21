"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    //constructor
    function Auto(marca, modelo, patente, annio, tipo, numPuertas) {
        var _this = _super.call(this, marca, modelo, patente, annio, tipo) || this;
        _this.numPuertas = numPuertas;
        return _this;
    }
    //metodos: getters y setters
    Auto.prototype.getNumPuertas = function () {
        return this.numPuertas;
    };
    Auto.prototype.setNumPuertas = function (nuevoNumPuertas) {
        this.numPuertas = nuevoNumPuertas;
    };
    Auto.prototype.getDatosAuto = function () {
        return ("N\u00BA Puertas: ".concat(this.numPuertas));
    };
    return Auto;
}(vehiculo_1.Vehiculo));
exports.Auto = Auto;
