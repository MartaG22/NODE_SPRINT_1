const Animal = require('./Animal.js');



const CrearAnimal = (tipoAnimal) => {

    const animal = Object.create(Animal.prototype);

    animal.altreAnimal = tipoAnimal || "no se sap";
    return animal;
}

module.exports = {CrearAnimal};