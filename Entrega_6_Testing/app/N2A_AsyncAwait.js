//!  NIVELL 2
// Verifica mitjançant tests l'execució de l'exercici Async/Await N2 E1 utilitzant Jest Fake Timers.
// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
// Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.


//! exercici Async/Await N2 E1
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.



// Nivell 2 - Exercici 1   //* --- CORREGIT
/* Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons. */

//Exercici  Corregit  -------------     (29-5-22)     -------------  //! REPASSAT!!!


// const doubleAfterTwoSeconds = (a) => {
//     let result = a * 2;
//     let message = `${a} * 2 = ${result}`
//     return new Promise(resolve => setTimeout(() => resolve(message), 2000))
// }

const doubleAfterTwoSeconds = (a) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(a)) {
            let result = a * 2;
            let message = `${a} * 2 = ${result}`
            setTimeout(() => {resolve(message)}, 2000);

        } else {
            reject("S'ha d'introduir un nombre!");
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
// asyncDoubleNumber(parseInt(Math.random() * 100))



// --------------------------------------------------------------------- //!Exercici  tornat a Corregir  (10-8-22)

/* Crea una altra funció que rebi tres números i calculi la suma dels seus dobles
 usant la funció anterior.*/

/*
const doubleOfNumber = (a) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(a)) {
            let result = 0;
            result = a * 2;
            setTimeout(() => resolve(result), 2000);
        } else {
            reject(new Error("Nivell 2 - Exercici 1B:  No s'ha pogut realitzar l'operació"));
        }
    })
};


async function sumDoubleThreeNumbers(num1, num2, num3) {
    try {
        new Promise(resolve => setTimeout(() => resolve(console.log(`Els nombres escollits són:  ${num1}, ${num2}, ${num3}`)), 2000));
        let doubleNumber1 = await doubleOfNumber(num1);
        let doubleNumber2 = await doubleOfNumber(num2);
        let doubleNumber3 = await doubleOfNumber(num3);
        console.log(`Els dobles dels nombres anteriors són:  ${doubleNumber1}  ${doubleNumber2}  ${doubleNumber3}`);
        let sumDoubleNumbers = doubleNumber1 + doubleNumber2 + doubleNumber3;
        console.log(`El resultat de sumar el doble dels nombres és: ${sumDoubleNumbers}`);
    } catch (Error) {
        console.log(Error.message);
    };
};


async function sumDoubleThreeNumbers(num1, num2, num3) {
    try {
        new Promise(resolve => setTimeout(() => resolve(console.log(`Els nombres escollits són:  ${num1}, ${num2}, ${num3}`)), 2000));
        let doubleNumber1 = await doubleOfNumber(num1);
        let doubleNumber2 = await doubleOfNumber(num2);
        let doubleNumber3 = await doubleOfNumber(num3);
        console.log(`Els dobles dels nombres anteriors són:  ${doubleNumber1}  ${doubleNumber2}  ${doubleNumber3}`);
        let sumDoubleNumbers = doubleNumber1 + doubleNumber2 + doubleNumber3;
        console.log(`El resultat de sumar el doble dels nombres és: ${sumDoubleNumbers}`);
    } catch (Error) {
        console.log(Error);
    }
}


(function getThreeNumbers() {
    let number1 = parseInt(Math.random() * 20);
    let number2 = parseInt(Math.random() * 20);
    let number3 = parseInt(Math.random() * 20);
    sumDoubleThreeNumbers(number1, number2, number3);
})();

*/

    module.exports = {doubleAfterTwoSeconds, asyncDoubleNumber}