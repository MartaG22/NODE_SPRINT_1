//!Entrega 1.3: Promises & Callbacks

// Nivell 1 - Exercici 1    //*-----OKKKKK
/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.*/

function miPromesa() {
    return new Promise(function (resolve, reject) {
        let nombre = parseInt(Math.random() * 100);
        console.log("numero random:", nombre)
        if (nombre % 2 === 0) {
            resolve("Correcte!");
        } else {
            reject("Error!");
        }
    });
}
miPromesa().then(function (missatge) {
    console.log(`El nombre és parell!!!  ${missatge}`);

}).catch(function (missatge) {
    console.log(`Aquest nombre és parell!!!  ${missatge}`);

});



// Nivell 1 - Exercici 2   //* --- CORREGIT-----OKKKKK
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/
//? Havía fet l'exercici sense callback


//*Exercici  Corregit  ------------    (27-5-22)    --------------------OKKKKK

function showResult(result) {
    console.log(`El nombre resultant és ${result}!!!`);
    if (result % 2 === 0) {
        return console.log(`El nombre ${result} és parell!!!`);
    } else {
        return console.log(`El nombre ${result} NO és parell! És senar!!!`);
    }
}

function sumNums(number1, callback) {
    let number2 = parseInt(Math.random() * 100);
    const result = number1 + number2;
    callback(result);
}
sumNums(parseInt(Math.random() * 100), showResult)





// Nivell 2 - Exercici 1  //* --- CORREGIT

// Donats els objectes employees i salaries, crea una arrow function getEmployee()
// que retorni una Promise efectuant la cerca en l'objecte pel seu id.


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



// Exercici  Corregit  ------------    (28-5-22)    --------------- //!Exercici  tornat a Corregir  (31-5-22)


const getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        let positionEmployee = (employees.findIndex(found => found.id === id));
        if (positionEmployee != -1) {
            resolve(`Empleat:  ${employees[positionEmployee].name}!`);
        } else {
            reject(new Error(`No s'ha trobat el treballador amb l'ID ${id}`));
        }
    });
}

getEmployee(2)
    .then(resolve => console.log(resolve))
    .catch(Error => console.log(Error))



// Nivell 2 - Exercici 2  //! --- CORREGIT  

/* Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i
  retorni el seu salari.*/



//*Exercici  tornat a Corregir  ------------    (31 -5-22)    ---------------  

const getSalary = (currentEmployee) => {
    return new Promise((resolve, reject) => {
        let position = (employees.indexOf(currentEmployee));

        if (position != -1) {
            let currentSalary = (salaries[position].salary);
            resolve(`Salari: ${currentSalary}`);
        } else {
            reject(`No s'ha trobat aquest treballador`);
        }
    });
}

getSalary(employees[2])
    .then(resolve => console.log(resolve))
    .catch(Error => console.log(Error))





// Nivell 2 - Exercici 3  // --- CORREGIT  //! REVISAR

/* Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises
  de manera que es retorni per la consola el nom de l'empleat i el seu salari.*/




//Exercici  Corregit  ------------    (28-5-22)    ---------------//!Exercici  tornat a Corregir   (31-5-22)
// Si li trec el catch, em dona error

getEmployee(1).then(name => {
    console.log(name);
    return getSalary(name);
}).then(salary => {
    console.log(salary)
}).catch(Error);




// Nivell 3 - Exercici 1     // --- CORREGIT   //! REVISAR

/* Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.*/

//Exercici  Corregit  ------------    (28-5-22)    ---------------  //!NO  FUNCIONA SEGÚN INDICA EL ENUNCIADO!

// let id = 6;
getEmployee(6).then(name => {
    console.log(name);
    return getSalary(name);
}).then(salary => {
    console.log(salary);
}).catch(Error);

