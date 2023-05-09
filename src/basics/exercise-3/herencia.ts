class Animal {

    color!: string;
    especie!: string;
    peso!: number;
    tamaño!: string;

    constructor(){
        console.log('Creando un animal')
    }

    alimentarse(): void{
        console.log('Alimentándome');        
    }
    
}
class Acuático extends Animal{

}
// La herencia se da gracias a la palabra reservada extends.
class Gato extends Animal {
    constructor(){
        super();
        console.log('Creando un gato a partir del animal');
        
    }
}
class Pato extends Acuático{
    nadar (){
        console.log('Nadando');
    }
}
class Perro extends Animal{
    constructor(){
        super();
        console.log('Creando un perro a partir de animal')
    }
}

// Solo Puedo heredar de una sola clase.

const cualquierAnimal: Animal = new Animal();

const perrito = new Perro();

const patoNuevo = new Pato();

const animales = [cualquierAnimal, perrito, patoNuevo];
