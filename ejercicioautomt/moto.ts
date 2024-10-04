export {Moto};

class Moto {
    //atributos o variables internas
   
    private rodado: number;
    private cilindrada: number;
   
    //constructor
    constructor(cilindrada:number, rodado: number) {
        
        this.rodado= rodado;
        this.cilindrada= cilindrada;
  
    }

    //metodos: getters y setters
    getRodado(): number{
        return this.rodado;
    }
    setRodado(nuevoRodado: number ): void {
            this.rodado= nuevoRodado;
    }
         
    getCilindrada(): number{
        return this.cilindrada;
    }
    setCilindrada(nuevoCilindrada: number ): void {
            this.cilindrada= nuevoCilindrada;
    }

   

    }
 