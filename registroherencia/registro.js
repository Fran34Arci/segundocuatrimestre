"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        //private vehiculo: Vehiculo;
        this.vehiculos = [];
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    RegistroAutomotor.prototype.agregarVehiculos1 = function (nuevoVehiculo) {
        if (nuevoVehiculo instanceof auto_1.Auto) {
            this.vehiculos.push(nuevoVehiculo);
            console.log("Veh\u00EDculo tipo Auto agregado:\n ".concat(nuevoVehiculo.getDatos(), " ").concat(nuevoVehiculo.getDatosAuto()));
        }
        else if (nuevoVehiculo instanceof moto_1.Moto) {
            // this.motos.push(nuevoVehiculo);
            this.vehiculos.push(nuevoVehiculo);
            console.log("Veh\u00EDculo tipo Moto agregado:\n ".concat(nuevoVehiculo.getDatos(), " ").concat(nuevoVehiculo.getDatosMoto()));
        }
        else if (nuevoVehiculo instanceof camion_1.Camion) {
            //  this.camiones.push(nuevoVehiculo);
            this.vehiculos.push(nuevoVehiculo);
            console.log("Veh\u00EDculo tipo Camion agregado:\n ".concat(nuevoVehiculo.getDatos(), " ").concat(nuevoVehiculo.getDatosCamion()));
        }
        else {
            console.log("No es un objeto Vehiculo");
        }
    };
    RegistroAutomotor.prototype.darDeBajaVehiculos1 = function (vehiculoEliminar) {
        if (vehiculoEliminar instanceof auto_1.Auto) {
            var index = this.vehiculos.indexOf(vehiculoEliminar);
            if (index !== -1) {
                this.vehiculos.splice(index, 1);
                console.log("Veh\u00EDculo tipo Auto eliminado: ".concat(vehiculoEliminar.getDatos(), " ").concat(vehiculoEliminar.getDatosAuto()));
            }
        }
        else if (vehiculoEliminar instanceof moto_1.Moto) {
            var index = this.vehiculos.indexOf(vehiculoEliminar);
            if (index !== -1) {
                this.vehiculos.splice(index, 1);
                console.log("Veh\u00EDculo tipo Moto eliminado: ".concat(vehiculoEliminar.getDatos(), " ").concat(vehiculoEliminar.getDatosMoto(), " "));
            }
        }
        else if (vehiculoEliminar instanceof camion_1.Camion) {
            var index = this.vehiculos.indexOf(vehiculoEliminar);
            if (index !== -1) {
                this.camiones.splice(index, 1);
                this.vehiculos.splice(index, 1);
                console.log("Veh\u00EDculo tipo Camion eliminado: ".concat(vehiculoEliminar.getDatos(), " ").concat(vehiculoEliminar.getDatosCamion(), " "));
            }
        }
        else {
            console.log("Vehículo no encontrado");
        }
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (marcaCamb, modeloCamb, patenteCamb, annioCamb, patente1) {
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
    RegistroAutomotor.prototype.modificarVehiculo1 = function (marcaCamb, modeloCamb, patenteCamb, annioCamb, tipoCamb, patente1, numPuertas, rodado, cilindrada, capCarga) {
        var index = this.vehiculos.findIndex(function (vehiculos) { return vehiculos.getPatente() === patente1; });
        var vehiculoAmodificar = this.vehiculos.find(function (vehiculos) { return vehiculos.getPatente() === patente1; });
        console.log("Veh\u00EDculo encontrado ".concat(index));
        if (index !== -1) {
            this.vehiculos[index].setMarca(marcaCamb);
            this.vehiculos[index].setModelo(modeloCamb);
            this.vehiculos[index].setPatente(patenteCamb);
            this.vehiculos[index].setAnnio(annioCamb);
            this.vehiculos[index].setTipo(tipoCamb);
            if (vehiculoAmodificar instanceof auto_1.Auto) {
                vehiculoAmodificar.setNumPuertas(numPuertas);
                console.log("Vehículo fue modificado");
                console.log("".concat(vehiculoAmodificar.getDatos(), " ").concat(vehiculoAmodificar.getDatosAuto()));
            }
            else if (vehiculoAmodificar instanceof moto_1.Moto) {
                vehiculoAmodificar.setRodado(rodado);
                vehiculoAmodificar.setCilindrada(cilindrada);
                console.log("Vehículo fue modificado");
                console.log("".concat(vehiculoAmodificar.getDatos(), " ").concat(vehiculoAmodificar.getDatosMoto()));
            }
            else if (vehiculoAmodificar instanceof camion_1.Camion) {
                vehiculoAmodificar.setCapCarga(capCarga);
                console.log("Vehículo fue modificado");
                console.log("".concat(vehiculoAmodificar.getDatos(), " ").concat(vehiculoAmodificar.getDatosCamion()));
            }
        }
        else {
            console.log("Vehículo no encontrado");
        }
    };
    RegistroAutomotor.prototype.imprimirListaVehiculos1 = function () {
        console.log("Lista de vehículos: ");
        this.vehiculos.forEach(function (vehiculo) {
            if (vehiculo instanceof auto_1.Auto) {
                console.log("".concat(vehiculo.getDatos(), " ").concat(vehiculo.getDatosAuto()));
            }
            else if (vehiculo instanceof moto_1.Moto) {
                console.log("".concat(vehiculo.getDatos(), " ").concat(vehiculo.getDatosMoto()));
            }
            else if (vehiculo instanceof camion_1.Camion) {
                console.log("".concat(vehiculo.getDatos(), " ").concat(vehiculo.getDatosCamion()));
            }
        });
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
