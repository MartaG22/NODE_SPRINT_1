//! Entrega 1.4: Async / Await

// Nivell 1 - Exercici 1   // --- CORREGIT  //! REPASSAT 

/* Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
 usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.*/


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//* Exercici antic:
/*function getEmployee(position) {
    return new Promise(function (resolve, reject) {
        if (foundEmployee != -1) {
            const currentEmployee = employees[position].name;
            resolve(currentEmployee);
        } else {
            reject(new Error("No s'ha trobat el treballador amb aquest ID"));
        }
    });
}

function getSalary(position) {
    return new Promise(function (resolve, reject) {
        if (foundEmployee != -1) {
            const currentSalary = salaries[position].salary;
            resolve(currentSalary);
        } else {
            reject(new Error("No s'ha trobat el salari del treballador amb aquest ID"));
        }
    });
}

async function asyncFunction(position) {
    if (position != -1) {
        const currentEmployee = await getEmployee(position);
        const currentSalary = await getSalary(position);
        console.log(`L'empleat amb l'ID ${position} és ${currentEmployee}, i té ${currentSalary} € de salari`);
    } else {
        console.log(`No s'ha trobat el treballador amb aquest ID`);
    }
}

let getId = (parseInt(Math.random() * 5));
console.log("ID:", getId);
function foundEmployee(worker) {
    return worker.id === getId;
}
let positionEmployee = (employees.findIndex(foundEmployee));
asyncFunction(positionEmployee);   */

//*Exercici  Corregit  --------------     (29-5-22)     ----------------
// --------------------------------------------------------------------- //!Exercici  tornat a Corregir  (10-8-22)

// const getEmployee = (id) => {
//     return new Promise((resolve, reject) => {

//         let positionEmployee = (employees.findIndex(found => found.id === id));
//         console.log("posicion:", positionEmployee)
//         if (positionEmployee != -1) {
//             resolve(`L'empleat amb id ${id} s'ha trobat, ha estat ${employees[positionEmployee].name}!`);
//         } else {
//             reject(`No s'ha trobat el treballador amb l'ID ${id}`);
//         }
//     });
// }

// getEmployee(3)
//     .then(resolve => console.log(resolve))
//     .catch(error => console.log(error))

// const getSalary = (id) => {
//     return new Promise((resolve, reject) => {

//         let positionEmployee = (salaries.findIndex(found => found.id === id));
//         console.log("posicion:", positionEmployee)
//         if (positionEmployee != -1) {
//             resolve(`L'empleat amb id ${id} té  ${salaries[positionEmployee].salary} € de salari!`);
//         } else {
//             reject(`No s'ha trobat el treballador amb l'ID ${id}`);
//         }
//     });
// }

// getSalary(3)
//     .then(resolve => console.log(resolve))
//     .catch(error => console.log(error))


// async function asyncFunction(id) {
//     try {
//         const currentEmployee = await getEmployee(id);
//         const currentSalary = await getSalary(id);
//         console.log(`L'empleat amb l'ID ${position} és: ${currentEmployee}, i té ${currentSalary} € de salari`);
//     } catch (error) {
//         console.log(error);
//     }
// }



const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let empleatBuscat = employees.find(employee => employee.id == id)
        if (empleatBuscat) {
            resolve(empleatBuscat);
        } else {
            reject(new Error(`No s'ha trobat el treballador amb l'ID ${id}`));
        }
    });
};

const getSalary = (empleat) => {
    return new Promise((resolve, reject) => {
        let empleatBuscat = salaries.find(salario => salario.id === empleat.id);

        if (empleatBuscat) {
            resolve(empleatBuscat.salary);
        } else {
            reject(new Error(`No s'ha trobat salari.`));
        }
    });
};

async function asyncFunction(idEmpleat) {
    try {
        const currentEmployee = await getEmployee(idEmpleat);
        const currentSalary = await getSalary(currentEmployee);
        console.log(`L'empleat amb l'ID ${idEmpleat} és: ${currentEmployee.name}, i té ${currentSalary} € de salari`);
    } catch (Error) {
        console.log(Error.message);
    }
};

asyncFunction(3);




// Nivell 1 - Exercici 2   // -------- CORREGIT

/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
 que efectuï la seva funció resolve() després de 2 segons de la seva invocació.*/

//Exercici  Corregit  ------------     (29-5-22)  -------------  //! OKKK!! -- 2 PUNTOS (MAX)


const sumAfterTwoSeconds = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(a) || !isNaN(b)) {
            setTimeout(() => resolve(a + b), 2000);
        } else {
            reject(new Error);
        }
    });
};

async function asyncOperation(a, b) {
    try {
        const result = await sumAfterTwoSeconds(a, b);
        return console.log(`Resultat després de 2 segons: ${result}`);
    } catch (Error) {
        console.log("Nivell 1 - Exercici 2:  No s'ha pogut realitzar l'operació");
    }
}
asyncOperation(4, 5);




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




/* Crea una altra funció que rebi tres números i calculi la suma dels seus dobles
 usant la funció anterior.*/
//? - El N2 no fas el segon que es demana: la funció que rebi tres numeros y calculi la suma dels dobles.

// --------------------------------------------------------------------- //!Exercici  tornat a Corregir  (10-8-22)


// const doubleOfNumber = (a) => {
//     let result = 0;
//     result = a * 2;
//     return new Promise(resolve => setTimeout(() => resolve(result), 2000));
// };


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

//TODO cambiar la Promise con el reject a la función de abajo

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




// Nivell 3     //* --- CORREGIT
// /* Força i captura tants errors com puguis dels nivells 1 i 2.*/
// --------------------------------------------------------------------- //!Exercici  tornat a Corregir  (10-8-22)


/*asyncFunction(4);
asyncOperation("a", "b");
asyncDoubleNumber("a");
sumDoubleThreeNumbers("1"); */