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
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    //constructor
    function Moto(marca, modelo, patente, annio, tipo, cilindrada, rodado) {
        var _this = _super.call(this, marca, modelo, patente, annio, tipo) || this;
        _this.rodado = rodado;
        _this.cilindrada = cilindrada;
        return _this;
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
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
