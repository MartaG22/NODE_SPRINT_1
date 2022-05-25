// Nivell 1 - Exercici 1  --- //! REVISAR!!! NO FUNCIONA
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

// ((a, b) => { console.log(`El resultat de la suma de ${a} i ${b} és ${a + b}`) })(2, 7);   //*Exercici antic

let arrowFunction = ((a, b) => {
    return a + b;
})(3, 4);
console.log(arrowFunction);

console.log(((a, b) => a + b)(3, 4));

// Nivell 2 - Exercici 1 --- 
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const user = (name, surname) => ({ nom: name, cognom: surname });
console.log(user("Bart", "Simpson"));



// Nivell 2 - Exercici 2  --- OKKK
/*Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.*/

class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        return console.log(this.nom);
    }
}
const nuevaPersona = new Persona("Ulises");
nuevaPersona.dirNom();



//Nivell 3 - Exercici 1   ---  //*Exercici antic
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

// class ClasseAbstracta {
//     constructor(texte) {
//         this._texte = texte
//     }
//     display() {
//         console.log("Funciona desde classeAbstracta. Texte: " + this._texte);
//     }
//     metodeError() {
//         throw new Error("Has d'implementar el mètode metodeError!");
//     }
// }
// class NovaClasse extends ClasseAbstracta {
//     constructor(texte) {
//         super(texte);
//     }
//     display() {
//         // throw new Error("Un mètode abstracte no es pot cridar");
//         console.log("Funciona desde l'extensió NovaClasse. Texte: " + this._texte);
//     }
//     metodeError() {
//         console.log("Mètode implementat correctament!")
//     }
// }
// let provem = new NovaClasse("Hello!");
// provem.display();
// provem.metodeError();



//Exercici  Corregit  ---  (26-5-22)

class Animal {
    constructor(altreAnimal) {
        if (this.constructor === Animal) {
            throw new Error(" No es pot cridar una clase abstracta");
        }
        this.altreAnimal = altreAnimal;
    }

    display() {
        throw new Error("Abstract Method has no implementation");
    }

    desplaza() {
        console.log(`Aquest animal és ${this.altreAnimal}`);
    }

};
// Funcio creadora d'objectes
const CrearAnimal = (tipoAnimal) => {
    const animal = Object.create(Animal.prototype);

    animal.altreAnimal = tipoAnimal || "no se sap";
    return animal;
};

// Invocant funció amb diferents definicions
let aguila = CrearAnimal("aèri");
let balena = CrearAnimal("acuàtic");
let elefant = CrearAnimal("terrestre");

aguila.desplaza();
balena.desplaza();
elefant.desplaza();

console.log(balena instanceof Animal);


