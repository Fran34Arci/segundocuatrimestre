// Clase RegistroAutomotor
export {RegistroAutomotor};
import {Vehiculo} from './vehiculo';

        class RegistroAutomotor {

            //private vehiculo: Vehiculo;

              private vehiculos: Vehiculo[] = [];

              private marcaCamb: string;
              private modeloCamb: string;
              private patenteCamb:string; 
              private annioCamb: string;
              private patenteAux :string;

                constructor() {}
                    
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

              public imprimirListaVehiculos() {
                console.log("Lista de vehículos: ");
                this.vehiculos.forEach((vehiculo) => console.log(`${vehiculo.getDatos()}`));
              }
    
              public getvehiculos(): Vehiculo[] {
              return this.vehiculos;
               }
               public setvehiculos(vehiculos: Vehiculo[]) {
                this.vehiculos = vehiculos;
              }
          
              
          }
      

  
    
    