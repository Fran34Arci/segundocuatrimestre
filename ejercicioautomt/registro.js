"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var vehiculo_1 = require("./vehiculo");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        //private vehiculo: Vehiculo;
        this.vehiculos = [];
    }
    // constructor(vehiculo: Vehiculo) {
    //   this.vehiculo = vehiculo;
    //}
    RegistroAutomotor.prototype.agregarVehiculo = function (nuevoVehiculo) {
        if (nuevoVehiculo instanceof vehiculo_1.Vehiculo) {
            this.vehiculos.push(nuevoVehiculo);
            console.log("Vehículo agregado: " + nuevoVehiculo.getDatos());
        }
        else {
            console.log("No es un objeto Vehiculo");
        }
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (vehiculoEliminar) {
        var index = this.vehiculos.indexOf(vehiculoEliminar);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            console.log("Vehículo eliminado: " + vehiculoEliminar.getDatos());
        }
        else {
            console.log("Vehículo no encontrado");
        }
    };
    RegistroAutomotor.prototype.imprimirListaVehiculos = function () {
        console.log("Lista de vehículos: ");
        this.vehiculos.forEach(function (vehiculo) { return console.log(vehiculo.getDatos()); });
    };
    RegistroAutomotor.prototype.getvehiculos = function () {
        return this.vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
