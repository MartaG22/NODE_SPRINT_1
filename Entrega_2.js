// Nivell 1 - Exercici 1  --- //!REVISAR
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

// ((a, b) => { console.log(`El resultat de la suma de ${a} i ${b} és ${a + b}`) })(2, 7);

console.log(((a, b) => a + b)(3 + 4)); //BUENO!!

// Nivell 2 - Exercici 1 ---  //!REVISAR
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const user = (nom, cognom) => [`${nom} ${cognom}`];
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



//Nivell 3 - Exercici 1   ---  //!REVISAR
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

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



//Corregido: ACABARLO
class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }
    display() {
        console.log("Aquest és un animal" + this.tipo);
    }
    metodeError() {
        throw new Error("No funciona")
    }
}
class Loro extends Animal {
    constructor(tipo) {
        super(tipo);
    }
    display() {
        console.log(`L'animal és un ocell`)
    }
    metodeError() {
        console.log()
    }
}

// function crearObjecte(cosa) {

// }
// let gat = crearObjecte("gat");
// let gos = crearObjecte("gos");