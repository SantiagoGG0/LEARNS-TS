import { IPersona } from "./IPersonas";
import { Construcción } from "./construcción";
import { Hombre } from "./hombre";
import { Mujer } from "./mujer";
// Cuando se pide inicializar los atributos a sus valores por defecto, nos referimos a lo siguiente:
// Los String se inicializan a cadena vacía ""
// los int a cero 0
// y los boolean a false
export class residencial extends Construcción {
    private _habitantes: Array<IPersona>;
    // SIEMPRE debo inicializar las propiedades de las clases.
    constructor (pisos:number, habitantes:''){
        super(pisos);
        this._habitantes = [];
    };

    public override impuestos(): number{
        return  this.pisos * 1500000 
    }
    public numero_habitantes(): number{
        return this._habitantes.length
    }
    public agregar_habitante(persona:IPersona): void{
        this._habitantes.push(persona);
    }
    public listar_habitantes(){
        this._habitantes.forEach((persona) => {
            console.log(persona.nombre_completo());
            if (persona instanceof Hombre){
                persona.hablar_futbol('Man city', 4);
            }
            else if (persona instanceof Mujer){
                persona.ir_cine(4, 'Guardianes de la galaxia 3');
            }
        });
        
    }
    
}