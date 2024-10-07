
export {SoporteMoto};
import {Vehiculo} from './vehiculo';

    class SoporteMoto extends Vehiculo {
       
        protected cliente: string;

       
   
        constructor(marca: string, modelo: string, patente:string, annio: string, cliente: string, Moto:string ) {
            super(marca, modelo, patente, annio,Moto);
            this.cliente = cliente;
        }


        public agregarVehiculo(nuevoVehiculo: Vehiculo) {
            if (nuevoVehiculo instanceof Vehiculo) {
              this.vehiculos.push(nuevoVehiculo);
              console.log( `Vehículo agregado: ${nuevoVehiculo.getDatos()}`);
            } else {
              console.log("No es un objeto Vehiculo");
            }
        }

        public darDeBajaVehiculo(vehiculoEliminar: Vehiculo) {
            const index = this.vehiculos.indexOf(vehiculoEliminar);
            if (index !== -1) {
              this.vehiculos.splice(index, 1);
              console.log(`Vehículo eliminado: ${vehiculoEliminar.getDatos()}`);
            } else {
              console.log("Vehículo no encontrado");
            }
          }
            
          public modificarVehiculo1(marcaCamb,modeloCamb,patenteCamb,annioCamb,patente1) {
            const index = this.vehiculos.findIndex((vehiculos) => vehiculos.getPatente() === patente1);
            console.log(`Vehículo encontrado ${index}`);

            if (index !== -1) {
              this.vehiculos[index].setMarca(marcaCamb);
              this.vehiculos[index].setModelo(modeloCamb);
              this.vehiculos[index].setPatente(patenteCamb);
              this.vehiculos[index].setAnnio(annioCamb);

              console.log("Vehículo fue modificado" );
              this.vehiculos.forEach((vehiculo) => console.log(`${vehiculo.getDatos()}`));
            } else {
              console.log("Vehículo no encontrado");
            }
          }






    }