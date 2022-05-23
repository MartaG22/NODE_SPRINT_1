// Nivell 1 - Exercici 1

((a, b) => { console.log(`El resultat de la suma de ${a} i ${b} és ${a + b}`) })(2, 7);



// Nivell 2 - Exercici 1

const user = (nom, cognom) => [`${nom} ${cognom}`];
console.log(user("Bart", "Simpson"));



// Nivell 2 - Exercici 2

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



//Nivell 3 - Exercici 1

class ClasseAbstracta {
    constructor(texte) {
        this._texte = texte
    }

    display() {
        console.log("Funciona desde classeAbstracta. Texte: " + this._texte);
    }

    metodeError() {
        throw new Error("Has d'implementar el mètode metodeError!");
    }
}

class NovaClasse extends ClasseAbstracta {
    constructor(texte) {
        super(texte);
    }

    display() {
        console.log("Funciona desde l'extensió NovaClasse. Texte: " + this._texte);
    }

    metodeError() {
        console.log("Mètode implementat correctament!")
    }
}

let provem = new NovaClasse("Hello!");
provem.display();
provem.metodeError();