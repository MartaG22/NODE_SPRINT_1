//! Entrega 1.4: Async / Await

// Nivell 1 - Exercici 1   // --- CORREGIT  //! REPASAR -- 1.5 PUNTOS (DE 3)

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

//*Exercici  Corregit  ------------------     (29-5-22)     --------------------

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        let positionEmployee = (employees.findIndex(found => found.id === id));
        console.log("posicion:", positionEmployee)
        if (positionEmployee != -1) {
            resolve(`L'empleat amb id ${id} s'ha trobat, ha estat ${employees[positionEmployee].name}!`);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getEmployee(3)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))

const getSalary = (id) => {
    return new Promise((resolve, reject) => {

        let positionEmployee = (salaries.findIndex(found => found.id === id));
        console.log("posicion:", positionEmployee)
        if (positionEmployee != -1) {
            resolve(`L'empleat amb id ${id} té  ${salaries[positionEmployee].salary} € de salari!`);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getSalary(3)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))


async function asyncFunction(id) {
    try {
        const currentEmployee = await getEmployee(id);
        const currentSalary = await getSalary(id);
        console.log(`L'empleat amb l'ID ${position} és: ${currentEmployee}, i té ${currentSalary} € de salari`);
    } catch (error) {
        console.log(error);
    }
}


// Nivell 1 - Exercici 2   // --- CORREGIT    


/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
 que efectuï la seva funció resolve() després de 2 segons de la seva invocació.*/

//*Exercici antic:
/* const sumAfterTwoSeconds = (a, b) => {
    return new Promise(resolve => setTimeout(() => resolve(a + b), 2000))
}
async function asyncOperation() {
    const result = sumAfterTwoSeconds(4, 5);
    return (result);
}
asyncOperation().then(total => console.log('Promise:', total));  */


//Exercici  Corregit  ------------     (29-5-22)  -------------  //! OKKK!! -- 2 PUNTOS (MAX)

const sumAfterTwoSeconds = (a, b) => {
    return new Promise(resolve => setTimeout(() => resolve(a + b), 2000));
}

async function asyncOperation(a, b) {
    try {
        const result = await sumAfterTwoSeconds(a, b);
        return console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncOperation(4, 5);



// Nivell 2 - Exercici 1   //* --- CORREGIT

/* Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons.
 Crea una altra funció que rebi tres números i calculi la suma dels seus dobles usant la funció anterior.*/


//Exercici  Corregit  -------------     (29-5-22)     -------------  //! REPASAR -- 1.5 PUNTOS (DE 2)


const doubleAfterTwoSeconds = (a) => {
    let result = a * 2;
    let message = `${a} * 2 = ${result}`
    return new Promise(resolve => setTimeout(() => resolve(message), 2000))
}

async function asyncDoubleNumber(number1) {
    try {
        const result = await doubleAfterTwoSeconds(number1);
        console.log(result)
        // console.log((`${number1} * 2 = ${result}`));
    } catch (error) {
        console.log("Nivell 2 - Exercici 1A:  No s'ha pogut realitzar l'operació");
    }
}
asyncDoubleNumber(parseInt(Math.random() * 100))



// Nivell 3     //* --- CORREGIT
// Aquest és l'exercici que no em funcionava bé.
// Era perquè el nom de la funció asíncrona era el mateix que la funció de l'exercici anterior.

//*Exercici  Corregit  ------------------     (29-5-22)     --------------------

const sumThreeNumbers = (b) => {
    let doubleNumber;
    let sumOfNumbers = 0;
    let message = "La suma del doble dels nombres ";
    for (let j = 0; j < 3; j++) {
        doubleNumber = b[j] * 2;
        sumOfNumbers += doubleNumber;
        message += `${b[j]} `;
    }
    let result = `${message} és: ${sumOfNumbers}`
    return new Promise(resolve => setTimeout(() => resolve(result), 2000));
}

async function asyncSumNumbers(b) {
    try {
        const result = await sumThreeNumbers(b);
        console.log(result);
    } catch (error) {
        console.log("Nivell 2 - Exercici 1B: No s'ha pogut realitzar l'operació");
    }
}

(function threeNumbers() {
    const b = [];
    for (let i = 0; i < 3; i++) {
        let number1 = parseInt(Math.random() * 20);
        b.push(number1);
    }
    console.log("arrayNumbers =", b);
    asyncSumNumbers(b)
})()


// Nivell 3 - Exercici 1
/* Força i captura tants errors com puguis dels nivells 1 i 2.*/

