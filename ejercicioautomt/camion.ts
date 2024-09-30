export {Camion};

class Camion {
    //atributos o variables internas
  
    private capcarga: number;

    

    //constructor
    constructor(capcarga:number) {
        
        this.capcarga = capcarga;
        

    }


    //metodos: getters y setters
    getCapcarga(): number {
        return this.capcarga;
    }
    setCapcarga(nuevocapcarga: number ): void {
            this.capcarga = nuevocapcarga;
    }
         


  
}