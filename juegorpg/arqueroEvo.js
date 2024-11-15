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
exports.ArqueroEvolucion = void 0;
var arquero_1 = require("./arquero");
var ArqueroEvolucion = /** @class */ (function (_super) {
    __extends(ArqueroEvolucion, _super);
    function ArqueroEvolucion(nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, precision, flechasPlata, flechasOro) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, puntosGolpe, cantidadVidas, precision, flechasPlata, flechasOro) || this;
        _this.flechasRubi = false;
        _this.llamadoLobo = false;
        _this.flechasDiamante = false;
        _this.flechasRubi = false;
        _this.llamadoLobo = false;
        _this.flechasDiamante = false;
        return _this;
    }
    ArqueroEvolucion.prototype.atacarevo = function () {
        if (_super.prototype.getNivel.call(this) == 4) {
            console.log("Ataque normal de Arquero Evolucionado");
            _super.prototype.setPuntosGolpe.call(this, (_super.prototype.getPuntosGolpe.call(this) + 50));
            _super.prototype.setPrecision.call(this, (_super.prototype.getPrecision.call(this) + 150));
            _super.prototype.chequearNivel.call(this);
        }
        else if (_super.prototype.getNivel.call(this) == 5) {
            console.log("Ataque ".concat(_super.prototype.getNivel.call(this), " de Arquero Evolucionado"));
            _super.prototype.setPuntosGolpe.call(this, (_super.prototype.getPuntosGolpe.call(this) + 75));
            _super.prototype.setPrecision.call(this, (_super.prototype.getPrecision.call(this) + 250));
            this.flechasDiamante = true;
            _super.prototype.chequearNivel.call(this);
        }
        else if (_super.prototype.getNivel.call(this) >= 6) {
            console.log("Ataque ".concat(_super.prototype.getNivel.call(this), " de Arquero Evolucionado"));
            _super.prototype.setPuntosGolpe.call(this, (_super.prototype.getPuntosGolpe.call(this) + 100));
            _super.prototype.setPrecision.call(this, (_super.prototype.getPrecision.call(this) + 350));
            this.flechasRubi = true;
            this.llamadoLobo = true;
            _super.prototype.chequearNivel.call(this);
        }
    };
    //ataques de Arquero Evolucionado
    ArqueroEvolucion.prototype.ataqueFlechasDiamante = function () {
        if (_super.prototype.getPrecision.call(this) >= 50 && this.flechasDiamante == true) {
            _super.prototype.setPrecision.call(this, (_super.prototype.getPrecision.call(this) - 50));
            _super.prototype.setPuntosGolpe.call(this, (_super.prototype.getPuntosGolpe.call(this) + 50));
            console.log("Ataque con Flechas de Diamante");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Flechas de Diamante");
        }
    };
    ArqueroEvolucion.prototype.ataqueFlechasRubi = function () {
        if (_super.prototype.getPrecision.call(this) >= 75 && this.flechasRubi == true) {
            _super.prototype.setPrecision.call(this, (_super.prototype.getPrecision.call(this) - 75));
            _super.prototype.setPuntosGolpe.call(this, (_super.prototype.getPuntosGolpe.call(this) + 75));
            console.log("Ataque con Flecha de Rubi");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Flecha de Rubi");
        }
    };
    ArqueroEvolucion.prototype.ataqueLlamadoLobo = function () {
        if (_super.prototype.getPrecision.call(this) >= 100 && this.llamadoLobo == true) {
            _super.prototype.setPrecision.call(this, (_super.prototype.getPrecision.call(this) - 100));
            _super.prototype.setPuntosGolpe.call(this, (_super.prototype.getPuntosGolpe.call(this) + 100));
            console.log("Ataque Llamado Lobo");
        }
        else {
            console.log("tu nivel de Precision es bajo no puedes ejecutar el ataque Ataque Llamado Lobo");
        }
    };
    //getters
    //getters setters
    ArqueroEvolucion.prototype.getFlechasDiamante = function () {
        return this.flechasDiamante;
    };
    ArqueroEvolucion.prototype.setFlechasDiamante = function (nuevoFlechasDiamante) {
        this.flechasDiamante = nuevoFlechasDiamante;
    };
    ArqueroEvolucion.prototype.getFlechasRubi = function () {
        return this.flechasRubi;
    };
    ArqueroEvolucion.prototype.setFlechasRubi = function (nuevoflechasRubi) {
        this.flechasRubi = nuevoflechasRubi;
    };
    ArqueroEvolucion.prototype.getLlamadoLobo = function () {
        return this.llamadoLobo;
    };
    ArqueroEvolucion.prototype.setLlamadoLobo = function (nuevollamadoLobo) {
        this.llamadoLobo = nuevollamadoLobo;
    };
    ArqueroEvolucion.prototype.getDatosArqueroEvolucion = function () {
        return ("Nombre personaje: ".concat(_super.prototype.getNombre.call(this), "\n                      Nivel del Personaje: ").concat(_super.prototype.getNivel.call(this), "\n                      Puntos de Vida: ").concat(_super.prototype.getPuntosDeVida.call(this), "\n                      Puntos por Golpe: ").concat(_super.prototype.getPuntosGolpe.call(this), "\n                      Vidas: ").concat(_super.prototype.getCantidadVidas.call(this), "\n                      Nivel de Presicion : ").concat(_super.prototype.getPrecision.call(this), "\n                      Flechas de Plata Desbloqeada: ").concat(_super.prototype.getFlechasPlata.call(this), "\n                      Flechas Doradas Desbloqeada: ").concat(_super.prototype.getFlechasOro.call(this), "\n                      Flechas de Diamante Desbloqeada : ").concat(this.getFlechasDiamante(), "\n                      Flechas de Plata Desbloqeada: ").concat(this.getFlechasRubi(), "\n                      Flechas Ataque Llamado de lobo: ").concat(this.getLlamadoLobo(), "\n              "));
    };
    return ArqueroEvolucion;
}(arquero_1.Arquero));
exports.ArqueroEvolucion = ArqueroEvolucion;
