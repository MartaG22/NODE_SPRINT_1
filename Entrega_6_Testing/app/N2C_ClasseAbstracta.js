//!Nivell 3 - Exercici 1   
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class Animal {
    constructor(altreAnimal) {
        if (this.constructor === Animal) {
            return Error(" No es pot cridar una clase abstracta");
        }
        this.altreAnimal = altreAnimal;
    }

    desplaza() {
        return(`Aquest animal és ${this.altreAnimal}`);
    }

};
// Funcio creadora d'objectes
const crearAnimal = (tipoAnimal) => {
    return Animal.altreAnimal(tipoAnimal);
};


module.exports.Animal = Animal;
module.exports.crearAnimal = crearAnimal;