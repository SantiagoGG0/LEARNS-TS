// Interface: me sirve para generar la estructura de un objeto o definir un contrato para una clase.

enum Rol {
    Junior,
    Middle,
    Senior
}

enum TipoContrato {
    Indefinido,
    TerminoFijo,
    PrestaciónServicios,
}

// Definir un contrato para una clase.
// Es una buena practica poner I mayúscula antes del nombre de una interfaz.
interface IContrato {
    // Propiedades opcionales - No es obligatorio que quien implemente
    // escriba estas propiedades.
    salario?: number;
    fechaInicio?: Date;

    // Propiedades obligatorias - Deben escribirse en la implementación.
    rol: Rol;

    // Solo se crea la firma de los métodos, quien implemente debe definir 
    // su funcionalidad.
    // Métodos opcionales. 
    cancelar?(): void;

    // Métodos obligatorios.
    pagar(): number;
    suspender(  cantidad:number ):  void;


}

// Para usar una interface tenemos la palabra reservada implements
// Y la interfaz que queremos usar.
class ContratoUltraCredit implements IContrato {
    // Atributos que debo tener de la interface ContratoJunior.
    public salario?: number;
    fechaInicio?: Date;
    rol: Rol;
    // Atributos propios.
     tipoContrato: TipoContrato;
    constructor(){
        this.tipoContrato = TipoContrato.Indefinido;
        this.rol = Rol.Junior;
    }
    pagar(): number {
        return 100000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} días.`);
        console.log('Información del contrato.');

        // Operador nullish coalescing. (??) - Valida que la expresión de la izquierda.
        // Sea diferente de null o undefined. Si es null o undefined devolverá la expresión de la derecha.
        // de lo contrario retorna el valor de la expresión de la izquierda.
        console.log(`Tu salario es: ${this.salario ?? 1000}`);

        // Validando null, undefined, 0, false, '', NaN.
        console.log(`Tu salario es: ${this.salario ? this.salario: 1000}`);
    }

}

class ContratoGlobal implements IContrato {
    salario?: number;
    fechaInicio?: Date;
    rol: Rol;

    constructor() {
        this.rol = Rol.Middle;
    }

    cancelar?(): void {
        console.log('Contrato cancelado.');
    }

    pagar(): number {
        return 2000000;
    }

    suspender(cantidad: number): void {
       console.log(`Estas suspendido por: ${cantidad} meses`)
    }

}

// Son dos objetos de diferentes clases (Implementaciones) pero de la misma interface.
// Polimorfismo por Interface.
const contratoJuan: IContrato = new ContratoGlobal();
const contratoJuana: IContrato = new ContratoUltraCredit();

const listaContratos = [contratoJuan, contratoJuana];

listaContratos.forEach((contrato: IContrato) => {
    console.log('=====================')
    contrato.suspender(3);
    console.log ()
    console.log('====================')

    if(contrato instanceof ContratoUltraCredit){
        console.log(contrato.tipoContrato);
        // Instance of nos dice el tipo de clase que estamos usando.(Instancia.)
    } else if (contrato instanceof ContratoGlobal){
        // '!' significa que estamos seguros de que existe.
    contrato.cancelar!();
    }
    console.log('============')
});

