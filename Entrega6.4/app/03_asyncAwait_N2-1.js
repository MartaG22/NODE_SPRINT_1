// const doubleAfterTwoSeconds = (a) => {
//     let result = a * 2;
//     let message = `${a} * 2 = ${result}`
//     return new Promise(resolve => setTimeout(() => resolve(message), 2000))
// }

// async function asyncDoubleNumber(number1) {
//     try {
//         const result = await doubleAfterTwoSeconds(number1);
//         console.log(result)
//         // console.log((`${number1} * 2 = ${result}`));
//     } catch (error) {
//         console.log("Nivell 2 - Exercici 1A:  No s'ha pogut realitzar l'operació");
//     }
// }
// asyncDoubleNumber(parseInt(Math.random() * 100))


// module.exports = {
//     asyncDoubleNumber,
// };



const doubleAfterTwoSeconds = (a) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(a)) {
            let result = a * 2;
            let message = `${a} * 2 = ${result}`
            setTimeout(() => resolve(message), 2000);
        } else {
            reject(new Error);
        }
    })
};


async function asyncDoubleNumber(number1) {
    try {
        const result = await doubleAfterTwoSeconds(number1);
        console.log(result)
    } catch (error) {
        console.log("Nivell 2 - Exercici 1A:  No s'ha pogut realitzar l'operació");
    }
}
asyncDoubleNumber(parseInt(Math.random() * 100))


module.exports = {
    asyncDoubleNumber,
};





// Nivell 2
// - Exercici 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

// - Exercici 2
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
// La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
// Invoca el mètode dirNom des de fora de la classe.

class Persona {
    constructor(nom){
        this.nom = nom;
    }

    dirNom(){
        const saludo = `El meu nom es: ${this.nom}`;
        console.log(saludo);
        return saludo;    
    }
}

module.exports.Persona = Persona;

// Nivell 2 - Exercici 1 ---
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
//*Exercici  Corregit  ---  (26-5-22)

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
