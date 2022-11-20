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

    // constructor(marca){
    //     if(this.constructor === Cotxe){
    //         throw new Error("No es pot crear una clase abstracta");
    //     };
    //     this.model = marca;
    // }
    // getmodel() {
    //     throw new Error("No es pot accedir al metode d'una clase abstracta directament");
    //     }
}


module.exports = {Animal}