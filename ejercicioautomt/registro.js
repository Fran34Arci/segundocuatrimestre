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
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (vehiculoEliminar) {
        var index = this.vehiculos.indexOf(vehiculoEliminar);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            console.log("Vehículo eliminado: " + vehiculoEliminar.getDatos());
        }
        else {
            console.log("Vehículo no encontrado");
        }
    };
    //atributos marca: string , modelo: string , patente:string, annio: string
    RegistroAutomotor.prototype.modificarVehiculo1 = function (marcacamb, modelocamb, patentecamb, anniocamb, patente1) {
        var index = this.vehiculos.findIndex(function (vehiculos) { return vehiculos.getPatente() === patente1; });
        console.log("Vehículo encontrado " + index);
        if (index !== -1) {
            this.vehiculos[index].setMarca(marcacamb);
            this.vehiculos[index].setModelo(modelocamb);
            this.vehiculos[index].setPatente(patentecamb);
            this.vehiculos[index].setAnnio(anniocamb);
            console.log("Vehículo fue modificado");
            this.vehiculos.forEach(function (vehiculo) { return console.log(vehiculo.getDatos()); });
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
    RegistroAutomotor.prototype.setvehiculos = function (vehiculos) {
        this.vehiculos = vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
