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



// Nivell 1 - Exercici 2   //* --- CORREGIT
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/
//? Havía fet l'exercici sense callback

//*Exercici antic:
/*  const operacio = (nombre, callback) => {
    console.log(nombre);
    if (nombre % 2 === 0) {
        return console.log(`El nombre ${nombre} és parell!!!`);
    } else {
        return console.log(`El nombre ${nombre} NO és parell! És senar!!!`);
    }
}
operacio(parseInt(Math.random() * 100), (a) => a); */




//*Exercici  Corregit  ------------    (27-5-22)    ---------------

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

//*Exercici antic:
/*function getEmployee() {
    return new Promise(function (resolve, reject) {
        let getId = (parseInt(Math.random() * 5));
        console.log("ID:", getId);
        function foundEmployee(worker) {
            return worker.id === getId;
        }
        let positionEmployee = (employees.findIndex(foundEmployee));
        if (foundEmployee) {
            resolve(positionEmployee);
        } else {
            reject("Error");
        }
    });
}
getEmployee().then(function (positionEmployee) {
    console.log(`Id de l'empleat:  ${employees[positionEmployee].id}`);
    console.log(`L'empleat s'ha trobat, ha estat  ${employees[positionEmployee].name}`);
}).catch(function () {
    // console.log(`Id de l'empleat:  ${getId}`);
    console.log(`No s'ha trobat el treballador amb aquest ID`);
});*/


//*Exercici  Corregit  ------------    (28-5-22)    ---------------

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        let positionEmployee = (employees.findIndex(found => found.id === id));
        console.log("posicion:", positionEmployee)
        if (positionEmployee != -1) {
            resolve(`L'empleat amb id ${id} s'ha trobat, ha estat  ${employees[positionEmployee].name}!`);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getEmployee(5)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))





// Nivell 2 - Exercici 2  //* --- CORREGIT

/* Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i
  retorni el seu salari.*/

//*Exercici antic:
/*function getSalary() {
    return new Promise(function (resolve, reject) {
        let getId = (parseInt(Math.random() * 5));
        console.log("ID:", getId);

        function foundEmployee(worker) {
            return worker.id === getId;
        }
        let positionEmployee = (employees.findIndex(foundEmployee));

        if (foundEmployee != -1) {
            resolve(positionEmployee);
        } else {
            reject("Error");
        }
    });
}
getSalary().then(function (positionEmployee) {
    console.log(`Id de l'empleat:  ${employees[positionEmployee].id}`);
    console.log(`L'empleat s'ha trobat, ha estat  ${employees[positionEmployee].name}`);
    console.log(`El sou d'aquest empleat és de: ${salaries[positionEmployee].salary}`);

}).catch(function () {
    // console.log(`Id de l'empleat:  ${getId}`);
    console.log(`No s'ha trobat el treballador amb aquest ID`);

});*/


//*Exercici  Corregit  ------------    (28-5-22)    ---------------

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

getSalary(2)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))





// Nivell 2 - Exercici 3  //* --- CORREGIT

/* Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises
  de manera que es retorni per la consola el nom de l'empleat i el seu salari.*/

//*Exercici antic:
/*  function getEmployee() {
    return new Promise(function (resolve) {
        let getId = (parseInt(Math.random() * (1, 3) + 1));
        console.log("ID:", getId);
        function foundEmployee(worker) {
            return worker.id === getId;
        }
        let positionEmployee = (employees.findIndex(foundEmployee));
        function getSalary() {
            return new Promise(function (resolve) {
                if (foundEmployee) {
                    resolve(positionEmployee);
                } else {
                    reject("Error");
                }
            });
        }
        getSalary().then(function (positionEmployee) {
            console.log(`El sou d'aquest empleat és de: ${salaries[positionEmployee].salary}`);
        });
        if (foundEmployee != -1) {
            resolve(positionEmployee);
        } else {
            reject("Error");
        }
    });
}
getEmployee().then(function (positionEmployee) {
    console.log(`Id de l'empleat:  ${employees[positionEmployee].id}`);
    console.log(`L'empleat s'ha trobat, ha estat  ${employees[positionEmployee].name}`);
});   */



//*Exercici  Corregit  ------------    (28-5-22)    ---------------

let id = 3
getEmployee(id)
    .then(name => {
        console.log("Nom empleat:", name)
        return getSalary(id)
    }).then(salary => {
        console.log(salary)
    });




// Nivell 3 - Exercici 1     //* --- CORREGIT

/* Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.*/

//*Exercici antic:
/*  function getEmployee() {
    return new Promise(function (resolve, reject) {
        let getId = (parseInt(Math.random() * 5));
        console.log("ID:", getId);
        function foundEmployee(worker) {
            return worker.id === getId;
        }
        let positionEmployee = (employees.findIndex(foundEmployee));
        function getSalary() {
            return new Promise(function (resolve) {
                if (foundEmployee) {
                    resolve(positionEmployee);
                } else {
                    reject("Error");
                }
            });
        }

        if (positionEmployee != -1) {
            getSalary().then(function (positionEmployee) {
                console.log(`El sou d'aquest empleat és de: ${salaries[positionEmployee].salary}`);
            });

            resolve(positionEmployee);
        } else {
            reject("Error");
        }
    });
}  */

// getEmployee(id).then(positionEmployee => {
//     console.log(`Id de l'empleat:  ${employees[positionEmployee].id}`);

// }).then(salary => {
//     console.log(`L'empleat s'ha trobat, ha estat  ${salary[positionEmployee].name}`);

// }).catch((error) => {
//     console.log(error)
// })



//*Exercici  Corregit  ------------    (28-5-22)    ---------------


getEmployee(id).then(resolve => {
    console.log(resolve);
    return getSalary(id)
}).then(resolve => {
    console.log(resolve);
}).catch((error) => {
    console.log(error)
})
