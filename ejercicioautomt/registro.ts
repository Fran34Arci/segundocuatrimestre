// Clase RegistroAutomotor
export {RegistroAutomotor};
import {Vehiculo} from './vehiculo';

        class RegistroAutomotor {

            //private vehiculo: Vehiculo;

              private vehiculos: Vehiculo[] = [];

              marcaCamb: string;
              modeloCamb: string;
              patenteCamb:string; 
              annioCamb: string;
              patenteAux :string;

                constructor() {}
                    
            agregarVehiculo(nuevoVehiculo: Vehiculo) {
                if (nuevoVehiculo instanceof Vehiculo) {
                  this.vehiculos.push(nuevoVehiculo);
                  console.log( "Vehículo agregado:" + nuevoVehiculo.getDatos());
                } else {
                  console.log("No es un objeto Vehiculo");
                }
            }

            darDeBajaVehiculo(vehiculoEliminar: Vehiculo) {
                const index = this.vehiculos.indexOf(vehiculoEliminar);
                if (index !== -1) {
                  this.vehiculos.splice(index, 1);
                  console.log("Vehículo eliminado: " + vehiculoEliminar.getDatos());
                } else {
                  console.log("Vehículo no encontrado");
                }
              }
                
              modificarVehiculo1(marcaCamb,modeloCamb,patenteCamb,annioCamb,patente1) {
                const index = this.vehiculos.findIndex((vehiculos) => vehiculos.getPatente() === patente1);
                console.log("Vehículo encontrado " + index);

                if (index !== -1) {
                  this.vehiculos[index].setMarca(marcaCamb);
                  this.vehiculos[index].setModelo(modeloCamb);
                  this.vehiculos[index].setPatente(patenteCamb);
                  this.vehiculos[index].setAnnio(annioCamb);

                  console.log("Vehículo fue modificado" );
                  this.vehiculos.forEach((vehiculo) => console.log(vehiculo.getDatos()));
                } else {
                  console.log("Vehículo no encontrado");
                }
              }

              imprimirListaVehiculos() {
                console.log("Lista de vehículos: ");
                this.vehiculos.forEach((vehiculo) => console.log(vehiculo.getDatos()));
              }
    
            getvehiculos(): Vehiculo[] {
              return this.vehiculos;
               }
               setvehiculos(vehiculos: Vehiculo[]) {
                this.vehiculos = vehiculos;
              }
          
          }
      

  
    
    