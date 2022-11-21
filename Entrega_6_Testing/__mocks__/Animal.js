class Animal{
    constructor(altreAnimal) {
        if (this.constructor === Animal) {
            throw new Error(" No es pot cridar una clase abstracta");
        }
        this.altreAnimal = altreAnimal;
    };

    display() {
        throw new Error("Abstract Method has no implementation");
    };

    desplaza() {
        console.log(`Aquest animal és ${this.altreAnimal}`);
    };

}


module.exports = {Animal}