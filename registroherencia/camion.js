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
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    //constructor
    function Camion(marca, modelo, patente, annio, tipo, capCarga) {
        var _this = _super.call(this, marca, modelo, patente, annio, tipo) || this;
        _this.capCarga = capCarga;
        return _this;
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
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
