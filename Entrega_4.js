// Nivell 1 - Exercici 1

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


function getEmployee(position) {
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
asyncFunction(positionEmployee);




// Nivell 1 - Exercici 2

/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
 que efectuï la seva funció resolve() després de 2 segons de la seva invocació.*/

const sumAfterTwoSeconds = (a, b) => {
    return new Promise(resolve => setTimeout(() => resolve(a + b), 2000))
}

async function asyncOperation() {
    const result = sumAfterTwoSeconds(4, 5);
    return (result);
}

asyncOperation().then(total => console.log('Promise:', total));



// Nivell 2 - Exercici 1

/* Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons.
 Crea una altra funció que rebi tres números i calculi la suma dels seus dobles usant la funció anterior.*/

/* Aquest exercici em funciona si comento la resta d'exercicis, però si estan tots sense comentar no em funciona.*/

const doubleAfterTwoSeconds = (a) => {
    return new Promise(resolve => setTimeout(() => resolve(a * 2), 2000))
}

async function asyncOperation() {
    let number1 = parseInt(Math.random() * 100);
    console.log("number1 =", number1);
    const result = doubleAfterTwoSeconds(number1);
    return (result);
}

asyncOperation().then(total => console.log('El doble és', total));



/* Aquest exercici em funciona si comento la resta d'exercicis, però si estan tots sense comentar no em funciona.*/

const sumThreeNumbers = (b) => {
    let doubleNumber;
    let sumOfNumbers = 0;
    for (let j = 0; j < 3; j++) {
        console.log(j, b[j]);
        doubleNumber = b[j] * 2;
        sumOfNumbers += doubleNumber;
    }
    return new Promise(resolve => setTimeout(() => resolve(sumOfNumbers), 2000))
}

async function asyncOperation() {
    const b = [];
    for (let i = 0; i < 3; i++) {
        let number1 = parseInt(Math.random() * 20);
        b.push(number1);
    }
    console.log("arrayNumbers =", b);
    const result = sumThreeNumbers(b);
    return (result);
}

asyncOperation().then(total => console.log("La suma del doble d'aquests nombres és:", total));




// Nivell 3 - Exercici 1
/* Força i captura tants errors com puguis dels nivells 1 i 2.*/

