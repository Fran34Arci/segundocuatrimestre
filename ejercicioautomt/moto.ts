export {Moto};

class Moto {
    //atributos o variables internas
   
    protected rodado: number;
    protected cilindrada: number;
   
    //constructor
    constructor(cilindrada:number, rodado: number) {
        
        this.rodado= rodado;
        this.cilindrada= cilindrada;
  
    }

    //metodos: getters y setters
    public getRodado(): number{
        return this.rodado;
    }
    public setRodado(nuevoRodado: number ): void {
            this.rodado= nuevoRodado;
    }
         
    public getCilindrada(): number{
        return this.cilindrada;
    }
    public setCilindrada(nuevoCilindrada: number ): void {
            this.cilindrada= nuevoCilindrada;
    }
    
    public getDatosMoto() {
        return(
         `Nº Cilindrada: ${this.getCilindrada()}
          Nº Rodado: ${this.getRodado()}
         `
        )
    }
   
    }
 