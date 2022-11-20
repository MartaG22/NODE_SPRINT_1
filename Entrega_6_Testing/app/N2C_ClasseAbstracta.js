//Nivell 3 - Exercici 1   
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

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

// aguila.desplaza();
// balena.desplaza();
// elefant.desplaza();

console.log(balena instanceof Animal);

module.exports = {Animal, CrearAnimal};