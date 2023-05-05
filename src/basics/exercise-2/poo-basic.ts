class Auto {
    
    // Atributos de la clase o propiedades.
    color: string = 'Negro'; // Inicializar directamente.
    puertas: number;        // Inicializar el constructor.
    marca?: string;         // Marcar como opcionales
    // Primer método que se ejecuta en una instancia de la clase.
    // Usado para inicializar propiedades de una clase.
    constructor(marca?: string) {
        this.puertas = 4;      // Con this, accedo a todas las propiedades y métodos de la clase.
        this.marca = marca;

    }
    // Métodos de la clase.
    acelerar(){
        console.log('Acelerando');
    }
    frenar(){
        console.log('Frenando');
    }
    prender(){
        console.log('Prendiendo');
    }
}
let Ferrari: Auto = new Auto(); // Instancia de la clase Auto - Objeto.
console.log(Ferrari);
Ferrari.marca = 'Ferrari';
console.log(Ferrari);
let lambo = new Auto(); 
console.log(lambo);
lambo.color = 'Exótico';
lambo.marca = 'Lamborghini';
lambo.puertas = 2;
console.log(lambo);

class Auto2 {

    color: string = 'Negro'; // Implícita Por defecto es publico.
    public puertas:  number; // Forma Explícita para colocar una propiedad publica.
    
    // En el constructor yo puedo crear propiedades de la clase
    // Si y solo si tienen el modificador de acceso (public, private, protected)

    // Los parámetros que son opcionales, siempre deben ir al final de cualquier método o función
    // En este caso el constructor es un método.
    constructor(public peso: number, public marca?: string){
        this.puertas = 4;
        this.encender();
        
    }
    apagar() {
        console.log('Apagando');
    }
    private encender() {
        console.log(` Bienvenido ${this.marca}, tu color es: ${this.color}, tu peso es: ${this.peso} y tienes ${this.puertas} puertas.`);
    }
}

let ford = new Auto2(500, 'Ford');
console.log(ford);
ford.apagar();