
export abstract class Construcción {
    
    public static cantidad_de_edificios: number= 0;
    // INICIALIZAR DIRECTAMENTE EN EL CONSTRUCTOR PARA ASI RECIBIRLO COMO PARÁMETRO.
    // Las propiedades estáticas pertenecen a la clase.Por ende se llaman con ella.
    constructor(private _pisos:number){ 
        Construcción.cantidad_de_edificios += 1;
    }

    public impuestos(): number{
        return this._pisos*300000;
    }
    // El get y el set crean propiedades y le dan nivel de accesibilidad
    // a los elementos que están por fuera.
    get pisos(): number{
        return this._pisos;
    }
    set pisos(pisos:number) {
        this._pisos = pisos;
    }
    public static edificios_contador(): number{
        return Construcción.cantidad_de_edificios;
    }
}