export {Camion};

class Camion {
    //atributos o variables internas
  
    protected capCarga: number;
    
    //constructor
    constructor(capCarga:number) {
                this.capCarga = capCarga;
       
    }

    //metodos: getters y setters
    public getCapCarga(): number {
        return this.capCarga;
    }
    public setCapCarga(nuevoCapCarga: number ): void {
            this.capCarga = nuevoCapCarga;
    }
     
    public getDatosCamion() {
        return(
         `Nº Carga: ${this.getCapCarga()}`
        )
    }
}