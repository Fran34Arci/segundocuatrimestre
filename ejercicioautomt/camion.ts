export {Camion};

class Camion {
    //atributos o variables internas
  
    private capCarga: number;
    
    //constructor
    constructor(capCarga:number) {
        
        this.capCarga = capCarga;
        
    }

    //metodos: getters y setters
    getCapcarga(): number {
        return this.capCarga;
    }
    setCapcarga(nuevoCapCarga: number ): void {
            this.capCarga = nuevoCapCarga;
    }
     
}