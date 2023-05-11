import { Comercial } from './comercial';
import { residencial } from './residencial';
import { IPersona } from "./IPersonas";
import { Hombre } from "./hombre";
import { Construcción } from './construcción';
import { Mujer } from './mujer';
const hombre1: IPersona = new Hombre( 'Juan', 'Rodriguez' );
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juan Jose ');
hombre3.edad = 18;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre(undefined, 'Pepe ');
hombre4.edad = 18;
hombre4.nombre_completo();

const mujer: IPersona = new Mujer('Maria', 'Rodriguez');


const Residencial = new residencial (6, '');
console.log('Impuestos del residencial:', Residencial.impuestos() );
Residencial.agregar_habitante(hombre1);
Residencial.agregar_habitante(hombre2);
Residencial.agregar_habitante(hombre3);
const comercial = new Comercial (3, 25);
console.log('Impuestos del comercial:',comercial.impuestos());
console.log(`La constructora bienes y raíces hizo ${Construcción.edificios_contador()} construcciones.`)

