"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var vehiculo_1 = require("./vehiculo");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        //private vehiculo: Vehiculo;
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (nuevoVehiculo) {
        if (nuevoVehiculo instanceof vehiculo_1.Vehiculo) {
            this.vehiculos.push(nuevoVehiculo);
            console.log("Veh\u00EDculo agregado: ".concat(nuevoVehiculo.getDatos()));
        }
        else {
            console.log("No es un objeto Vehiculo");
        }
    };
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (vehiculoEliminar) {
        var index = this.vehiculos.indexOf(vehiculoEliminar);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            console.log("Veh\u00EDculo eliminado: ".concat(vehiculoEliminar.getDatos()));
        }
        else {
            console.log("Vehículo no encontrado");
        }
    };
    RegistroAutomotor.prototype.modificarVehiculo1 = function (marcaCamb, modeloCamb, patenteCamb, annioCamb, patente1) {
        var index = this.vehiculos.findIndex(function (vehiculos) { return vehiculos.getPatente() === patente1; });
        console.log("Veh\u00EDculo encontrado ".concat(index));
        if (index !== -1) {
            this.vehiculos[index].setMarca(marcaCamb);
            this.vehiculos[index].setModelo(modeloCamb);
            this.vehiculos[index].setPatente(patenteCamb);
            this.vehiculos[index].setAnnio(annioCamb);
            console.log("Vehículo fue modificado");
            this.vehiculos.forEach(function (vehiculo) { return console.log("".concat(vehiculo.getDatos())); });
        }
        else {
            console.log("Vehículo no encontrado");
        }
    };
    RegistroAutomotor.prototype.imprimirListaVehiculos = function () {
        console.log("Lista de vehículos: ");
        this.vehiculos.forEach(function (vehiculo) { return console.log("".concat(vehiculo.getDatos())); });
    };
    RegistroAutomotor.prototype.getvehiculos = function () {
        return this.vehiculos;
    };
    RegistroAutomotor.prototype.setvehiculos = function (vehiculos) {
        this.vehiculos = vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
