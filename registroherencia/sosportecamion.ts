export {SoporteCamion};
import {RegistroAutomotor} from './registro';

    class SoporteCamion extends RegistroAutomotor {
       
        protected clienteCamion: string;
        protected tallerCamion: String;
       
   
        constructor(tallerCamion: string,clienteCamion: string) {
            super();
            this.tallerCamion = tallerCamion;
            this.clienteCamion = clienteCamion;
        }

       
          }